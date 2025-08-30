"use client"
import React, { useState } from 'react';
import { Star, Clock, Users, Play, BookOpen, Filter, Search, ChevronDown } from 'lucide-react';
import { Slider } from 'antd';
import Navbar from '../../Navbar';
import 'antd/dist/reset.css';
import Link from 'next/link';

const CoursePage = ({ params }) => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const courseData = {
    csharp: {
      title: "C# Programming Courses",
      description: "Master C# development with our comprehensive courses",
      courses: [
        {
          id: 1,
          title: "Complete C# Masterclass",
          instructor: "John Smith",
          rating: 4.7,
          students: 15420,
          price: 4500,
          originalPrice: 8000,
          duration: "42.5 hours",
          lectures: 350,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Learn C# programming from scratch to advanced concepts including OOP, LINQ, and .NET development.",
          keywords: ["#csharp", "#dotnet", "#oop", "#programming", "#backend"]
        },
        {
          id: 2,
          title: "C# Advanced Topics",
          instructor: "Sarah Johnson",
          rating: 4.8,
          students: 8920,
          price: 3800,
          originalPrice: 7200,
          duration: "28.3 hours",
          lectures: 245,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
          bestseller: false,
          description: "Deep dive into advanced C# concepts like async/await, reflection, and performance optimization.",
          keywords: ["#csharp", "#advanced", "#performance", "#async", "#reflection"]
        },
        {
          id: 3,
          title: "C# Web Development with ASP.NET",
          instructor: "Mike Chen",
          rating: 4.6,
          students: 12350,
          price: 5000,
          originalPrice: 9000,
          duration: "35.7 hours",
          lectures: 298,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Build modern web applications using C# and ASP.NET Core with real-world projects.",
          keywords: ["#csharp", "#web-development", "#aspnet", "#backend", "#fullstack"]
        },
        {
          id: 4,
          title: "C# Game Development with Unity",
          instructor: "Alex Rodriguez",
          rating: 4.9,
          students: 18760,
          price: 6000,
          originalPrice: 9500,
          duration: "48.2 hours",
          lectures: 412,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Create amazing games using C# and Unity game engine. Perfect for beginners!",
          keywords: ["#csharp", "#game-development", "#unity", "#gamedev", "#beginner-friendly"]
        },
        {
          id: 5,
          title: "C# Database Programming",
          instructor: "Lisa Wang",
          rating: 4.5,
          students: 6540,
          price: 3200,
          originalPrice: 6500,
          duration: "22.1 hours",
          lectures: 185,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
          bestseller: false,
          description: "Learn to work with databases using C#, Entity Framework, and SQL Server.",
          keywords: ["#csharp", "#database", "#entity-framework", "#sql", "#backend"]
        },
        {
          id: 6,
          title: "C# Design Patterns",
          instructor: "David Kim",
          rating: 4.7,
          students: 7890,
          price: 4000,
          originalPrice: 7500,
          duration: "31.8 hours",
          lectures: 267,
          level: "Advanced",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
          bestseller: false,
          description: "Master software design patterns and SOLID principles in C# development.",
          keywords: ["#csharp", "#design-patterns", "#solid", "#architecture", "#best-practices"]
        },
        {
          id: 7,
          title: "C# Enterprise Application Development",
          instructor: "Robert Taylor",
          rating: 4.8,
          students: 5430,
          price: 8500,
          originalPrice: 10000,
          duration: "62.5 hours",
          lectures: 520,
          level: "Advanced",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Build enterprise-level applications with C# and advanced architectural patterns.",
          keywords: ["#csharp", "#enterprise", "#architecture", "#scalability", "#backend"]
        },
        {
          id: 8,
          title: "C# Microservices Masterclass",
          instructor: "Jennifer Lee",
          rating: 4.9,
          students: 4320,
          price: 9000,
          originalPrice: 10000,
          duration: "75.3 hours",
          lectures: 610,
          level: "Advanced",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Learn to build scalable microservices architectures using C# and .NET.",
          keywords: ["#csharp", "#microservices", "#docker", "#kubernetes", "#cloud"]
        }
      ]
    },
    javascript: {
      title: "JavaScript Programming Courses",
      description: "Learn modern JavaScript development from basics to advanced",
      courses: [
        {
          id: 1,
          title: "JavaScript Fundamentals",
          instructor: "Emily Davis",
          rating: 4.8,
          students: 23450,
          price: 4200,
          originalPrice: 7000,
          duration: "38.2 hours",
          lectures: 320,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Start your JavaScript journey with this comprehensive beginner course.",
          keywords: ["#javascript", "#web-development", "#frontend", "#beginner-friendly", "#programming"]
        },
        {
          id: 2,
          title: "Modern JavaScript ES6+",
          instructor: "Tom Wilson",
          rating: 4.7,
          students: 15680,
          price: 3500,
          originalPrice: 6800,
          duration: "29.5 hours",
          lectures: 245,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Master modern JavaScript features including ES6, async/await, and modules.",
          keywords: ["#javascript", "#es6", "#modern-js", "#frontend", "#web-development"]
        },
        {
          id: 3,
          title: "JavaScript React Masterclass",
          instructor: "Rachel Green",
          rating: 4.9,
          students: 19870,
          price: 5000,
          originalPrice: 8800,
          duration: "45.3 hours",
          lectures: 378,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Build modern web applications with React and JavaScript.",
          keywords: ["#javascript", "#react", "#frontend", "#web-development", "#ui"]
        }
      ]
    },
    python: {
      title: "Python Programming Courses",
      description: "Master Python for data science, automation, and web development",
      courses: [
        {
          id: 1,
          title: "Python for Beginners",
          instructor: "Dr. Sarah Miller",
          rating: 4.8,
          students: 45670,
          price: 3500,
          originalPrice: 7000,
          duration: "35.8 hours",
          lectures: 298,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Learn Python programming from scratch with hands-on projects.",
          keywords: ["#python", "#beginner-friendly", "#programming", "#automation", "#scripting"]
        },
        {
          id: 2,
          title: "Python Data Science",
          instructor: "Prof. James Chen",
          rating: 4.9,
          students: 28940,
          price: 4800,
          originalPrice: 8500,
          duration: "42.1 hours",
          lectures: 356,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Master data analysis, visualization, and machine learning with Python.",
          keywords: ["#python", "#data-science", "#machine-learning", "#ai", "#data-analysis"]
        }
      ]
    },
    react: {
      title: "React.js Development Courses",
      description: "Build modern user interfaces with React.js",
      courses: [
        {
          id: 1,
          title: "React.js Complete Guide",
          instructor: "Alex Thompson",
          rating: 4.8,
          students: 32450,
          price: 4600,
          originalPrice: 8800,
          duration: "48.7 hours",
          lectures: 412,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Learn React.js from fundamentals to advanced concepts with real projects.",
          keywords: ["#react", "#javascript", "#frontend", "#web-development", "#ui"]
        }
      ]
    },
    nodejs: {
      title: "Node.js Backend Development",
      description: "Master server-side JavaScript with Node.js",
      courses: [
        {
          id: 1,
          title: "Node.js Backend Masterclass",
          instructor: "Chris Anderson",
          rating: 4.7,
          students: 18760,
          price: 4000,
          originalPrice: 7800,
          duration: "39.2 hours",
          lectures: 334,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
          bestseller: true,
          description: "Build scalable backend applications with Node.js, Express, and MongoDB.",
          keywords: ["#nodejs", "#javascript", "#backend", "#api", "#web-development"]
        }
      ]
    }
  };

  const currentCourse = courseData[params.course] || courseData.csharp;
  const [filteredCourses, setFilteredCourses] = useState(currentCourse.courses);

  const applyFilters = () => {
    let filtered = currentCourse.courses;

    if (selectedRating !== 'all') {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter(course => course.rating >= minRating);
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    // Apply price range filter
    filtered = filtered.filter(course => 
      course.price >= priceRange[0] && course.price <= priceRange[1]
    );

    setFilteredCourses(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedLevel, priceRange]);

  React.useEffect(() => {
    setFilteredCourses(currentCourse.courses);
    // Reset price range when course changes
    setPriceRange([0, 10000]);
  }, [params.course]);

  const formatPrice = (value) => {
    return `$${value}`;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentCourse.title}</h1>
            <p className="text-gray-600 text-lg">{currentCourse.description}</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <span>{filteredCourses.length} courses</span>
              <span>•</span>
              <span>Updated recently</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>
                
                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
                  <select 
                    value={selectedRating} 
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="all">All Ratings</option>
                    <option value="4.5">4.5 & up</option>
                    <option value="4.0">4.0 & up</option>
                    <option value="3.5">3.5 & up</option>
                  </select>
                </div>

                {/* Level Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Level</h4>
                  <select 
                    value={selectedLevel} 
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="all">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                {/* Price Filter with Ant Design Slider */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <Slider
                    range
                    min={0}
                    max={10000}
                    step={1000}
                    value={priceRange}
                    onChange={setPriceRange}
                    tooltip={{
                      formatter: formatPrice
                    }}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                {filteredCourses.map((course) => (
                  <Link 
                    key={course.id} 
                    href={`/courses/${params.course}/${course.id}`}
                    className="block"
                  >
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      {/* Course Image */}
                      <div className="relative">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-48 object-cover"
                        />
                        {course.bestseller && (
                          <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                            Bestseller
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-white rounded-full p-3">
                            <Play className="w-6 h-6 text-gray-900" />
                          </div>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                          {course.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {course.description}
                        </p>

                        <div className="text-sm text-gray-500 mb-3">
                          <span className="font-medium text-gray-900">{course.instructor}</span>
                        </div>

                        {/* Rating and Students */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            <span className="text-yellow-400 font-semibold">{course.rating}</span>
                            <Star className="w-4 h-4 text-yellow-400 ml-1 fill-current" />
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">({course.students.toLocaleString()})</span>
                        </div>

                        {/* Course Stats */}
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {course.lectures} lectures
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.level}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                            {course.originalPrice > course.price && (
                              <span className="text-gray-500 line-through">${course.originalPrice}</span>
                            )}
                          </div>
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                            onClick={(e) => e.preventDefault()}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No courses match your current filters.</p>
                  <button 
                    onClick={() => {
                      setSelectedRating('all');
                      setSelectedLevel('all');
                      setPriceRange([0, 10000]);
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;