"use client";
import React, { useState, useEffect } from "react";
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
  ChevronRight,
  Headset,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "📹 ",
      title: "Interactive Learning",
      description:
        "Engaging sessions with practical case studies and real-world examples.",
    },
    {
      icon: "👨‍🎓",
      title: "Student Support",
      description:
        "Guidance, progress tracking, and mentorship throughout your learning journey.",
    },
    {
      icon: "📊",
      title: "Practical Insights",
      description:
        "Hands-on projects and data-driven exercises for real skill development.",
    },
    {
      icon: "💬",
      title: "Collaborative Learning",
      description:
        "Group classes, discussions, and knowledge sharing across industries.",
    },
    {
      icon: "🏆",
      title: "Verified Certificates",
      description:
        "Recognized certificates that can be validated online to boost your professional profile.",
    },
  ];

const testimonials = [
  {
    name: "Adnan Khan",
    role: "Data Analyst",
    avatar: "AK",
    content:
      "💬 The data analytics training was practical and hands-on. I can now apply these techniques directly in my role.",
    rating: 5,
  },
  {
    name: "Bilal Hussain",
    role: "Junior Analyst, Education Sector",
    avatar: "BH",
    content:
      "💬 The programming workshops were beginner-friendly yet detailed. I feel confident writing scripts to automate my work now.",
    rating: 5,
  },
  {
    name: "Suffiyan Ahmed Khan",
    role: "Full Stack Developer",
    avatar: "SAK",
    content:
      "💬 The Shariah-compliant investment training gave me a clear understanding of ethical investment opportunities.",
    rating: 5,
  },
  {
    name: "Faisal Raza",
    role: "Graduate Trainee",
    avatar: "FR",
    content:
      "💬 The trainer explained complex topics with simple, real-life examples. It made learning both easy and enjoyable.",
    rating: 5,
  },
  {
    name: "Hamid Ali",
    role: "Student, Business Intelligence Course",
    avatar: "HA",
    content:
      "💬 The certificate verification system gives credibility to my achievement and makes it easy to showcase my skills.",
    rating: 5,
  },
];


  const courseCategories = [
    {
      icon: "📊",
      name: "Data Analytics",
      description: "Transform raw data into actionable insights.",
    },
    {
      icon: "📈",
      name: "Business Intelligence",
      description:
        "Master dashboards, reporting, and data-driven decision-making.",
    },
    {
      icon: "💻",
      name: "Programming & Tools",
      description:
        "Gain hands-on experience with essential programming languages and analytics platforms.",
    },
    {
      icon: "💼",
      name: "Career Development",
      description:
        "Enhance professional skills with practical guidance for growth.",
    },
    {
      icon: "🌍",
      name: "Shariah-Compliant Investment",
      description:
        "Learn ethical investment strategies and analytics aligned with Shariah principles.",
    },
    {
      icon: "🤝",
      name: "Corporate Training",
      description: "Customized workshops designed for teams and organizations.",
    },
  ];

  const stats = [
    {
      number: "🎓 Professional Training",
      label:
        "Courses designed for real-world applications in data, business intelligence, and Shariah-compliant investment.",
    },
    {
      number: "👨‍💻 Hands-On Learning",
      label: "Interactive sessions that combine theory with practice.",
    },
    {
      number: "🌍 Diverse Industries",
      label:
        "Experience across technology, logistics, pharmaceuticals, education, and more.",
    },
    {
      number: "📈 Career Growth",
      label:
        "Helping individuals and organizations make smarter, data-driven decisions.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      heading1: "Start Smart, Learn at Your Pace",
      heading2:
        "Entry-level plan with no expiry, light discounts on sessions, and certificates to mark your progress.",
      price: "PKR 0",
      period: "No Expiry",
      description: "Perfect for getting started",
      features: [
        "15% discount on individual sessions",
        "10% discount on group sessions",
        "Certificate of Completion",
        "Certification test cost: 35% of course price",
      ],
      popular: false,
      discount: false,
    },
    {
      name: "Silver",
      heading1: "Affordable Growth, Extra Support",
      heading2:
        "Budget-friendly yearly plan with access to most courses, early booking privileges, and short post-session support.",
      price: "PKR 40,000",
      period: "1 Year",
      description: "For growing creators",
      features: [
        "25% discount on individual sessions",
        "15% discount on group sessions",
        "Early access to book sessions",
        "15 mins post-session support per course",
        "Restricted courses: AI102, AZ105, DATA106",
        "Certificate of Completion",
        "Certification test cost: 35% of discounted price",
      ],
      popular: true,
      discount: false,
    },
    {
      name: "Gold",
      heading1: "Maximum Value, Deeper Learning",
      heading2:
        "A well-balanced yearly plan with high discounts, extended post-session support, and priority access to book sessions.",
      price: " PKR 70,000",
      period: "1 Year",
      description: "For serious educators",
      features: [
        "50% discount on individual sessions",
        "25% discount on group sessions",
        "Early access to book sessions",
        "30 mins post-session support per course",
        "Restricted courses: AI102, AZ105, DATA106",
        "Certificate of Completion",
        "Certification test cost: 35% of discounted price",
      ],
      popular: false,
      discount: false,
    },
    {
      name: "Platinum",
      heading1: "All-Inclusive Premium Experience",
      heading2:
        "Top-tier yearly plan with no restrictions, the highest discounts, and the most comprehensive support for both individual and group sessions.",
      price: "PKR 150,000",
      period: "1 Year",
      description: "For teams and organizations",
      features: [
        "60% discount on individual sessions",
        "50% discount on group sessions",
        "No restrictions on courses",
        "Early access to book sessions",
        "45 mins post-session support per individual course",
        "20 mins post-session support per group course",
        "Certificate of Completion",
        "Certification test cost: 35% of discounted price",
      ],
      popular: false,
      discount: true,
      discountText: "60% Discount",
    },
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
                Online
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Professional{" "}
                </span>
                Training
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering individuals and organizations with practical
                expertise in data analytics, business intelligence, programming,
                and Shariah-compliant investment. Our training programs are
                designed to combine real-world applications with hands-on
                learning, enabling professionals to master the tools,
                techniques, and decision-making skills required in today’s
                data-driven world. Whether you are looking to advance your
                career, upskill your team, or gain specialized knowledge in
                ethical investment, Paak Analytics Consultancy provides
                comprehensive solutions tailored to your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Browse Courses
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-gray-50 flex items-center justify-center">
                  <Headset className="w-5 h-5 mr-2" />
                  Contact Us
                </button>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No credit card required • Free 14-day trial
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img src="https://evolllution.com/hs-fs/hubfs/Destiny/Imported_Blog_Media/AdobeStock_586188180-4.jpeg?width=600&height=400&name=AdobeStock_586188180-4.jpeg" />
              </div>
              {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-900 rounded-lg m-4 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    Course Created!
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Revenue
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      +$2,450
                    </div>
                  </div>
                </div>
              </div> */}
              asd
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-black text-3xl font-bold">
              Trusted by Learners and Professionals
            </p>
          </div>
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg ">
              Building skills and confidence through practical, industry-focused
              training.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-300 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Logo (emoji) */}
                  <div className="text-4xl mb-3">
                    {stat.number.split(" ")[0]}
                  </div>
                  {/* Heading text */}
                  {/* <div className="text-xl font-bold text-purple-500 mb-2"> */}
                  <div className="bg-gradient-to-r font-bold text-xl mb-2 from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number.split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <div className="text-gray-600 text-center">{stat.label}</div>
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
              From skill development to career growth, Paak Analytics
              Consultancy provides the knowledge and tools you need to excel in
              today’s data-driven world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 text-blue-600"> */}
                <div className="text-2xl mb-2 ">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
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
              Discover specialized courses designed to build practical skills
              and industry expertise.{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600">{category.icon}</div>
                  <span className="text-sm text-gray-500 font-medium">
                    {category.courses}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h3>

                 <h3 className="text-sm mt-2 text-gray-600">
                  {category.description}
                </h3>
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
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-blue-600 text-sm">
                      {testimonials[currentTestimonial].company}
                    </div>
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
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
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
              Choose Your Learning Plan
            </h2>
            <p className="text-xl text-gray-600">
              Select the plan that best fits your educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  plan.popular
                    ? "ring-2 ring-gray-400 transform bg-gradient-to-b from-blue-50 to-white"
                    : plan.discount
                    ? "ring-2 ring-green-600 bg-gradient-to-b from-green-50 to-white"
                    : plan.name === "Gold"
                    ? "bg-gradient-to-b ring-amber-300 ring-2 from-amber-50 to-white"
                    : plan.name === "Silver"
                    ? " bg-gradient-to-b from-gray-50 to-white"
                    : "ring-2 ring-blue-500 bg-white"
                }`}
              >
                {/* Decorative elements - now with overflow-hidden container */}
                <div className="overflow-hidden absolute inset-0 rounded-2xl">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 opacity-10 
          ${
            plan.name === "Basic"
              ? "bg-blue-500 rounded-full -translate-y-16 translate-x-16"
              : ""
          }
          ${
            plan.name === "Silver"
              ? "bg-gray-500 rounded-full -translate-y-16 translate-x-16"
              : ""
          }
          ${
            plan.name === "Gold"
              ? "bg-amber-500 rounded-full -translate-y-16 translate-x-16"
              : ""
          }
          ${
            plan.name === "Platinum"
              ? "bg-green-500 rounded-full -translate-y-16 translate-x-16"
              : ""
          }
        `}
                  ></div>

                  <div
                    className={`absolute bottom-0 left-0 w-32 h-32 opacity-10 
          ${
            plan.name === "Basic"
              ? "bg-white rounded-full translate-y-16 -translate-x-16"
              : ""
          }
          ${
            plan.name === "Silver"
              ? "bg-gray-500 rounded-full translate-y-16 -translate-x-16"
              : ""
          }
          ${
            plan.name === "Gold"
              ? "bg-amber-500 rounded-full translate-y-16 -translate-x-16"
              : ""
          }
          ${
            plan.name === "Platinum"
              ? "bg-green-500 rounded-full translate-y-16 -translate-x-16"
              : ""
          }
        `}
                  ></div>
                </div>

                {/* These badges should NOT be inside the overflow-hidden container */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {plan.discount && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {plan.discountText}
                    </span>
                  </div>
                )}

                <div className="flex-grow relative z-10">
                  <div className="text-center mb-6">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        plan.name === "Basic"
                          ? "text-blue-700"
                          : plan.name === "Silver"
                          ? "text-gray-700"
                          : plan.name === "Gold"
                          ? "text-amber-700"
                          : "text-green-700"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {plan.heading1}
                    </h4>
                    <p className="text-sm min-h-24 text-gray-600 mb-4">
                      {plan.heading2}
                    </p>
                    <div className=" flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2 text-sm">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle
                          className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                            plan.name === "Basic"
                              ? "text-blue-500"
                              : plan.name === "Silver"
                              ? "text-gray-500"
                              : plan.name === "Gold"
                              ? "text-amber-500"
                              : "text-green-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            featureIndex == 0 || featureIndex == 1
                              ? "font-bold text-gray-700"
                              : "font-normal text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mt-auto relative z-10 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105"
                      : plan.discount
                      ? "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 text-white transform hover:scale-105"
                      : plan.name === "Gold"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white transform hover:scale-105"
                      : plan.name === "Silver"
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white transform hover:scale-105"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white transform hover:scale-105"
                  }`}
                >
                  {plan.name === "Basic"
                    ? "Get Started Free"
                    : "Start Learning"}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include certification options. Need guidance?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact our education advisors
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Certification Options
            </h2>
            <p className="text-xl text-gray-600">
              Get certified by test with our comprehensive assessment program
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Example Calculation (Certification by Test)
              </h3>
              <p className="text-lg text-gray-600">
                Course Base Price = 70,000 PKR
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Certification by Test = 35% of discounted course price
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Basic Plan Certification */}
              <div className="relative rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-blue-50 to-white ring-2 ring-blue-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    Basic Plan
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Course Discount: 0%</p>
                    <p className="text-sm text-gray-600">
                      Discounted Price: 70,000 PKR
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      24,500 PKR
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Certification by Test
                  </p>
                </div>
              </div>

              {/* Silver Plan Certification */}
              <div className="relative rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-gray-50 to-white ring-2 ring-gray-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    Silver Plan
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Course Discount: 25%
                    </p>
                    <p className="text-sm text-gray-600">
                      Discounted Price: 52,500 PKR
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      18,375 PKR
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Certification by Test
                  </p>
                </div>
              </div>

              {/* Gold Plan Certification */}
              <div className="relative rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-amber-50 to-white ring-2 ring-amber-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">
                    Gold Plan
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Course Discount: 50%
                    </p>
                    <p className="text-sm text-gray-600">
                      Discounted Price: 35,000 PKR
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      12,250 PKR
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Certification by Test
                  </p>
                </div>
              </div>

              {/* Platinum Plan Certification */}
              <div className="relative rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-green-50 to-white ring-2 ring-green-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    Platinum Plan
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Course Discount: 60%
                    </p>
                    <p className="text-sm text-gray-600">
                      Discounted Price: 28,000 PKR
                    </p>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      9,800 PKR
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Certification by Test
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Ready to get certified?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Schedule your certification test today
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your career with professional training?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful professionals who've advanced their
            careers with our comprehensive learning programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Your Learning Journey
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Schedule Consultation
            </button>
          </div>

          <div className="flex items-center justify-center text-blue-100 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            Money-back guarantee • Expert instructors • Career support
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
