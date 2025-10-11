import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { sendContactFormEmail, sendAutoReplyEmail } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, projectType, budget, message } = body;
    
    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare the lead data
    const leadData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      company: body.company?.trim() || null,
      phone: body.phone?.trim() || null,
      projectType,
      budget,
      timeline: body.timeline || null,
      message: message.trim(),
      source: 'contact_form',
      createdAt: new Date(),
      status: 'new',
      // Lead scoring
      score: calculateLeadScore(projectType, budget),
      priority: calculatePriority(projectType, budget),
    };

    // Save to MongoDB
    const client = await clientPromise;
    const db = client.db('faithful_ventures');
    const collection = db.collection('leads');
    
    const result = await collection.insertOne(leadData);
    
    // Send emails (don't wait for them to complete)
    Promise.all([
      sendContactFormEmail(leadData),
      sendAutoReplyEmail(leadData)
    ]).catch(error => {
      console.error('Error sending emails:', error);
    });

    return NextResponse.json({
      success: true,
      leadId: result.insertedId,
      message: 'Thank you! We\'ll contact you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Lead scoring function
function calculateLeadScore(projectType: string, budget: string): number {
  let score = 50; // Base score

  // Project type scoring
  const projectScores: { [key: string]: number } = {
    'multiple': 30,
    'ai-automation': 25,
    'cybersecurity': 25,
    'web-development': 15,
    'seo-marketing': 10,
    'consultation': 5
  };
  score += projectScores[projectType] || 0;

  // Budget scoring
  const budgetScores: { [key: string]: number } = {
    '100k-plus': 40,
    '50k-100k': 30,
    '25k-50k': 20,
    '10k-25k': 10,
    'under-10k': 0,
    'not-sure': 5
  };
  score += budgetScores[budget] || 0;

  return Math.min(score, 100);
}

// Priority calculation
function calculatePriority(projectType: string, budget: string): 'high' | 'medium' | 'low' {
  const highValueBudgets = ['100k-plus', '50k-100k'];
  const highValueProjects = ['multiple', 'ai-automation', 'cybersecurity'];
  
  if (highValueBudgets.includes(budget) || highValueProjects.includes(projectType)) {
    return 'high';
  }
  
  if (budget === '25k-50k' || projectType === 'web-development') {
    return 'medium';
  }
  
  return 'low';
}