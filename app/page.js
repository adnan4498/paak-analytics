// import Image from "next/image";

// export default function Home() {
//   return (
//     // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//     //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//     //     <Image
//     //       className="dark:invert"
//     //       src="/next.svg"
//     //       alt="Next.js logo"
//     //       width={180}
//     //       height={38}
//     //       priority
//     //     />
//     //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//     //       <li className="mb-2 tracking-[-.01em]">
//     //         Get started by editing{" "}
//     //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//     //           app/page.js
//     //         </code>
//     //         .
//     //       </li>
//     //       <li className="tracking-[-.01em]">
//     //         Save and see your changes instantly.
//     //       </li>
//     //     </ol>

//     //     <div className="flex gap-4 items-center flex-col sm:flex-row">
//     //       <a
//     //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//     //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         <Image
//     //           className="dark:invert"
//     //           src="/vercel.svg"
//     //           alt="Vercel logomark"
//     //           width={20}
//     //           height={20}
//     //         />
//     //         Deploy now
//     //       </a>
//     //       <a
//     //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//     //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         Read our docs
//     //       </a>
//     //     </div>
//     //   </main>
//     //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/file.svg"
//     //         alt="File icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Learn
//     //     </a>
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/window.svg"
//     //         alt="Window icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Examples
//     //     </a>
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/globe.svg"
//     //         alt="Globe icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Go to nextjs.org →
//     //     </a>
//     //   </footer>
//     // </div>
    
//   );
// }

"use client"
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Globe,
  BarChart3,
  MessageCircle,
  Video,
  FileText,
  Palette,
  Code,
  Camera,
  Music,
  Calculator,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Navbar from './Navbar';

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Hosting",
      description: "Stream HD videos with adaptive playback"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Course Builder", 
      description: "Drag & drop course creation tools"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student Management",
      description: "Track progress and engagement"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics",
      description: "Detailed insights and reporting"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Community",
      description: "Interactive discussions and forums"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificates",
      description: "Custom completion certificates"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Online Educator",
      company: "EduTech Pro",
      avatar: "SJ",
      content: "LearnHub transformed how I deliver courses. The platform is intuitive and my students love the interactive features.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Corporate Trainer",
      company: "TechCorp",
      avatar: "MC", 
      content: "We scaled our training programs effortlessly. The analytics help us understand what works best for our teams.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Coach",
      company: "Artisan Academy",
      avatar: "ER",
      content: "The community features keep my students engaged long after they complete the courses. Amazing platform!",
      rating: 5
    }
  ];

  const courseCategories = [
    { icon: <Code className="w-8 h-8" />, name: "Programming", courses: "12,000+" },
    { icon: <Palette className="w-8 h-8" />, name: "Design", courses: "8,500+" },
    { icon: <Camera className="w-8 h-8" />, name: "Photography", courses: "3,200+" },
    { icon: <Music className="w-8 h-8" />, name: "Music", courses: "4,800+" },
    { icon: <Calculator className="w-8 h-8" />, name: "Business", courses: "15,000+" },
    { icon: <Heart className="w-8 h-8" />, name: "Health & Fitness", courses: "6,100+" }
  ];

  const stats = [
    { number: "50M+", label: "Students Enrolled" },
    { number: "100K+", label: "Courses Created" },
    { number: "25K+", label: "Expert Instructors" },
    { number: "190+", label: "Countries Reached" }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Up to 3 courses",
        "50 students",
        "Basic analytics",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$39",
      period: "per month",
      description: "For growing creators",
      features: [
        "Unlimited courses",
        "500 students", 
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "Certificates"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$99",
      period: "per month", 
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited students",
        "White-label solution",
        "API access",
        "Dedicated success manager",
        "Advanced integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Now with AI-powered course creation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Create & sell 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> online courses </span>
                that students love
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build engaging courses, connect with your audience, and grow your business with our all-in-one learning platform trusted by millions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-gray-50 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No credit card required • Free 14-day trial
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-900 rounded-lg m-4 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Course Created!</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Revenue</div>
                    <div className="text-lg font-bold text-green-600">+$2,450</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">Trusted by creators worldwide</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From course creation to student engagement, we've got all the tools you need to build a thriving online education business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Explore popular categories
            </h2>
            <p className="text-xl text-gray-600">
              Discover courses across diverse topics and industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600">
                    {category.icon}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{category.courses}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Loved by creators everywhere
            </h2>
            <p className="text-xl text-gray-600">
              See what our community has to say about their success
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    <div className="text-blue-600 text-sm">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105'
                      : 'border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include our core features. Need something custom?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact our sales team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your expertise into income?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful creators who've built thriving online course businesses with LearnHub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center text-blue-100 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            30-day money-back guarantee • No setup fees
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LearnHub</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering creators to build, market, and sell online courses that transform lives and businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <Video className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 LearnHub. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;