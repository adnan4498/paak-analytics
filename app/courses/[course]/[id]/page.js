"use client"
import React, { useState } from 'react';
import { Star, Clock, Users, Play, Check, ChevronDown, Heart, Share, Gift, Download, Infinity, Smartphone, Award, BookOpen } from 'lucide-react';
// import Navbar from '../../../../Navbar';
import Navbar from '@/app/Navbar';
import Link from 'next/link';

const CourseDetailPage = ({ params }) => {
  // Complete course data for all courses
  const courseData = {
    csharp: {
      courses: [
        {
          id: 1,
          title: "Complete C# Masterclass",
          instructor: "John Smith",
          rating: 4.7,
          reviews: 12540,
          students: 15420,
          price: 4500,
          originalPrice: 8000,
          duration: "42.5 hours",
          lectures: 350,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=500&fit=crop",
          videoPreview: "https://player.vimeo.com/video/577956165",
          bestseller: true,
          lastUpdated: "10/2023",
          language: "English",
          subtitleLanguages: ["English", "Spanish", "German"],
          description: "Learn C# programming from scratch to advanced concepts including OOP, LINQ, and .NET development. This comprehensive course will take you from complete beginner to confident C# developer.",
          whatYouLearn: [
            "Master C# fundamentals and advanced concepts",
            "Build object-oriented applications",
            "Work with LINQ and databases",
            "Develop desktop applications with WinForms",
            "Create web applications with ASP.NET",
            "Understand async/await programming",
            "Debug and troubleshoot C# applications"
          ],
          requirements: [
            "No prior programming experience needed",
            "A computer with Windows, Mac or Linux",
            "Visual Studio Community Edition (free)"
          ],
          courseContent: [
            {
              section: "Getting Started",
              lectures: 12,
              duration: "1.5 hours",
              items: [
                { title: "Introduction to C#", duration: "10:15", preview: true },
                { title: "Setting Up Development Environment", duration: "15:30", preview: false },
                { title: "Your First C# Program", duration: "12:45", preview: true }
              ]
            },
            {
              section: "C# Fundamentals",
              lectures: 45,
              duration: "6 hours",
              items: [
                { title: "Variables and Data Types", duration: "18:20", preview: false },
                { title: "Operators and Expressions", duration: "22:10", preview: false },
                { title: "Control Flow Statements", duration: "25:45", preview: false }
              ]
            },
            {
              section: "Object-Oriented Programming",
              lectures: 38,
              duration: "5.5 hours",
              items: [
                { title: "Classes and Objects", duration: "20:15", preview: false },
                { title: "Inheritance and Polymorphism", duration: "25:30", preview: true },
                { title: "Interfaces and Abstract Classes", duration: "22:45", preview: false }
              ]
            }
          ],
          instructorInfo: {
            name: "John Smith",
            bio: "Senior Software Engineer with 10+ years of experience in C# and .NET development. John has worked on enterprise applications for Fortune 500 companies and loves teaching programming.",
            rating: 4.8,
            reviews: 32560,
            students: 187200,
            courses: 12,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          },
          reviews: [
            {
              user: "Alex Johnson",
              rating: 5,
              date: "2 weeks ago",
              comment: "This course exceeded my expectations. The instructor explains complex concepts in a very understandable way.",
              helpful: 42
            },
            {
              user: "Maria Garcia",
              rating: 4.5,
              date: "1 month ago",
              comment: "Great content, but some sections could use more practical examples.",
              helpful: 18
            }
          ]
        },
        {
          id: 2,
          title: "C# Advanced Topics",
          instructor: "Sarah Johnson",
          rating: 4.8,
          reviews: 8920,
          students: 8920,
          price: 3800,
          originalPrice: 7200,
          duration: "28.3 hours",
          lectures: 245,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
          bestseller: false,
          lastUpdated: "09/2023",
          language: "English",
          description: "Deep dive into advanced C# concepts like async/await, reflection, and performance optimization.",
          whatYouLearn: [
            "Advanced C# language features",
            "Async/await programming patterns",
            "Reflection and metadata programming",
            "Performance optimization techniques",
            "Memory management and garbage collection",
            "Advanced LINQ queries and expressions"
          ],
          requirements: [
            "Basic knowledge of C# programming",
            "Understanding of object-oriented programming",
            "Visual Studio or VS Code installed"
          ],
          courseContent: [
            {
              section: "Advanced Language Features",
              lectures: 15,
              duration: "3.2 hours",
              items: [
                { title: "Advanced Generics", duration: "22:10", preview: true },
                { title: "Nullable Reference Types", duration: "18:45", preview: false },
                { title: "Pattern Matching", duration: "20:30", preview: false }
              ]
            }
          ],
          instructorInfo: {
            name: "Sarah Johnson",
            bio: "Software Architect with 8+ years of experience in .NET development. Sarah specializes in performance optimization and advanced C# patterns.",
            rating: 4.7,
            reviews: 15620,
            students: 89200,
            courses: 8,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
          },
          reviews: [
            {
              user: "Tom Wilson",
              rating: 4.8,
              date: "3 weeks ago",
              comment: "Excellent course for experienced developers looking to deepen their C# knowledge.",
              helpful: 25
            }
          ]
        },
        {
          id: 3,
          title: "C# Web Development with ASP.NET",
          instructor: "Mike Chen",
          rating: 4.6,
          reviews: 12350,
          students: 12350,
          price: 5000,
          originalPrice: 9000,
          duration: "35.7 hours",
          lectures: 298,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
          bestseller: true,
          lastUpdated: "11/2023",
          language: "English",
          description: "Build modern web applications using C# and ASP.NET Core with real-world projects.",
          whatYouLearn: [
            "ASP.NET Core fundamentals",
            "Building RESTful APIs",
            "Entity Framework Core",
            "Authentication and Authorization",
            "Deployment to cloud platforms",
            "Real-world project development"
          ],
          requirements: [
            "Basic C# knowledge",
            "Understanding of web development concepts",
            "Visual Studio or VS Code"
          ],
          courseContent: [
            {
              section: "ASP.NET Core Fundamentals",
              lectures: 20,
              duration: "4.5 hours",
              items: [
                { title: "Introduction to ASP.NET Core", duration: "25:15", preview: true },
                { title: "Middleware and Request Pipeline", duration: "30:20", preview: false },
                { title: "Dependency Injection", duration: "28:45", preview: true }
              ]
            }
          ],
          instructorInfo: {
            name: "Mike Chen",
            bio: "Full-stack developer with expertise in .NET and cloud technologies. Mike has built numerous enterprise web applications.",
            rating: 4.6,
            reviews: 18900,
            students: 112500,
            courses: 6,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          },
          reviews: [
            {
              user: "Lisa Brown",
              rating: 4.7,
              date: "1 month ago",
              comment: "Great practical course with real-world examples. Highly recommended!",
              helpful: 38
            }
          ]
        },
        {
          id: 4,
          title: "C# Game Development with Unity",
          instructor: "Alex Rodriguez",
          rating: 4.9,
          reviews: 18760,
          students: 18760,
          price: 6000,
          originalPrice: 9500,
          duration: "48.2 hours",
          lectures: 412,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop",
          bestseller: true,
          lastUpdated: "08/2023",
          language: "English",
          description: "Create amazing games using C# and Unity game engine. Perfect for beginners!",
          whatYouLearn: [
            "Unity game engine fundamentals",
            "C# scripting for games",
            "2D and 3D game development",
            "Physics and collision detection",
            "UI and game menus",
            "Publishing games to various platforms"
          ],
          requirements: [
            "No prior game development experience needed",
            "Basic programming knowledge helpful but not required",
            "Unity Hub and Unity Editor installed"
          ],
          courseContent: [
            {
              section: "Unity Basics",
              lectures: 25,
              duration: "5.8 hours",
              items: [
                { title: "Introduction to Unity Interface", duration: "32:15", preview: true },
                { title: "Game Objects and Components", duration: "28:40", preview: false },
                { title: "Your First Script", duration: "35:20", preview: true }
              ]
            }
          ],
          instructorInfo: {
            name: "Alex Rodriguez",
            bio: "Game developer with 10+ years of experience. Alex has worked on both indie and AAA titles and loves teaching game development.",
            rating: 4.9,
            reviews: 24500,
            students: 156800,
            courses: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
          },
          reviews: [
            {
              user: "James Wilson",
              rating: 5,
              date: "2 weeks ago",
              comment: "Absolutely fantastic course! I went from zero to publishing my first game.",
              helpful: 52
            }
          ]
        },
        // Add similar data for other courses (id: 5, 6, 7, 8)
        {
          id: 5,
          title: "C# Database Programming",
          instructor: "Lisa Wang",
          rating: 4.5,
          reviews: 6540,
          students: 6540,
          price: 3200,
          originalPrice: 6500,
          duration: "22.1 hours",
          lectures: 185,
          level: "Intermediate",
          image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop",
          bestseller: false,
          lastUpdated: "07/2023",
          language: "English",
          description: "Learn to work with databases using C#, Entity Framework, and SQL Server.",
          whatYouLearn: [
            "Database design principles",
            "Entity Framework Core",
            "SQL queries from C#",
            "Database migrations",
            "Performance optimization",
            "Transaction management"
          ],
          requirements: [
            "Basic C# knowledge",
            "Understanding of databases helpful",
            "SQL Server or SQLite installed"
          ],
          courseContent: [
            {
              section: "Database Fundamentals",
              lectures: 18,
              duration: "3.8 hours",
              items: [
                { title: "Introduction to Databases", duration: "25:10", preview: true },
                { title: "SQL Basics", duration: "32:45", preview: false },
                { title: "Connecting C# to Databases", duration: "28:20", preview: true }
              ]
            }
          ],
          instructorInfo: {
            name: "Lisa Wang",
            bio: "Database specialist with expertise in SQL Server and Entity Framework. Lisa has optimized databases for high-traffic applications.",
            rating: 4.6,
            reviews: 9800,
            students: 65400,
            courses: 4,
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face"
          },
          reviews: [
            {
              user: "Robert Taylor",
              rating: 4.5,
              date: "1 month ago",
              comment: "Solid course on database programming. Good explanations and examples.",
              helpful: 15
            }
          ]
        }
      ]
    },
    javascript: {
      courses: [
        {
          id: 1,
          title: "JavaScript Fundamentals",
          instructor: "Emily Davis",
          rating: 4.8,
          reviews: 23450,
          students: 23450,
          price: 4200,
          originalPrice: 7000,
          duration: "38.2 hours",
          lectures: 320,
          level: "Beginner",
          image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
          bestseller: true,
          lastUpdated: "10/2023",
          language: "English",
          description: "Start your JavaScript journey with this comprehensive beginner course.",
          whatYouLearn: [
            "JavaScript syntax and fundamentals",
            "DOM manipulation",
            "Event handling",
            "Basic algorithms",
            "ES6+ features",
            "Modern JavaScript patterns"
          ],
          requirements: [
            "No prior programming experience needed",
            "Web browser and text editor",
            "Basic computer skills"
          ],
          courseContent: [
            {
              section: "JavaScript Basics",
              lectures: 25,
              duration: "5.2 hours",
              items: [
                { title: "Variables and Data Types", duration: "28:15", preview: true },
                { title: "Functions and Scope", duration: "32:40", preview: false },
                { title: "Arrays and Objects", duration: "35:20", preview: true }
              ]
            }
          ],
          instructorInfo: {
            name: "Emily Davis",
            bio: "Frontend developer and JavaScript instructor with 7+ years of experience. Emily loves making complex concepts easy to understand.",
            rating: 4.8,
            reviews: 31200,
            students: 198500,
            courses: 9,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
          },
          reviews: [
            {
              user: "Sarah Johnson",
              rating: 4.9,
              date: "3 weeks ago",
              comment: "Perfect for beginners! Emily explains everything clearly and patiently.",
              helpful: 47
            }
          ]
        }
        // Add other JavaScript courses...
      ]
    }
    // Add other course categories...
  };

  // Find the specific course based on params
  const courseCategory = courseData[params.course];
  const course = courseCategory?.courses.find(c => c.id === parseInt(params.id));

  // If course not found, show error
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
            <Link href={`/course/${params.course}`} className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Back to Courses
            </Link>
          </div>
        </div>
      </>
    );
  }

  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState([0]);

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Course Header */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-2xl font-bold">{course.title}</h1>
            <p className="text-gray-300 mt-2">{course.description.substring(0, 120)}...</p>
            <div className="flex items-center mt-3 space-x-2">
              <span className="text-yellow-400 font-bold">{course.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                  />
                ))}
              </div>
              <a href="#reviews" className="text-blue-300 hover:underline">
                ({course.reviews.toLocaleString()} ratings)
              </a>
              <span>{course.students.toLocaleString()} students</span>
            </div>
            <div className="mt-2 text-sm">
              Created by <span className="text-blue-300">{course.instructor}</span>
            </div>
            <div className="flex items-center mt-3 text-sm space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Last updated {course.lastUpdated}</span>
              </div>
              <div className="flex items-center">
                <Play className="w-4 h-4 mr-1" />
                <span>{course.duration} total hours</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Video Preview */}
              <div className="bg-black rounded-lg overflow-hidden mb-6">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white font-medium">Preview this course</p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {['Overview', 'Curriculum', 'Instructor', 'Reviews'].map((tab) => (
                    <button
                      key={tab}
                      className={`py-4 px-1 font-medium text-sm border-b-2 ${
                        activeTab === tab.toLowerCase() 
                          ? 'border-blue-600 text-blue-600' 
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Course content</h2>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{course.courseContent.length} sections • {course.lectures} lectures • {course.duration} total length</span>
                      <button className="text-blue-600 font-medium">Expand all sections</button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      {course.courseContent.map((section, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-b-0">
                          <button 
                            className="w-full p-4 bg-gray-50 text-left font-medium flex justify-between items-center"
                            onClick={() => toggleSection(index)}
                          >
                            <div>
                              <span className="mr-2">{expandedSections.includes(index) ? '▼' : '►'}</span>
                              <span>{section.section}</span>
                            </div>
                            <span className="text-sm text-gray-500">{section.lectures} lectures • {section.duration}</span>
                          </button>
                          
                          {expandedSections.includes(index) && (
                            <div className="bg-white">
                              {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="p-4 border-t border-gray-100 flex justify-between items-center">
                                  <div className="flex items-center">
                                    <Play className="w-4 h-4 text-gray-500 mr-3" />
                                    <span>{item.title}</span>
                                    {item.preview && (
                                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Preview</span>
                                    )}
                                  </div>
                                  <span className="text-sm text-gray-500">{item.duration}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 mb-8 space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <div className="prose mb-8">
                    <p>{course.description}</p>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                  <div className="flex items-start mb-8">
                    <img 
                      src={course.instructorInfo.image} 
                      alt={course.instructorInfo.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{course.instructorInfo.name}</h3>
                      <p className="text-gray-600">{course.instructorInfo.bio}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <div className="flex items-center mr-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span>{course.instructorInfo.rating} Instructor Rating</span>
                        </div>
                        <div className="mr-4">
                          <span>{course.instructorInfo.reviews.toLocaleString()} Reviews</span>
                        </div>
                        <div className="mr-4">
                          <span>{course.instructorInfo.students.toLocaleString()} Students</span>
                        </div>
                        <div>
                          <span>{course.instructorInfo.courses} Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course content</h2>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{course.courseContent.length} sections • {course.lectures} lectures • {course.duration} total length</span>
                      <button className="text-blue-600 font-medium">Expand all sections</button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      {course.courseContent.map((section, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-b-0">
                          <button 
                            className="w-full p-4 bg-gray-50 text-left font-medium flex justify-between items-center"
                            onClick={() => toggleSection(index)}
                          >
                            <div>
                              <span className="mr-2">{expandedSections.includes(index) ? '▼' : '►'}</span>
                              <span>{section.section}</span>
                            </div>
                            <span className="text-sm text-gray-500">{section.lectures} lectures • {section.duration}</span>
                          </button>
                          
                          {expandedSections.includes(index) && (
                            <div className="bg-white">
                              {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="p-4 border-t border-gray-100 flex justify-between items-center">
                                  <div className="flex items-center">
                                    <Play className="w-4 h-4 text-gray-500 mr-3" />
                                    <span>{item.title}</span>
                                    {item.preview && (
                                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Preview</span>
                                    )}
                                  </div>
                                  <span className="text-sm text-gray-500">{item.duration}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'instructor' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                  <div className="flex items-start mb-6">
                    <img 
                      src={course.instructorInfo.image} 
                      alt={course.instructorInfo.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{course.instructorInfo.name}</h3>
                      <p className="text-gray-600">{course.instructorInfo.bio}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <div className="flex items-center mr-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span>{course.instructorInfo.rating} Instructor Rating</span>
                        </div>
                        <div className="mr-4">
                          <span>{course.instructorInfo.reviews.toLocaleString()} Reviews</span>
                        </div>
                        <div className="mr-4">
                          <span>{course.instructorInfo.students.toLocaleString()} Students</span>
                        </div>
                        <div>
                          <span>{course.instructorInfo.courses} Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div id="reviews">
                  <h2 className="text-2xl font-bold mb-4">Student reviews</h2>
                  <div className="flex items-center mb-6">
                    <div className="text-4xl font-bold mr-4">{course.rating}</div>
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-gray-600">Course Rating • {course.reviews.toLocaleString()} ratings</div>
                    </div>
                  </div>

                  {course.reviews.map((review, index) => (
                    <div key={index} className="border-t border-gray-200 pt-6 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">{review.user}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="mb-2">{review.comment}</p>
                      <div className="text-sm text-gray-500">
                        {review.helpful} people found this helpful
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  {/* Course Image */}
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Pricing */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold">${course.price}</span>
                      {course.originalPrice > course.price && (
                        <span className="text-gray-500 line-through ml-2">${course.originalPrice}</span>
                      )}
                      {course.originalPrice > course.price && (
                        <span className="bg-red-100 text-red-800 text-sm font-medium ml-3 px-2 py-1 rounded">
                          {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                        Add to cart
                      </button>
                      <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-4 rounded">
                        Buy now
                      </button>
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-4">30-Day Money-Back Guarantee</p>

                    <div className="mt-6">
                      <h3 className="font-bold mb-3">This course includes:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Play className="w-4 h-4 mr-2 text-gray-600" />
                          <span>{course.duration} on-demand video</span>
                        </li>
                        <li className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-gray-600" />
                          <span>{course.lectures} lectures</span>
                        </li>
                        <li className="flex items-center">
                          <Download className="w-4 h-4 mr-2 text-gray-600" />
                          <span>37 downloadable resources</span>
                        </li>
                        <li className="flex items-center">
                          <Infinity className="w-4 h-4 mr-2 text-gray-600" />
                          <span>Full lifetime access</span>
                        </li>
                        <li className="flex items-center">
                          <Smartphone className="w-4 h-4 mr-2 text-gray-600" />
                          <span>Access on mobile and TV</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-gray-600" />
                          <span>Certificate of completion</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <a href="#" className="text-blue-600 font-medium text-sm flex items-center">
                        Share <Share className="w-4 h-4 ml-1" />
                      </a>
                      <a href="#" className="text-blue-600 font-medium text-sm flex items-center mt-2">
                        Gift this course <Gift className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-4 p-4">
                  <h3 className="font-bold mb-3">Training 5 or more people?</h3>
                  <p className="text-sm text-gray-600 mb-3">Get your team access to 22,000+ top Udemy courses anytime, anywhere.</p>
                  <button className="text-blue-600 font-medium text-sm">
                    Try Udemy Business
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;