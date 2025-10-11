import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Complete Guide to AI-Powered Business Automation in 2024",
    excerpt: "Discover how artificial intelligence is transforming business operations and learn practical strategies to implement AI automation in your organization.",
    content: `
      <h2>Introduction</h2>
      <p>In today's rapidly evolving business landscape, AI-powered automation isn't just a competitive advantage—it's becoming essential for survival. Companies that fail to embrace intelligent automation risk being left behind by more agile, efficient competitors.</p>
      
      <h2>What is AI-Powered Business Automation?</h2>
      <p>AI-powered business automation combines artificial intelligence with traditional automation to create systems that can learn, adapt, and make decisions without human intervention. Unlike simple rule-based automation, AI automation can handle complex, variable situations and improve over time.</p>
      
      <h2>Key Benefits of AI Automation</h2>
      <ul>
        <li><strong>Cost Reduction:</strong> Our clients typically see 40-60% reduction in operational costs</li>
        <li><strong>Improved Accuracy:</strong> AI systems achieve 99%+ accuracy in routine tasks</li>
        <li><strong>24/7 Operations:</strong> Continuous processing without breaks or downtime</li>
        <li><strong>Scalability:</strong> Handle increasing workloads without proportional staff increases</li>
      </ul>
      
      <h2>Real-World Implementation Strategies</h2>
      <p>At FaithfulVC, we've implemented AI automation for over 200+ clients. Here are the most effective strategies:</p>
      
      <h3>1. Start with High-Volume, Repetitive Tasks</h3>
      <p>Begin with processes that are time-consuming but straightforward. Customer service inquiries, data entry, and invoice processing are excellent starting points.</p>
      
      <h3>2. Implement Gradual AI Integration</h3>
      <p>Don't attempt to automate everything at once. Our phased approach ensures smooth transitions and minimizes disruption.</p>
      
      <h3>3. Focus on Data Quality</h3>
      <p>AI systems are only as good as the data they're trained on. Ensure clean, well-structured data before implementation.</p>
      
      <h2>Case Study: TechFlow Solutions</h2>
      <p>We helped TechFlow Solutions implement an AI customer service system that:</p>
      <ul>
        <li>Handles 80% of customer inquiries automatically</li>
        <li>Reduced response time from 4 hours to 30 seconds</li>
        <li>Saved £200,000 annually in operational costs</li>
        <li>Improved customer satisfaction by 40%</li>
      </ul>
      
      <h2>Getting Started with AI Automation</h2>
      <p>Ready to transform your business with AI automation? Here's how to begin:</p>
      <ol>
        <li><strong>Process Audit:</strong> Identify automation opportunities</li>
        <li><strong>ROI Analysis:</strong> Calculate potential cost savings and efficiency gains</li>
        <li><strong>Pilot Program:</strong> Start with a small, manageable implementation</li>
        <li><strong>Scale Gradually:</strong> Expand successful automations across your organization</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>AI-powered automation is no longer a luxury—it's a necessity for businesses that want to remain competitive. The question isn't whether to implement AI automation, but how quickly you can get started.</p>
      
      <p>If you're ready to explore AI automation for your business, our team of experts is here to help. Contact us for a free consultation and ROI assessment.</p>
    `,
    author: "FaithfulVC Team",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "AI & Automation",
    tags: ["AI", "Automation", "Business Strategy", "Digital Transformation"]
  },
  {
    id: 2,
    title: "Why Your SaaS Needs ISO 27001 Certification in 2024",
    excerpt: "Enterprise customers increasingly demand ISO 27001 compliance. Learn how to achieve certification and win more deals.",
    content: `
      <h2>The Growing Demand for ISO 27001</h2>
      <p>In 2024, ISO 27001 certification has become a non-negotiable requirement for SaaS companies targeting enterprise clients. With data breaches costing an average of £3.5 million, enterprises are demanding rigorous security standards from their technology partners.</p>
      
      <h2>What is ISO 27001?</h2>
      <p>ISO 27001 is an international standard that provides a framework for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It demonstrates your commitment to protecting customer data and managing information security risks.</p>
      
      <h2>Benefits for SaaS Companies</h2>
      <ul>
        <li><strong>Competitive Advantage:</strong> Win enterprise deals that require compliance</li>
        <li><strong>Higher Valuations:</strong> Certified companies command 20-30% higher valuations</li>
        <li><strong>Reduced Insurance Costs:</strong> Up to 25% savings on cyber insurance premiums</li>
        <li><strong>Customer Trust:</strong> Demonstrate commitment to security best practices</li>
        <li><strong>Operational Excellence:</strong> Improve internal processes and risk management</li>
      </ul>
      
      <h2>The Certification Process</h2>
      <p>Achieving ISO 27001 certification typically takes 6-12 months. Here's our proven approach:</p>
      
      <h3>Phase 1: Gap Analysis (4-6 weeks)</h3>
      <p>We conduct a comprehensive assessment of your current security posture against ISO 27001 requirements, identifying gaps and creating a roadmap for compliance.</p>
      
      <h3>Phase 2: ISMS Implementation (12-20 weeks)</h3>
      <p>We help you implement the necessary policies, procedures, and technical controls to meet ISO 27001 standards.</p>
      
      <h3>Phase 3: Certification Audit (4-8 weeks)</h3>
      <p>We prepare you for the formal certification audit and provide ongoing support throughout the process.</p>
      
      <h2>Success Story: CloudSecure Ltd</h2>
      <p>CloudSecure, a UK-based SaaS startup, approached us needing ISO 27001 certification to close a £5M enterprise deal. Our team:</p>
      <ul>
        <li>Completed certification in just 8 months</li>
        <li>Achieved zero major non-conformities in the audit</li>
        <li>Helped them secure the enterprise contract</li>
        <li>Reduced their cyber insurance costs by 30%</li>
      </ul>
      
      <h2>Common Implementation Challenges</h2>
      <p>Based on our experience with 50+ ISO 27001 implementations, here are the most common challenges:</p>
      
      <h3>1. Resource Allocation</h3>
      <p>ISO 27001 requires significant time investment from key personnel. Plan for 20-30% of relevant staff time during implementation.</p>
      
      <h3>2. Cultural Change</h3>
      <p>Security must become part of your company culture. This requires buy-in from leadership and comprehensive staff training.</p>
      
      <h3>3. Documentation Overhead</h3>
      <p>The standard requires extensive documentation. We help streamline this process to minimize administrative burden.</p>
      
      <h2>ROI of ISO 27001 Certification</h2>
      <p>While certification requires investment, the ROI is substantial:</p>
      <ul>
        <li><strong>Average cost:</strong> £50,000-£100,000 for initial certification</li>
        <li><strong>Average benefit:</strong> £500,000+ in new enterprise contracts within 12 months</li>
        <li><strong>Ongoing savings:</strong> Reduced insurance costs, fewer security incidents, improved efficiency</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Ready to begin your ISO 27001 journey? Here's what we recommend:</p>
      <ol>
        <li><strong>Free Assessment:</strong> We'll evaluate your current security posture</li>
        <li><strong>Custom Roadmap:</strong> Receive a detailed implementation plan</li>
        <li><strong>Expert Guidance:</strong> Work with our ISO 27001 Lead Auditor</li>
        <li><strong>Ongoing Support:</strong> Maintain certification with our managed services</li>
      </ol>
      
      <p>Don't let security compliance be the barrier to your next big enterprise deal. Contact us today to start your ISO 27001 certification journey.</p>
    `,
    author: "Security Team",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Cybersecurity",
    tags: ["ISO 27001", "Compliance", "SaaS", "Enterprise Sales"]
  },
  {
    id: 3,
    title: "Next.js 15 Performance Optimization: Real-World Case Study",
    excerpt: "How we achieved 40% faster load times for a high-traffic e-commerce platform using Next.js 15 optimization techniques.",
    content: `
      <h2>The Challenge</h2>
      <p>RetailMax, a leading UK e-commerce platform, was experiencing significant performance issues that were impacting their conversion rates and customer satisfaction. Page load times exceeded 4 seconds, and their Core Web Vitals scores were failing Google's standards.</p>
      
      <h2>Initial Performance Analysis</h2>
      <p>Our performance audit revealed several critical issues:</p>
      <ul>
        <li><strong>Large JavaScript bundles:</strong> Over 2MB of JavaScript on initial load</li>
        <li><strong>Inefficient image loading:</strong> Unoptimized images accounting for 60% of page weight</li>
        <li><strong>Poor caching strategy:</strong> Static assets weren't being cached effectively</li>
        <li><strong>Server-side rendering bottlenecks:</strong> Database queries blocking initial render</li>
      </ul>
      
      <h2>Next.js 15 Optimization Strategies</h2>
      
      <h3>1. Advanced Code Splitting</h3>
      <p>We implemented granular code splitting using Next.js 15's enhanced dynamic imports:</p>
      
      <pre><code>// Before: Large bundle
      import { ProductGrid, ReviewSystem, RecommendationEngine } from './components'
      
      // After: Granular splitting
      const ProductGrid = dynamic(() => import('./ProductGrid'), {
        loading: () => <ProductGridSkeleton />
      })
      
      const ReviewSystem = dynamic(() => import('./ReviewSystem'), {
        ssr: false
      })
      </code></pre>
      
      <h3>2. Image Optimization with Next.js Image Component</h3>
      <p>Leveraged Next.js 15's improved Image component with advanced optimization features:</p>
      
      <pre><code>import Image from 'next/image'
      
      // Optimized product images with priority loading
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        priority={index < 4} // Priority for above-fold images
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      </code></pre>
      
      <h3>3. Server Components and Streaming</h3>
      <p>Utilized React Server Components to reduce client-side JavaScript and implement streaming for faster perceived performance:</p>
      
      <pre><code>// Server Component for product data
      export default async function ProductPage({ params }: { params: { id: string } }) {
        const product = await fetchProduct(params.id)
        
        return (
          <div>
            <ProductHeader product={product} />
            <Suspense fallback={<ReviewsSkeleton />}>
              <ProductReviews productId={params.id} />
            </Suspense>
          </div>
        )
      }
      </code></pre>
      
      <h3>4. Edge Runtime Optimization</h3>
      <p>Implemented edge runtime for API routes to reduce latency:</p>
      
      <pre><code>export const runtime = 'edge'
      
      export async function GET(request: Request) {
        const { searchParams } = new URL(request.url)
        const query = searchParams.get('q')
        
        // Fast product search with edge computing
        const results = await searchProducts(query)
        return Response.json(results)
      }
      </code></pre>
      
      <h2>Caching Strategy Overhaul</h2>
      <p>We implemented a multi-layered caching approach:</p>
      
      <ul>
        <li><strong>Static Generation (SSG):</strong> Product category pages</li>
        <li><strong>Incremental Static Regeneration (ISR):</strong> Product detail pages</li>
        <li><strong>Edge Caching:</strong> API responses cached at CDN level</li>
        <li><strong>Client-side Caching:</strong> SWR for product data</li>
      </ul>
      
      <h2>Database Optimization</h2>
      <p>Performance improvements weren't limited to the frontend:</p>
      
      <ul>
        <li><strong>Query Optimization:</strong> Reduced database queries by 70%</li>
        <li><strong>Connection Pooling:</strong> Implemented efficient connection management</li>
        <li><strong>Read Replicas:</strong> Distributed read operations across multiple databases</li>
        <li><strong>Redis Caching:</strong> Cached frequently accessed product data</li>
      </ul>
      
      <h2>Results: Dramatic Performance Improvements</h2>
      <p>After 6 weeks of optimization work, the results were exceptional:</p>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Performance Metrics</h3>
        <ul>
          <li><strong>Page Load Time:</strong> 4.2s → 2.1s (50% improvement)</li>
          <li><strong>First Contentful Paint:</strong> 2.8s → 1.2s (57% improvement)</li>
          <li><strong>Largest Contentful Paint:</strong> 4.1s → 2.3s (44% improvement)</li>
          <li><strong>Cumulative Layout Shift:</strong> 0.25 → 0.08 (68% improvement)</li>
          <li><strong>Bundle Size:</strong> 2.1MB → 800KB (62% reduction)</li>
        </ul>
      </div>
      
      <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Business Impact</h3>
        <ul>
          <li><strong>Conversion Rate:</strong> +28% increase</li>
          <li><strong>Revenue:</strong> +£2.3M annually from performance improvements</li>
          <li><strong>SEO Rankings:</strong> Average position improved by 15 places</li>
          <li><strong>Customer Satisfaction:</strong> Page experience complaints reduced by 85%</li>
        </ul>
      </div>
      
      <h2>Key Learnings and Best Practices</h2>
      
      <h3>1. Measure Everything</h3>
      <p>We used comprehensive monitoring throughout the optimization process:</p>
      <ul>
        <li>Google PageSpeed Insights for Core Web Vitals</li>
        <li>WebPageTest for detailed waterfall analysis</li>
        <li>Lighthouse CI for continuous performance monitoring</li>
        <li>Real User Monitoring (RUM) for actual user experience data</li>
      </ul>
      
      <h3>2. Optimize for Perceived Performance</h3>
      <p>Sometimes perception matters more than actual load times. We focused on:</p>
      <ul>
        <li>Progressive loading with skeleton screens</li>
        <li>Optimistic UI updates for better responsiveness</li>
        <li>Strategic use of loading states and animations</li>
      </ul>
      
      <h3>3. Continuous Optimization</h3>
      <p>Performance optimization isn't a one-time task. We established:</p>
      <ul>
        <li>Automated performance budgets in CI/CD pipeline</li>
        <li>Weekly performance monitoring reports</li>
        <li>Quarterly optimization reviews and improvements</li>
      </ul>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Based on our experience, here are common mistakes to avoid:</p>
      
      <ol>
        <li><strong>Over-optimization:</strong> Don't optimize everything—focus on what impacts users most</li>
        <li><strong>Ignoring Real User Metrics:</strong> Lab data doesn't always reflect real-world performance</li>
        <li><strong>Premature Optimization:</strong> Profile first, optimize second</li>
        <li><strong>Forgetting Mobile:</strong> Most traffic comes from mobile devices—optimize accordingly</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Next.js 15 provides powerful tools for performance optimization, but success requires a systematic approach, continuous monitoring, and focus on user experience. The 40% performance improvement we achieved for RetailMax translated directly to increased revenue and customer satisfaction.</p>
      
      <p>Ready to optimize your Next.js application? Our team of performance experts can help you achieve similar results. Contact us for a free performance audit and optimization roadmap.</p>
    `,
    author: "Development Team",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["Next.js", "Performance", "E-commerce", "Optimization"]
  }
];

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postId = parseInt(id);
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.id !== postId).slice(0, 2);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Article Header */}
      <article className="w-full py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="text-[#0074D9] hover:text-[#00C2A8] -ml-4"
            >
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white rounded-full">
                {post.category}
              </Badge>
              {post.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-5xl font-extrabold text-black mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-[#1E1E1E] leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-[#1E1E1E] pb-6 border-b">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-black prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-[#1E1E1E] prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-[#1E1E1E] prose-li:mb-2 prose-strong:text-black prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#00C2A8]/10 to-[#0074D9]/10 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-[#1E1E1E] mb-6 max-w-2xl mx-auto">
                Get expert guidance from our team of specialists. Schedule a free consultation 
                to discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white hover:scale-105 transform transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                >
                  <a href="https://calendar.app.google/a9nebr5GxsShHSNy7" target="_blank" rel="noopener noreferrer">
                    Schedule Free Consultation
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-[#0074D9] text-[#0074D9] hover:bg-gradient-to-r hover:from-[#00C2A8] hover:to-[#0074D9] hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Link href="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border shadow-lg rounded-2xl h-full">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-gradient-to-r from-[#00C2A8] to-[#0074D9] text-white text-xs rounded-full">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-black group-hover:text-[#0074D9] transition-colors leading-tight">
                      {relatedPost.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-[#1E1E1E] mb-4 leading-relaxed flex-1">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#1E1E1E] mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{relatedPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-[#0074D9] hover:text-[#00C2A8] p-0 h-auto self-start"
                    >
                      <Link href={`/blog/${relatedPost.id}`} className="flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}