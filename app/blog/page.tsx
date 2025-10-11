import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Shield, Code, Bot } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: "The Complete Guide to AI-Powered Business Automation in 2024",
    excerpt: "Discover how artificial intelligence is transforming business operations and learn practical strategies to implement AI automation in your organization.",
    content: "In today's rapidly evolving business landscape, AI-powered automation isn't just a competitive advantage—it's becoming essential for survival...",
    author: "FaithfulVC Team",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "AI & Automation",
    image: "/api/placeholder/800/400",
    tags: ["AI", "Automation", "Business Strategy", "Digital Transformation"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Why Your SaaS Needs ISO 27001 Certification in 2024",
      excerpt: "Enterprise customers increasingly demand ISO 27001 compliance. Learn how to achieve certification and win more deals.",
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
      author: "Development Team",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Web Development",
      tags: ["Next.js", "Performance", "E-commerce", "Optimization"]
    },
    {
      id: 4,
      title: "SEO Strategy That Generated 300% More Organic Traffic",
      excerpt: "A comprehensive breakdown of the SEO tactics that tripled organic traffic for our B2B SaaS client in 6 months.",
      author: "Marketing Team",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "Digital Marketing",
      tags: ["SEO", "Content Marketing", "B2B", "Growth"]
    },
    {
      id: 5,
      title: "Building Secure APIs: A Developer's Complete Guide",
      excerpt: "Essential security practices for API development, from authentication to rate limiting and beyond.",
      author: "Security Team",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "Cybersecurity",
      tags: ["API Security", "Development", "Authentication", "Best Practices"]
    },
    {
      id: 6,
      title: "AI Chatbot ROI: How One Client Saved £200k Annually",
      excerpt: "Real-world case study showing how AI chatbot implementation reduced customer service costs while improving satisfaction.",
      author: "AI Team",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "AI & Automation",
      tags: ["Chatbots", "ROI", "Customer Service", "Cost Savings"]
    },
    {
      id: 7,
      title: "GDPR Compliance for Tech Startups: Practical Checklist",
      excerpt: "Navigate GDPR requirements with our comprehensive checklist designed specifically for growing tech companies.",
      author: "Compliance Team",
      date: "2023-12-25",
      readTime: "11 min read",
      category: "Compliance",
      tags: ["GDPR", "Startups", "Privacy", "Legal"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 7, icon: TrendingUp },
    { name: "AI & Automation", count: 2, icon: Bot },
    { name: "Cybersecurity", count: 2, icon: Shield },
    { name: "Web Development", count: 1, icon: Code },
    { name: "Digital Marketing", count: 1, icon: TrendingUp },
    { name: "Compliance", count: 1, icon: Shield }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              Insights & 
              <span className="text-green-600"> Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Stay ahead with our latest insights on AI, cybersecurity, web development, and digital transformation. 
              Learn from real-world case studies and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold"
              >
                <Link href="#featured">
                  Read Latest Insights
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact">
                  Subscribe to Updates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="w-full py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-xl text-gray-600">Our most comprehensive guide to modern business transformation</p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-12 flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-24 h-24 text-green-600 mx-auto mb-6" />
                  <Badge className="bg-green-600 text-white text-sm px-3 py-1">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href={`/blog/${featuredPost.id}`} className="flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Posts Grid */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, idx) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={idx}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-green-50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 group-hover:text-green-600">
                              {category.name}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, tagIdx) => (
                          <Badge key={tagIdx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {post.category}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-green-600 hover:text-green-700 p-0 h-auto"
                        >
                          <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                            Read More
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Industry Insights</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Get weekly insights on AI, cybersecurity, and digital transformation delivered to your inbox. 
            Join 2,000+ professionals staying ahead of the curve.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-green-200 mt-3">
              No spam. Unsubscribe anytime. 2-3 emails per week maximum.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}