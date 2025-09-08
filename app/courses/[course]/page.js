// "use client"
// import React, { useState } from 'react';
// import { Star, Clock, Users, Play, BookOpen, Filter, Search, ChevronDown } from 'lucide-react';
// import { Slider } from 'antd';
// import Navbar from '../../Navbar';
// import 'antd/dist/reset.css';
// import Link from 'next/link';

// const CoursePage = ({ params }) => {
//   const [selectedRating, setSelectedRating] = useState('all');
//   const [selectedLevel, setSelectedLevel] = useState('all');
//   const [priceRange, setPriceRange] = useState([0, 10000]);

//   const courseData = {
//     csharp: {
//       title: "C# Programming Courses",
//       description: "Master C# development with our comprehensive courses",
//       courses: [
//         {
//           id: 1,
//           title: "Complete C# Masterclass",
//           instructor: "John Smith",
//           rating: 4.7,
//           students: 15420,
//           price: 4500,
//           originalPrice: 8000,
//           duration: "42.5 hours",
//           lectures: 350,
//           level: "Beginner",
//           image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Learn C# programming from scratch to advanced concepts including OOP, LINQ, and .NET development.",
//           keywords: ["#csharp", "#dotnet", "#oop", "#programming", "#backend"]
//         },
//         {
//           id: 2,
//           title: "C# Advanced Topics",
//           instructor: "Sarah Johnson",
//           rating: 4.8,
//           students: 8920,
//           price: 3800,
//           originalPrice: 7200,
//           duration: "28.3 hours",
//           lectures: 245,
//           level: "Intermediate",
//           image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
//           bestseller: false,
//           description: "Deep dive into advanced C# concepts like async/await, reflection, and performance optimization.",
//           keywords: ["#csharp", "#advanced", "#performance", "#async", "#reflection"]
//         },
//         {
//           id: 3,
//           title: "C# Web Development with ASP.NET",
//           instructor: "Mike Chen",
//           rating: 4.6,
//           students: 12350,
//           price: 5000,
//           originalPrice: 9000,
//           duration: "35.7 hours",
//           lectures: 298,
//           level: "Intermediate",
//           image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Build modern web applications using C# and ASP.NET Core with real-world projects.",
//           keywords: ["#csharp", "#web-development", "#aspnet", "#backend", "#fullstack"]
//         },
//         {
//           id: 4,
//           title: "C# Game Development with Unity",
//           instructor: "Alex Rodriguez",
//           rating: 4.9,
//           students: 18760,
//           price: 6000,
//           originalPrice: 9500,
//           duration: "48.2 hours",
//           lectures: 412,
//           level: "Beginner",
//           image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Create amazing games using C# and Unity game engine. Perfect for beginners!",
//           keywords: ["#csharp", "#game-development", "#unity", "#gamedev", "#beginner-friendly"]
//         },
//         {
//           id: 5,
//           title: "C# Database Programming",
//           instructor: "Lisa Wang",
//           rating: 4.5,
//           students: 6540,
//           price: 3200,
//           originalPrice: 6500,
//           duration: "22.1 hours",
//           lectures: 185,
//           level: "Intermediate",
//           image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
//           bestseller: false,
//           description: "Learn to work with databases using C#, Entity Framework, and SQL Server.",
//           keywords: ["#csharp", "#database", "#entity-framework", "#sql", "#backend"]
//         },
//         {
//           id: 6,
//           title: "C# Design Patterns",
//           instructor: "David Kim",
//           rating: 4.7,
//           students: 7890,
//           price: 4000,
//           originalPrice: 7500,
//           duration: "31.8 hours",
//           lectures: 267,
//           level: "Advanced",
//           image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
//           bestseller: false,
//           description: "Master software design patterns and SOLID principles in C# development.",
//           keywords: ["#csharp", "#design-patterns", "#solid", "#architecture", "#best-practices"]
//         },
//         {
//           id: 7,
//           title: "C# Enterprise Application Development",
//           instructor: "Robert Taylor",
//           rating: 4.8,
//           students: 5430,
//           price: 8500,
//           originalPrice: 10000,
//           duration: "62.5 hours",
//           lectures: 520,
//           level: "Advanced",
//           image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Build enterprise-level applications with C# and advanced architectural patterns.",
//           keywords: ["#csharp", "#enterprise", "#architecture", "#scalability", "#backend"]
//         },
//         {
//           id: 8,
//           title: "C# Microservices Masterclass",
//           instructor: "Jennifer Lee",
//           rating: 4.9,
//           students: 4320,
//           price: 9000,
//           originalPrice: 10000,
//           duration: "75.3 hours",
//           lectures: 610,
//           level: "Advanced",
//           image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Learn to build scalable microservices architectures using C# and .NET.",
//           keywords: ["#csharp", "#microservices", "#docker", "#kubernetes", "#cloud"]
//         }
//       ]
//     },
//     javascript: {
//       title: "JavaScript Programming Courses",
//       description: "Learn modern JavaScript development from basics to advanced",
//       courses: [
//         {
//           id: 1,
//           title: "JavaScript Fundamentals",
//           instructor: "Emily Davis",
//           rating: 4.8,
//           students: 23450,
//           price: 4200,
//           originalPrice: 7000,
//           duration: "38.2 hours",
//           lectures: 320,
//           level: "Beginner",
//           image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Start your JavaScript journey with this comprehensive beginner course.",
//           keywords: ["#javascript", "#web-development", "#frontend", "#beginner-friendly", "#programming"]
//         },
//         {
//           id: 2,
//           title: "Modern JavaScript ES6+",
//           instructor: "Tom Wilson",
//           rating: 4.7,
//           students: 15680,
//           price: 3500,
//           originalPrice: 6800,
//           duration: "29.5 hours",
//           lectures: 245,
//           level: "Intermediate",
//           image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Master modern JavaScript features including ES6, async/await, and modules.",
//           keywords: ["#javascript", "#es6", "#modern-js", "#frontend", "#web-development"]
//         },
//         {
//           id: 3,
//           title: "JavaScript React Masterclass",
//           instructor: "Rachel Green",
//           rating: 4.9,
//           students: 19870,
//           price: 5000,
//           originalPrice: 8800,
//           duration: "45.3 hours",
//           lectures: 378,
//           level: "Intermediate",
//           image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Build modern web applications with React and JavaScript.",
//           keywords: ["#javascript", "#react", "#frontend", "#web-development", "#ui"]
//         }
//       ]
//     },
//     python: {
//       title: "Python Programming Courses",
//       description: "Master Python for data science, automation, and web development",
//       courses: [
//         {
//           id: 1,
//           title: "Python for Beginners",
//           instructor: "Dr. Sarah Miller",
//           rating: 4.8,
//           students: 45670,
//           price: 3500,
//           originalPrice: 7000,
//           duration: "35.8 hours",
//           lectures: 298,
//           level: "Beginner",
//           image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Learn Python programming from scratch with hands-on projects.",
//           keywords: ["#python", "#beginner-friendly", "#programming", "#automation", "#scripting"]
//         },
//         {
//           id: 2,
//           title: "Python Data Science",
//           instructor: "Prof. James Chen",
//           rating: 4.9,
//           students: 28940,
//           price: 4800,
//           originalPrice: 8500,
//           duration: "42.1 hours",
//           lectures: 356,
//           level: "Intermediate",
//           image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Master data analysis, visualization, and machine learning with Python.",
//           keywords: ["#python", "#data-science", "#machine-learning", "#ai", "#data-analysis"]
//         }
//       ]
//     },
//     react: {
//       title: "React.js Development Courses",
//       description: "Build modern user interfaces with React.js",
//       courses: [
//         {
//           id: 1,
//           title: "React.js Complete Guide",
//           instructor: "Alex Thompson",
//           rating: 4.8,
//           students: 32450,
//           price: 4600,
//           originalPrice: 8800,
//           duration: "48.7 hours",
//           lectures: 412,
//           level: "Beginner",
//           image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Learn React.js from fundamentals to advanced concepts with real projects.",
//           keywords: ["#react", "#javascript", "#frontend", "#web-development", "#ui"]
//         }
//       ]
//     },
//     nodejs: {
//       title: "Node.js Backend Development",
//       description: "Master server-side JavaScript with Node.js",
//       courses: [
//         {
//           id: 1,
//           title: "Node.js Backend Masterclass",
//           instructor: "Chris Anderson",
//           rating: 4.7,
//           students: 18760,
//           price: 4000,
//           originalPrice: 7800,
//           duration: "39.2 hours",
//           lectures: 334,
//           level: "Intermediate",
//           image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
//           bestseller: true,
//           description: "Build scalable backend applications with Node.js, Express, and MongoDB.",
//           keywords: ["#nodejs", "#javascript", "#backend", "#api", "#web-development"]
//         }
//       ]
//     }
//   };

//   const currentCourse = courseData[params.course] || courseData.csharp;
//   const [filteredCourses, setFilteredCourses] = useState(currentCourse.courses);

//   const applyFilters = () => {
//     let filtered = currentCourse.courses;

//     if (selectedRating !== 'all') {
//       const minRating = parseFloat(selectedRating);
//       filtered = filtered.filter(course => course.rating >= minRating);
//     }

//     if (selectedLevel !== 'all') {
//       filtered = filtered.filter(course => course.level === selectedLevel);
//     }

//     // Apply price range filter
//     filtered = filtered.filter(course =>
//       course.price >= priceRange[0] && course.price <= priceRange[1]
//     );

//     setFilteredCourses(filtered);
//   };

//   React.useEffect(() => {
//     applyFilters();
//   }, [selectedRating, selectedLevel, priceRange]);

//   React.useEffect(() => {
//     setFilteredCourses(currentCourse.courses);
//     // Reset price range when course changes
//     setPriceRange([0, 10000]);
//   }, [params.course]);

//   const formatPrice = (value) => {
//     return `$${value}`;
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 pt-20">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentCourse.title}</h1>
//             <p className="text-gray-600 text-lg">{currentCourse.description}</p>
//             <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
//               <span>{filteredCourses.length} courses</span>
//               <span>•</span>
//               <span>Updated recently</span>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Filters Sidebar */}
//             <div className="lg:w-64 space-y-6">
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Filter className="w-5 h-5 mr-2" />
//                   Filters
//                 </h3>

//                 {/* Rating Filter */}
//                 <div className="mb-6">
//                   <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
//                   <select
//                     value={selectedRating}
//                     onChange={(e) => setSelectedRating(e.target.value)}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                   >
//                     <option value="all">All Ratings</option>
//                     <option value="4.5">4.5 & up</option>
//                     <option value="4.0">4.0 & up</option>
//                     <option value="3.5">3.5 & up</option>
//                   </select>
//                 </div>

//                 {/* Level Filter */}
//                 <div className="mb-6">
//                   <h4 className="font-medium text-gray-900 mb-3">Level</h4>
//                   <select
//                     value={selectedLevel}
//                     onChange={(e) => setSelectedLevel(e.target.value)}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                   >
//                     <option value="all">All Levels</option>
//                     <option value="Beginner">Beginner</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Advanced">Advanced</option>
//                   </select>
//                 </div>

//                 {/* Price Filter with Ant Design Slider */}
//                 <div className="mb-6">
//                   <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
//                   <Slider
//                     range
//                     min={0}
//                     max={10000}
//                     step={1000}
//                     value={priceRange}
//                     onChange={setPriceRange}
//                     tooltip={{
//                       formatter: formatPrice
//                     }}
//                   />
//                   <div className="flex justify-between mt-2 text-sm text-gray-500">
//                     <span>${priceRange[0]}</span>
//                     <span>${priceRange[1]}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Course Grid */}
//             <div className="flex-1">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
//                 {filteredCourses.map((course) => (
//                   <Link
//                     key={course.id}
//                     href={`/courses/${params.course}/${course.id}`}
//                     className="block"
//                   >
//                     <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
//                       {/* Course Image */}
//                       <div className="relative">
//                         <img
//                           src={course.image}
//                           alt={course.title}
//                           className="w-full h-48 object-cover"
//                         />
//                         {course.bestseller && (
//                           <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
//                             Bestseller
//                           </div>
//                         )}
//                         <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
//                           <div className="bg-white rounded-full p-3">
//                             <Play className="w-6 h-6 text-gray-900" />
//                           </div>
//                         </div>
//                       </div>

//                       {/* Course Content */}
//                       <div className="p-4">
//                         <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
//                           {course.title}
//                         </h3>

//                         <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//                           {course.description}
//                         </p>

//                         <div className="text-sm text-gray-500 mb-3">
//                           <span className="font-medium text-gray-900">{course.instructor}</span>
//                         </div>

//                         {/* Rating and Students */}
//                         <div className="flex items-center space-x-2 mb-3">
//                           <div className="flex items-center">
//                             <span className="text-yellow-400 font-semibold">{course.rating}</span>
//                             <Star className="w-4 h-4 text-yellow-400 ml-1 fill-current" />
//                           </div>
//                           <span className="text-gray-400">•</span>
//                           <span className="text-gray-500">({course.students.toLocaleString()})</span>
//                         </div>

//                         {/* Course Stats */}
//                         <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
//                           <div className="flex items-center">
//                             <Clock className="w-4 h-4 mr-1" />
//                             {course.duration}
//                           </div>
//                           <div className="flex items-center">
//                             <BookOpen className="w-4 h-4 mr-1" />
//                             {course.lectures} lectures
//                           </div>
//                           <div className="flex items-center">
//                             <Users className="w-4 h-4 mr-1" />
//                             {course.level}
//                           </div>
//                         </div>

//                         {/* Price */}
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-2">
//                             <span className="text-2xl font-bold text-gray-900">${course.price}</span>
//                             {course.originalPrice > course.price && (
//                               <span className="text-gray-500 line-through">${course.originalPrice}</span>
//                             )}
//                           </div>
//                           <button
//                             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Add to Cart
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               {filteredCourses.length === 0 && (
//                 <div className="text-center py-12">
//                   <p className="text-gray-500 text-lg">No courses match your current filters.</p>
//                   <button
//                     onClick={() => {
//                       setSelectedRating('all');
//                       setSelectedLevel('all');
//                       setPriceRange([0, 10000]);
//                     }}
//                     className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
//                   >
//                     Clear all filters
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CoursePage;

"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  Clock,
  Users,
  Play,
  BookOpen,
  Filter,
  Search,
  ChevronDown,
} from "lucide-react";
import { Slider } from "antd";
import Navbar from "../../Navbar";
import "antd/dist/reset.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CoursePage = ({ params }) => {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "all"
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchQuery, setSearchQuery] = useState("");

  // Extract data from the Excel file structure
  const extractCourseData = () => {
    // This would normally come from parsing the Excel file
    // For this example, we'll use the data structure provided
    // const excelData = [
    //   {
    //     id: 1, CourseID: 'AI101', Title: 'Complete AI & ML Masterclass',
    //     Catetory: 'Artificial Intelligence',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 420,
    //     PricePKR: 6500, Duration: 50, Session: 20, level: 'All Levels',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn AI from scratch to advanced concepts including ensemble methods, random forest, gradient boosting, and XGBoost.',
    //     keywords: 'ai, ml, ensemble, randomforest, xgboost'
    //   },
    //   {
    //     id: 2, CourseID: 'AI102', Title: 'Deep Learning & Neural Networks',
    //     Catetory: 'Artificial Intelligence', SubCategory: 'Neural Networks',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 380,
    //     PricePKR: 6000, Duration: 40, Session: 18, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Master neural networks and deep learning with hands-on projects in TensorFlow and PyTorch.',
    //     keywords: 'ai, deeplearning, tensorflow, pytorch, neuralnetworks'
    //   },
    //   {
    //     id: 3, CourseID: 'AI103', Title: 'AI Frameworks & Model Development',
    //     Catetory: 'Artificial Intelligence', SubCategory: 'ML Frameworks',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.6, Students: 290,
    //     PricePKR: 5500, Duration: 35, Session: 15, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop',
    //     Description: 'Explore AI frameworks such as Scikit-Learn, Keras, and PyTorch for building and evaluating models.',
    //     keywords: 'ai, ml, scikitlearn, keras, pytorch'
    //   },
    //   {
    //     id: 4, CourseID: 'AI104', Title: 'AI Applications & Ethics',
    //     Catetory: 'Artificial Intelligence', SubCategory: 'AI Applications & Ethics',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 310,
    //     PricePKR: 6000, Duration: 30, Session: 12, level: 'Advanced',
    //     image: 'https://images.unsplash.com/photo-1581093588401-7ff5d857fc5d?w=400&h=300&fit=crop',
    //     Description: 'Learn practical AI applications, ethics, and case studies including NLP, computer vision, predictive analytics, and recommender systems.',
    //     keywords: 'ai, nlp, computervision, ethics, predictiveanalytics'
    //   },
    //   {
    //     id: 5, CourseID: 'AI105', Title: 'Natural Language Processing with Python',
    //     Catetory: 'Artificial Intelligence', SubCategory: 'NLP',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 350,
    //     PricePKR: 5800, Duration: 28, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Hands-on NLP projects using Python for text analysis, sentiment analysis, and chatbots.',
    //     keywords: 'ai, nlp, python, textanalytics, chatbots'
    //   },
    //   {
    //     id: 6, CourseID: 'AI106', Title: 'Computer Vision Projects',
    //     Catetory: 'Artificial Intelligence', SubCategory: 'Computer Vision',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 300,
    //     PricePKR: 6000, Duration: 32, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Build computer vision projects using OpenCV and deep learning techniques for image and video analysis.',
    //     keywords: 'ai, computervision, opencv, deeplearning, imageprocessing'
    //   },
    //   {
    //     id: 7, CourseID: 'AZ101', Title: 'Complete Azure Fundamentals',
    //     Catetory: 'Cloud Azure', SubCategory: 'Azure',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 400,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn Microsoft Azure from scratch, covering core cloud services, deployment models, and management.',
    //     keywords: 'azure, cloud, azurefundamentals, microsoft, cloudcomputing'
    //   },
    //   {
    //     id: 8, CourseID: 'AZ102', Title: 'Azure Administration & Management',
    //     Catetory: 'Cloud Azure', SubCategory: 'Azure',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 320,
    //     PricePKR: 6000, Duration: 35, Session: 15, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop',
    //     Description: 'Master Azure administration, virtual machines, networking, storage, and monitoring with practical labs.',
    //     keywords: 'azure, admin, virtualmachines, networking, cloudmanagement'
    //   },
    //   {
    //     id: 9, CourseID: 'AZ103', Title: 'Azure DevOps & Automation',
    //     Catetory: 'Cloud Azure', SubCategory: 'Azure',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 280,
    //     PricePKR: 5800, Duration: 32, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Learn Azure DevOps, pipelines, CI/CD, and automation using Azure services and PowerShell.',
    //     keywords: 'azure, devops, automation, cicd, powershell'
    //   },
    //   {
    //     id: 10, CourseID: 'AZ104', Title: 'Azure Data & AI Services',
    //     Catetory: 'Cloud Azure', SubCategory: 'Azure',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 250,
    //     PricePKR: 6200, Duration: 40, Session: 18, level: 'Advanced',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Explore Azure data services, AI integrations, Machine Learning Studio, and Synapse Analytics.',
    //     keywords: 'azure, ai, ml, dataservices, synapse'
    //   },
    //   {
    //     id: 11, CourseID: 'AZ105', Title: 'Azure Security & Governance',
    //     Catetory: 'Cloud Azure', SubCategory: 'Azure',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 300,
    //     PricePKR: 5900, Duration: 30, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Learn Azure security best practices, identity management, compliance, and governance for enterprises.',
    //     keywords: 'azure, security, governance, cloudsecurity, identitymanagement'
    //   },
    //   {
    //     id: 12, CourseID: 'DATA101', Title: 'SQL Server Mastery',
    //     Catetory: 'Data', SubCategory: 'SQL Server',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 480,
    //     PricePKR: 4500, Duration: 30, Session: 15, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop',
    //     Description: 'Learn SQL Server from scratch, including queries, joins, indexing, and database design concepts.',
    //     keywords: 'sqlserver, database, queries, datadesign'
    //   },
    //   {
    //     id: 13, CourseID: 'DATA102', Title: 'MySQL for Data Professionals',
    //     Catetory: 'Data', SubCategory: 'MySQL',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 350,
    //     PricePKR: 4200, Duration: 28, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Hands-on MySQL course covering database creation, queries, stored procedures, and optimization.',
    //     keywords: 'mysql, database, queries, optimization'
    //   },
    //   {
    //     id: 14, CourseID: 'DATA103', Title: 'PostgreSQL Advanced Concepts',
    //     Catetory: 'Data', SubCategory: 'PostgreSQL',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 300,
    //     PricePKR: 5000, Duration: 32, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Learn PostgreSQL advanced features including triggers, functions, indexing, and performance tuning.',
    //     keywords: 'postgresql, database, performance, sql'
    //   },
    //   {
    //     id: 15, CourseID: 'DATA104', Title: 'Oracle Database Administration',
    //     Catetory: 'Data', SubCategory: 'Oracle',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.6, Students: 280,
    //     PricePKR: 5500, Duration: 35, Session: 15, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Comprehensive Oracle administration course covering installation, configuration, backup, and recovery.',
    //     keywords: 'oracle, dbadmin, backup, recovery'
    //   },
    //   {
    //     id: 16, CourseID: 'DATA105', Title: 'SAP HANA for Data Management',
    //     Catetory: 'Data', SubCategory: 'SAP HANA',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 260,
    //     PricePKR: 6000, Duration: 30, Session: 12, level: 'Advanced',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn SAP HANA architecture, modeling, data provisioning, and performance optimization.',
    //     keywords: 'saphana, datamodeling, performance, data'
    //   },
    //   {
    //     id: 17, CourseID: 'DATA106', Title: 'Mastering Data Management (MDM)',
    //     Catetory: 'Data', SubCategory: 'MDM',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 240,
    //     PricePKR: 5000, Duration: 28, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop',
    //     Description: 'Learn Master Data Management concepts, governance, and implementation best practices.',
    //     keywords: 'mdm, datagovernance, dataquality'
    //   },
    //   {
    //     id: 18, CourseID: 'DATA107', Title: 'Excel for Data Management',
    //     Catetory: 'Data', SubCategory: 'Excel',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 400,
    //     PricePKR: 3500, Duration: 20, Session: 8, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
    //     Description: 'Learn Excel for managing, analyzing, and visualizing data efficiently with formulas, pivot tables, and Power Query.',
    //     keywords: 'excel, datamanagement, pivot, powerquery'
    //   },
    //   {
    //     id: 19, CourseID: 'DATA108', Title: 'MongoDB for Developers',
    //     Catetory: 'Data', SubCategory: 'MongoDB',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 220,
    //     PricePKR: 4800, Duration: 25, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Hands-on course on MongoDB, including schema design, aggregation, indexing, and performance optimization.',
    //     keywords: 'mongodb, nosql, database, schema'
    //   },
    //   {
    //     id: 20, CourseID: 'DATA109', Title: 'Google BigQuery Essentials',
    //     Catetory: 'Data', SubCategory: 'Google BigQuery',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.6, Students: 200,
    //     PricePKR: 5200, Duration: 28, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Learn Google BigQuery for cloud data warehousing, querying large datasets, and analytics.',
    //     keywords: 'bigquery, cloud, dataanalytics, sql'
    //   },
    //   {
    //     id: 21, CourseID: 'DATA110', Title: 'SQLite & Lightweight Databases',
    //     Catetory: 'Data', SubCategory: 'SQLite',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.5, Students: 180,
    //     PricePKR: 4000, Duration: 20, Session: 8, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Learn SQLite for lightweight database management, queries, and integration with applications.',
    //     keywords: 'sqlite, database, sql, lightweight'
    //   },
    //   {
    //     id: 22, CourseID: 'DA101', Title: 'Business Intelligence & Analytics',
    //     Catetory: 'Data Analytics', SubCategory: 'Business Intelligence',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 400,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn the fundamentals of business intelligence, dashboards, reporting, and decision-making insights.',
    //     keywords: 'Business Intelligence, BI, Analytics, Dashboards'
    //   },
    //   {
    //     id: 23, CourseID: 'DA102', Title: 'Power BI Complete Course',
    //     Catetory: 'Data Analytics', SubCategory: 'Power BI',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.9, Students: 380,
    //     PricePKR: 5200, Duration: 32, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Master Power BI for building interactive dashboards, reports, and data visualization projects.',
    //     keywords: 'Power BI, Data Visualization, BI, Dashboards'
    //   },
    //   {
    //     id: 24, CourseID: 'DA103', Title: 'Metabase for Analytics',
    //     Catetory: 'Data Analytics', SubCategory: 'Metabase',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 300,
    //     PricePKR: 4500, Duration: 28, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Learn Metabase for simple and effective data analytics, dashboards, and queries.',
    //     keywords: 'Metabase, Data Analytics, Dashboards, Reporting'
    //   },
    //   {
    //     id: 25, CourseID: 'DA104', Title: 'SQL Server Reporting & Analysis',
    //     Catetory: 'Data Analytics', SubCategory: 'SSMS',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 350,
    //     PricePKR: 4800, Duration: 30, Session: 15, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Learn SQL Server Management Studio for queries, reports, and analysis of business data.',
    //     keywords: 'SQL Server, SSMS, Queries, Reporting'
    //   },
    //   {
    //     id: 26, CourseID: 'DA105', Title: 'SSRS & SSAS for Professionals',
    //     Catetory: 'Data Analytics', SubCategory: 'SSRS, SSAS',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 300,
    //     PricePKR: 5000, Duration: 35, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop',
    //     Description: 'Build reports and analytics solutions with SSRS and multidimensional models with SSAS.',
    //     keywords: 'SSRS, SSAS, Reporting, OLAP, Analytics'
    //   },
    //   {
    //     id: 27, CourseID: 'DA106', Title: 'ETL & Data Pipelines',
    //     Catetory: 'Data Analytics', SubCategory: 'ETL',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 280,
    //     PricePKR: 5200, Duration: 32, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Master ETL concepts, data pipelines, and transformations for analytics workflows.',
    //     keywords: 'ETL, Data Pipelines, Data Integration, Analytics'
    //   },
    //   {
    //     id: 28, CourseID: 'DA107', Title: 'Data Modeling & Power Query',
    //     Catetory: 'Data Analytics', SubCategory: 'Data Modeling',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 260,
    //     PricePKR: 5000, Duration: 28, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop',
    //     Description: 'Learn data modeling techniques and Power Query for transforming and preparing data for analysis.',
    //     keywords: 'Data Modeling, Power Query, Analytics, BI'
    //   },
    //   {
    //     id: 29, CourseID: 'DA108', Title: 'Python for Analytics',
    //     Catetory: 'Data Analytics', SubCategory: 'Python',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 320,
    //     PricePKR: 5500, Duration: 35, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Apply Python for data analysis, visualization, and analytics automation with real projects.',
    //     keywords: 'Python, Data Analytics, Pandas, Matplotlib, Visualization'
    //   },
    //   {
    //     id: 30, CourseID: 'DA109', Title: 'Excel & Power Pivot for Analytics',
    //     Catetory: 'Data Analytics', SubCategory: 'Excel / Power Pivot',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 400,
    //     PricePKR: 4500, Duration: 25, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
    //     Description: 'Master Excel and Power Pivot for business data analysis, pivot tables, and dashboard creation.',
    //     keywords: 'Excel, Power Pivot, Analytics, Data Visualization'
    //   },
    //   {
    //     id: 31, CourseID: 'DA110', Title: 'Advanced DAX & MDX for BI',
    //     Catetory: 'Data Analytics', SubCategory: 'DAX, MDX',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 280,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Advanced',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Learn advanced DAX and MDX techniques for BI calculations and multidimensional data analysis.',
    //     keywords: 'DAX, MDX, BI, Analytics, Calculations'
    //   },
    //   {
    //     id: 32, CourseID: 'OF101', Title: 'Excel Essentials for Professionals',
    //     Catetory: 'Microsoft Office Ecosystem', SubCategory: 'Excel',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 400,
    //     PricePKR: 3500, Duration: 20, Session: 10, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
    //     Description: 'Learn Excel basics, formulas, formatting, and productivity tips for business users.',
    //     keywords: 'Excel, Formulas, Spreadsheets, Productivity'
    //   },
    //   {
    //     id: 33, CourseID: 'OF102', Title: 'Advanced Excel & Power Query',
    //     Catetory: 'Microsoft Office Ecosystem', SubCategory: 'Office Add-ins',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 380,
    //     PricePKR: 4200, Duration: 25, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Master Power Query, advanced formulas, and data transformation techniques in Excel.',
    //     keywords: 'Excel, Power Query, Data Transformation, Analytics'
    //   },
    //   {
    //     id: 34, CourseID: 'OF103', Title: 'COM Add-ins Development',
    //     Catetory: 'Microsoft Office Ecosystem', SubCategory: 'COM Add-ins',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 300,
    //     PricePKR: 4800, Duration: 30, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Learn to develop and deploy COM Add-ins for automating tasks in Office applications.',
    //     keywords: 'COM Add-ins, Office Development, Automation'
    //   },
    //   {
    //     id: 35, CourseID: 'OF104', Title: 'VBA Macros for Productivity',
    //     Catetory: 'Microsoft Office Ecosystem', SubCategory: 'VBA',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 350,
    //     PricePKR: 4500, Duration: 28, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Automate repetitive tasks across Excel, Word, and Access using VBA Macros.',
    //     keywords: 'VBA, Macros, Automation, Excel, Office'
    //   },
    //   {
    //     id: 36, CourseID: 'OF105', Title: 'Office Scripts & Workflow Automation',
    //     Catetory: 'Microsoft Office Ecosystem', SubCategory: 'Office Script',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 320,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Create scripts to automate workflows and enhance productivity across Microsoft 365 apps.',
    //     keywords: 'Office Scripts, Automation, Microsoft 365, Workflow'
    //   },
    //   {
    //     id: 37, CourseID: 'OF106', Title: 'Add-in Automation for Office',
    //     Catetory: 'Microsoft Office Ecosystem', SubCategory: 'Add-in Automation',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 300,
    //     PricePKR: 4800, Duration: 25, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop',
    //     Description: 'Learn how to automate tasks and extend Office applications with custom add-ins.',
    //     keywords: 'Office Add-ins, Automation, Productivity, Excel, Word'
    //   },
    //   {
    //     id: 38, CourseID: 'PR101', Title: 'Python Programming Masterclass',
    //     Catetory: 'Programming & Scripting', SubCategory: 'Python',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 500,
    //     PricePKR: 5500, Duration: 40, Session: 15, level: 'All Levels',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn Python from beginner to advanced, including data structures, OOP, and real projects.',
    //     keywords: 'Python, Programming, OOP, Automation, Data Analysis'
    //   },
    //   {
    //     id: 39, CourseID: 'PR102', Title: 'R for Data Analytics & Statistics',
    //     Catetory: 'Programming & Scripting', SubCategory: 'R',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 380,
    //     PricePKR: 5000, Duration: 32, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Learn R programming for data analytics, statistics, and visualization projects.',
    //     keywords: 'R, Data Analytics, Statistics, Visualization'
    //   },
    //   {
    //     id: 40, CourseID: 'PR103', Title: 'JavaScript Essentials',
    //     Catetory: 'Programming & Scripting', SubCategory: 'JavaScript',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 400,
    //     PricePKR: 4800, Duration: 28, Session: 10, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Master JavaScript basics, DOM manipulation, and interactive web development.',
    //     keywords: 'JavaScript, Web Development, Programming, Frontend'
    //   },
    //   {
    //     id: 41, CourseID: 'PR104', Title: 'TypeScript & Modern Web Development',
    //     Catetory: 'Programming & Scripting', SubCategory: 'TypeScript',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 320,
    //     PricePKR: 5200, Duration: 30, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Learn TypeScript for scalable web applications and modern frontend development.',
    //     keywords: 'TypeScript, JavaScript, Web Development, Frontend, Programming'
    //   },
    //   {
    //     id: 42, CourseID: 'PR105', Title: '.NET & C# Development',
    //     Catetory: 'Programming & Scripting', SubCategory: '.NET',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.9, Students: 450,
    //     PricePKR: 6000, Duration: 35, Session: 15, level: 'All Levels',
    //     image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
    //     Description: 'Complete C# and .NET course covering OOP, LINQ, and application development.',
    //     keywords: 'C#, .NET, Programming, OOP, Backend'
    //   },
    //   {
    //     id: 43, CourseID: 'PR106', Title: 'PowerShell Scripting for Automation',
    //     Catetory: 'Programming & Scripting', SubCategory: 'PowerShell',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 300,
    //     PricePKR: 4800, Duration: 25, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop',
    //     Description: 'Learn PowerShell for automating tasks and managing Windows environments efficiently.',
    //     keywords: 'PowerShell, Automation, Scripting, Windows'
    //   },
    //   {
    //     id: 44, CourseID: 'PR107', Title: 'SQL & Database Scripting',
    //     Catetory: 'Programming & Scripting', SubCategory: 'SQL',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 350,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Master SQL scripting for data querying, database management, and reporting.',
    //     keywords: 'SQL, Database, Queries, Scripting, Data'
    //   },
    //   {
    //     id: 45, CourseID: 'PR108', Title: 'VBA Programming & Macros',
    //     Catetory: 'Programming & Scripting', SubCategory: 'VBA',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 280,
    //     PricePKR: 4500, Duration: 28, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Automate repetitive tasks in Office applications using VBA programming and macros.',
    //     keywords: 'VBA, Macros, Automation, Excel, Office'
    //   },
    //   {
    //     id: 46, CourseID: 'PR109', Title: 'Shell Scripting for Linux & Windows',
    //     Catetory: 'Programming & Scripting', SubCategory: 'Shell Scripting',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.6, Students: 250,
    //     PricePKR: 4200, Duration: 25, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Learn shell scripting for automation, task scheduling, and system administration.',
    //     keywords: 'Shell Scripting, Automation, Linux, Windows, Scripting'
    //   },
    //   {
    //     id: 47, CourseID: 'PR110', Title: 'Java Full-Stack Development',
    //     Catetory: 'Programming & Scripting', SubCategory: 'Java',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.9, Students: 400,
    //     PricePKR: 6000, Duration: 40, Session: 15, level: 'All Levels',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Complete Java full-stack development including core Java, Spring, and backend APIs.',
    //     keywords: 'Java, Full Stack, Backend, Programming, Spring'
    //   },
    //   {
    //     id: 48, CourseID: 'VIRT101', Title: 'VMware Workstation Essentials',
    //     Catetory: 'Virtualization', SubCategory: 'VMware Workstation',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 320,
    //     PricePKR: 4800, Duration: 25, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn VMware Workstation basics, virtual machine setup, snapshots, and testing environments.',
    //     keywords: 'VMware Workstation, Virtualization, VM, Hypervisor'
    //   },
    //   {
    //     id: 49, CourseID: 'VIRT102', Title: 'VMware ESXi & vSphere Mastery',
    //     Catetory: 'Virtualization', SubCategory: 'VMware ESXi',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 300,
    //     PricePKR: 5500, Duration: 30, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Master VMware ESXi and vSphere for managing enterprise virtual environments and clusters.',
    //     keywords: 'VMware ESXi, vSphere, Virtualization, Cluster Management'
    //   },
    //   {
    //     id: 50, CourseID: 'VIRT103', Title: 'VirtualBox Complete Guide',
    //     Catetory: 'Virtualization', SubCategory: 'VirtualBox',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 280,
    //     PricePKR: 4500, Duration: 28, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Learn VirtualBox for creating and managing virtual machines on Windows, Linux, and macOS.',
    //     keywords: 'VirtualBox, Virtualization, VM, Multi-OS'
    //   },
    //   {
    //     id: 51, CourseID: 'VIRT104', Title: 'Hyper-V Administration',
    //     Catetory: 'Virtualization', SubCategory: 'Hyper-V',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 260,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Configure and manage Hyper-V virtual environments, VMs, and networking for enterprise setups.',
    //     keywords: 'Hyper-V, Virtualization, Windows Server, VM Management'
    //   },
    //   {
    //     id: 52, CourseID: 'VIRT105', Title: 'Virtualization Tools & Best Practices',
    //     Catetory: 'Virtualization', SubCategory: 'Virtualization tools',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 240,
    //     PricePKR: 4800, Duration: 25, Session: 10, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop',
    //     Description: 'Explore essential virtualization tools, performance optimization, and best practices for IT environments.',
    //     keywords: 'Virtualization, Tools, Optimization, IT Infrastructure'
    //   },
    //   {
    //     id: 53, CourseID: 'WCA101', Title: 'Power Automate for Business',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'Power Automate',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 380,
    //     PricePKR: 4800, Duration: 25, Session: 12, level: 'Beginner',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn Power Automate to streamline workflows, automate tasks, and improve business productivity.',
    //     keywords: 'Power Automate, Workflow, Automation, Microsoft 365'
    //   },
    //   {
    //     id: 54, CourseID: 'WCA102', Title: 'VBA Macros for Office Automation',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'VBA Macros',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 350,
    //     PricePKR: 4500, Duration: 28, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Automate repetitive tasks in Excel, Word, and Access using VBA macros.',
    //     keywords: 'VBA, Macros, Office, Automation'
    //   },
    //   {
    //     id: 55, CourseID: 'WCA103', Title: 'SQL Jobs & Workflow Automation',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'SQL Jobs',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 320,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Create and manage SQL Jobs for scheduling, automation, and efficient database workflows.',
    //     keywords: 'SQL Jobs, Automation, Database, Workflow'
    //   },
    //   {
    //     id: 56, CourseID: 'WCA104', Title: 'SSIS for Data Integration & Automation',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'SSIS',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 300,
    //     PricePKR: 5200, Duration: 32, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    //     Description: 'Master SSIS for building ETL packages, automating data pipelines, and workflow integration.',
    //     keywords: 'SSIS, ETL, Data Integration, Automation'
    //   },
    //   {
    //     id: 57, CourseID: 'WCA105', Title: 'Azure Automation Essentials',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'Azure Automation',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.8, Students: 280,
    //     PricePKR: 5500, Duration: 35, Session: 15, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop',
    //     Description: 'Learn Azure Automation for managing cloud resources, scheduling tasks, and automating workflows.',
    //     keywords: 'Azure Automation, Cloud, Workflow, Automation'
    //   },
    //   {
    //     id: 58, CourseID: 'WCA106', Title: 'Office Add-ins & Automation',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'Office Add-ins',
    //     Visible: 'Yes', Trainer: 'Sajid Mansoor', Rating: 4.7, Students: 260,
    //     PricePKR: 4800, Duration: 28, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
    //     Description: 'Enhance productivity with Office Add-ins and automation for Excel, Word, and Outlook.',
    //     keywords: 'Office Add-ins, Automation, Productivity, Workflow'
    //   },
    //   {
    //     id: 59, CourseID: 'WCA107', Title: 'UiPath Robotic Process Automation',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'UiPath',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.9, Students: 300,
    //     PricePKR: 6000, Duration: 40, Session: 15, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop',
    //     Description: 'Learn RPA with UiPath to automate repetitive business processes efficiently.',
    //     keywords: 'UiPath, RPA, Automation, Workflow'
    //   },
    //   {
    //     id: 60, CourseID: 'WCA108', Title: 'Automation Anywhere Mastery',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'Automation Anywhere',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.8, Students: 280,
    //     PricePKR: 5800, Duration: 38, Session: 14, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop',
    //     Description: 'Master Automation Anywhere for end-to-end robotic process automation.',
    //     keywords: 'Automation Anywhere, RPA, Workflow, Business Automation'
    //   },
    //   {
    //     id: 61, CourseID: 'WCA109', Title: 'PowerShell Scripting for Automation',
    //     Catetory: 'Workflow & Cloud Automation', SubCategory: 'PowerShell Scripts',
    //     Visible: 'Yes', Trainer: 'Sajid', Rating: 4.7, Students: 260,
    //     PricePKR: 5000, Duration: 30, Session: 12, level: 'Intermediate',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    //     Description: 'Automate administrative tasks, workflows, and system management using PowerShell scripts.',
    //     keywords: 'PowerShell, Automation, Scripting, Workflow'
    //   }
    // ];

    const excelData = [
      {
        id: 1,
        CourseID: "AI101",
        Title: "Complete AI & ML Masterclass",
        Catetory: "Artificial Intelligence",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 420,
        PricePKR: 6500,
        Duration: 50,
        Session: 20,
        level: "All Levels",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Learn AI from scratch to advanced concepts including ensemble methods, random forest, gradient boosting, and XGBoost.",
        keywords: "ai, ml, ensemble, randomforest, xgboost",
      },
      {
        id: 2,
        CourseID: "AI102",
        Title: "Deep Learning & Neural Networks",
        Catetory: "Artificial Intelligence",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 380,
        PricePKR: 6000,
        Duration: 40,
        Session: 18,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Master neural networks and deep learning with hands-on projects in TensorFlow and PyTorch.",
        keywords: "ai, deeplearning, tensorflow, pytorch, neuralnetworks",
      },
      {
        id: 3,
        CourseID: "AI103",
        Title: "AI Frameworks & Model Development",
        Catetory: "Artificial Intelligence",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.6,
        Students: 290,
        PricePKR: 5500,
        Duration: 35,
        Session: 15,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop",
        Description:
          "Explore AI frameworks such as Scikit-Learn, Keras, and PyTorch for building and evaluating models.",
        keywords: "ai, ml, scikitlearn, keras, pytorch",
      },
      {
        id: 4,
        CourseID: "AI104",
        Title: "AI Applications & Ethics",
        Catetory: "Artificial Intelligence",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 310,
        PricePKR: 6000,
        Duration: 30,
        Session: 12,
        level: "Advanced",
        image:
          "https://images.unsplash.com/photo-1581093588401-7ff5d857fc5d?w=400&h=300&fit=crop",
        Description:
          "Learn practical AI applications, ethics, and case studies including NLP, computer vision, predictive analytics, and recommender systems.",
        keywords: "ai, nlp, computervision, ethics, predictiveanalytics",
      },
      {
        id: 5,
        CourseID: "AI105",
        Title: "Natural Language Processing with Python",
        Catetory: "Artificial Intelligence",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 350,
        PricePKR: 5800,
        Duration: 28,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Hands-on NLP projects using Python for text analysis, sentiment analysis, and chatbots.",
        keywords: "ai, nlp, python, textanalytics, chatbots",
      },
      {
        id: 6,
        CourseID: "AI106",
        Title: "Computer Vision Projects",
        Catetory: "Artificial Intelligence",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 300,
        PricePKR: 6000,
        Duration: 32,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Build computer vision projects using OpenCV and deep learning techniques for image and video analysis.",
        keywords: "ai, computervision, opencv, deeplearning, imageprocessing",
      },
      {
        id: 7,
        CourseID: "AZ101",
        Title: "Complete Azure Fundamentals",
        Catetory: "Cloud Azure",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 400,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Learn Microsoft Azure from scratch, covering core cloud services, deployment models, and management.",
        keywords: "azure, cloud, azurefundamentals, microsoft, cloudcomputing",
      },
      {
        id: 8,
        CourseID: "AZ102",
        Title: "Azure Administration & Management",
        Catetory: "Cloud Azure",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 320,
        PricePKR: 6000,
        Duration: 35,
        Session: 15,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop",
        Description:
          "Master Azure administration, virtual machines, networking, storage, and monitoring with practical labs.",
        keywords: "azure, admin, virtualmachines, networking, cloudmanagement",
      },
      {
        id: 9,
        CourseID: "AZ103",
        Title: "Azure DevOps & Automation",
        Catetory: "Cloud Azure",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 280,
        PricePKR: 5800,
        Duration: 32,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Learn Azure DevOps, pipelines, CI/CD, and automation using Azure services and PowerShell.",
        keywords: "azure, devops, automation, cicd, powershell",
      },
      {
        id: 10,
        CourseID: "AZ104",
        Title: "Azure Data & AI Services",
        Catetory: "Cloud Azure",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 250,
        PricePKR: 6200,
        Duration: 40,
        Session: 18,
        level: "Advanced",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Explore Azure data services, AI integrations, Machine Learning Studio, and Synapse Analytics.",
        keywords: "azure, ai, ml, dataservices, synapse",
      },
      {
        id: 11,
        CourseID: "AZ105",
        Title: "Azure Security & Governance",
        Catetory: "Cloud Azure",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 300,
        PricePKR: 5900,
        Duration: 30,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Learn Azure security best practices, identity management, compliance, and governance for enterprises.",
        keywords:
          "azure, security, governance, cloudsecurity, identitymanagement",
      },
      {
        id: 12,
        CourseID: "DATA101",
        Title: "SQL Server Mastery",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 480,
        PricePKR: 4500,
        Duration: 30,
        Session: 15,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop",
        Description:
          "Learn SQL Server from scratch, including queries, joins, indexing, and database design concepts.",
        keywords: "sqlserver, database, queries, datadesign",
      },
      {
        id: 13,
        CourseID: "DATA102",
        Title: "MySQL for Data Professionals",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 350,
        PricePKR: 4200,
        Duration: 28,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Hands-on MySQL course covering database creation, queries, stored procedures, and optimization.",
        keywords: "mysql, database, queries, optimization",
      },
      {
        id: 14,
        CourseID: "DATA103",
        Title: "PostgreSQL Advanced Concepts",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 300,
        PricePKR: 5000,
        Duration: 32,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Learn PostgreSQL advanced features including triggers, functions, indexing, and performance tuning.",
        keywords: "postgresql, database, performance, sql",
      },
      {
        id: 15,
        CourseID: "DATA104",
        Title: "Oracle Database Administration",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.6,
        Students: 280,
        PricePKR: 5500,
        Duration: 35,
        Session: 15,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Comprehensive Oracle administration course covering installation, configuration, backup, and recovery.",
        keywords: "oracle, dbadmin, backup, recovery",
      },
      {
        id: 16,
        CourseID: "DATA105",
        Title: "SAP HANA for Data Management",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 260,
        PricePKR: 6000,
        Duration: 30,
        Session: 12,
        level: "Advanced",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Learn SAP HANA architecture, modeling, data provisioning, and performance optimization.",
        keywords: "saphana, datamodeling, performance, data",
      },
      {
        id: 17,
        CourseID: "DATA106",
        Title: "Mastering Data Management (MDM)",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 240,
        PricePKR: 5000,
        Duration: 28,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop",
        Description:
          "Learn Master Data Management concepts, governance, and implementation best practices.",
        keywords: "mdm, datagovernance, dataquality",
      },
      {
        id: 18,
        CourseID: "DATA107",
        Title: "Excel for Data Management",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 400,
        PricePKR: 3500,
        Duration: 20,
        Session: 8,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
        Description:
          "Learn Excel for managing, analyzing, and visualizing data efficiently with formulas, pivot tables, and Power Query.",
        keywords: "excel, datamanagement, pivot, powerquery",
      },
      {
        id: 19,
        CourseID: "DATA108",
        Title: "MongoDB for Developers",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 220,
        PricePKR: 4800,
        Duration: 25,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Hands-on course on MongoDB, including schema design, aggregation, indexing, and performance optimization.",
        keywords: "mongodb, nosql, database, schema",
      },
      {
        id: 20,
        CourseID: "DATA109",
        Title: "Google BigQuery Essentials",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.6,
        Students: 200,
        PricePKR: 5200,
        Duration: 28,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Learn Google BigQuery for cloud data warehousing, querying large datasets, and analytics.",
        keywords: "bigquery, cloud, dataanalytics, sql",
      },
      {
        id: 21,
        CourseID: "DATA110",
        Title: "SQLite & Lightweight Databases",
        Catetory: "Data",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.5,
        Students: 180,
        PricePKR: 4000,
        Duration: 20,
        Session: 8,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Learn SQLite for lightweight database management, queries, and integration with applications.",
        keywords: "sqlite, database, sql, lightweight",
      },
      {
        id: 22,
        CourseID: "DA101",
        Title: "Business Intelligence & Analytics",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 400,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Learn the fundamentals of business intelligence, dashboards, reporting, and decision-making insights.",
        keywords: "Business Intelligence, BI, Analytics, Dashboards",
      },
      {
        id: 23,
        CourseID: "DA102",
        Title: "Power BI Complete Course",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.9,
        Students: 380,
        PricePKR: 5200,
        Duration: 32,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Master Power BI for building interactive dashboards, reports, and data visualization projects.",
        keywords: "Power BI, Data Visualization, BI, Dashboards",
      },
      {
        id: 23,
        CourseID: "DA103",
        Title: "Metabase for Analytics",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 300,
        PricePKR: 4500,
        Duration: 28,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Learn Metabase for simple and effective data analytics, dashboards, and queries.",
        keywords: "Metabase, Data Analytics, Dashboards, Reporting",
      },
      {
        id: 24,
        CourseID: "DA104",
        Title: "SQL Server Reporting & Analysis",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 350,
        PricePKR: 4800,
        Duration: 30,
        Session: 15,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Learn SQL Server Management Studio for queries, reports, and analysis of business data.",
        keywords: "SQL Server, SSMS, Queries, Reporting",
      },
      {
        id: 25,
        CourseID: "DA105",
        Title: "SSRS & SSAS for Professionals",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 300,
        PricePKR: 5000,
        Duration: 35,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop",
        Description:
          "Build reports and analytics solutions with SSRS and multidimensional models with SSAS.",
        keywords: "SSRS, SSAS, Reporting, OLAP, Analytics",
      },
      {
        id: 26,
        CourseID: "DA106",
        Title: "ETL & Data Pipelines",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 280,
        PricePKR: 5200,
        Duration: 32,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Master ETL concepts, data pipelines, and transformations for analytics workflows.",
        keywords: "ETL, Data Pipelines, Data Integration, Analytics",
      },
      {
        id: 27,
        CourseID: "DA107",
        Title: "Data Modeling & Power Query",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 260,
        PricePKR: 5000,
        Duration: 28,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop",
        Description:
          "Learn data modeling techniques and Power Query for transforming and preparing data for analysis.",
        keywords: "Data Modeling, Power Query, Analytics, BI",
      },
      {
        id: 28,
        CourseID: "DA108",
        Title: "Python for Analytics",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 320,
        PricePKR: 5500,
        Duration: 35,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Apply Python for data analysis, visualization, and analytics automation with real projects.",
        keywords: "Python, Data Analytics, Pandas, Matplotlib, Visualization",
      },
      {
        id: 29,
        CourseID: "DA109",
        Title: "Excel & Power Pivot for Analytics",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 400,
        PricePKR: 4500,
        Duration: 25,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
        Description:
          "Master Excel and Power Pivot for business data analysis, pivot tables, and dashboard creation.",
        keywords: "Excel, Power Pivot, Analytics, Data Visualization",
      },
      {
        id: 30,
        CourseID: "DA110",
        Title: "Advanced DAX & MDX for BI",
        Catetory: "Data Analytics",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 280,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Advanced",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Learn advanced DAX and MDX techniques for BI calculations and multidimensional data analysis.",
        keywords: "DAX, MDX, BI, Analytics, Calculations",
      },
      {
        id: 31,
        CourseID: "OF101",
        Title: "Excel Essentials for Professionals",
        Catetory: "Microsoft Office Ecosystem",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 400,
        PricePKR: 3500,
        Duration: 20,
        Session: 10,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
        Description:
          "Learn Excel basics, formulas, formatting, and productivity tips for business users.",
        keywords: "Excel, Formulas, Spreadsheets, Productivity",
      },
      {
        id: 32,
        CourseID: "OF102",
        Title: "Advanced Excel & Power Query",
        Catetory: "Microsoft Office Ecosystem",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 380,
        PricePKR: 4200,
        Duration: 25,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Master Power Query, advanced formulas, and data transformation techniques in Excel.",
        keywords: "Excel, Power Query, Data Transformation, Analytics",
      },
      {
        id: 33,
        CourseID: "OF103",
        Title: "COM Add-ins Development",
        Catetory: "Microsoft Office Ecosystem",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 300,
        PricePKR: 4800,
        Duration: 30,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Learn to develop and deploy COM Add-ins for automating tasks in Office applications.",
        keywords: "COM Add-ins, Office Development, Automation",
      },
      {
        id: 34,
        CourseID: "OF104",
        Title: "VBA Macros for Productivity",
        Catetory: "Microsoft Office Ecosystem",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 350,
        PricePKR: 4500,
        Duration: 28,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Automate repetitive tasks across Excel, Word, and Access using VBA Macros.",
        keywords: "VBA, Macros, Automation, Excel, Office",
      },
      {
        id: 35,
        CourseID: "OF105",
        Title: "Office Scripts & Workflow Automation",
        Catetory: "Microsoft Office Ecosystem",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 320,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Create scripts to automate workflows and enhance productivity across Microsoft 365 apps.",
        keywords: "Office Scripts, Automation, Microsoft 365, Workflow",
      },
      {
        id: 36,
        CourseID: "OF106",
        Title: "Add-in Automation for Office",
        Catetory: "Microsoft Office Ecosystem",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 300,
        PricePKR: 4800,
        Duration: 25,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop",
        Description:
          "Learn how to automate tasks and extend Office applications with custom add-ins.",
        keywords: "Office Add-ins, Automation, Productivity, Excel, Word",
      },
      {
        id: 37,
        CourseID: "PR101",
        Title: "Python Programming Masterclass",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 500,
        PricePKR: 5500,
        Duration: 40,
        Session: 15,
        level: "All Levels",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop",
        Description:
          "Learn Python programming from basics to advanced topics including OOP, web development, and data science.",
        keywords: "Python, Programming, OOP, Web Development, Data Science",
      },
      {
        id: 38,
        CourseID: "PR102",
        Title: "R for Data Analytics & Statistics",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 380,
        PricePKR: 5000,
        Duration: 32,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Learn R programming for data analytics, statistics, and visualization projects.",
        keywords: "R, Data Analytics, Statistics, Visualization",
      },
      {
        id: 39,
        CourseID: "PR103",
        Title: "JavaScript Essentials",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 400,
        PricePKR: 4800,
        Duration: 28,
        Session: 10,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Master JavaScript basics, DOM manipulation, and interactive web development.",
        keywords: "JavaScript, Web Development, Programming, Frontend",
      },
      {
        id: 40,
        CourseID: "PR104",
        Title: "TypeScript & Modern Web Development",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 320,
        PricePKR: 5200,
        Duration: 30,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Learn TypeScript for scalable web applications and modern frontend development.",
        keywords:
          "TypeScript, JavaScript, Web Development, Frontend, Programming",
      },
      {
        id: 41,
        CourseID: "PR105",
        Title: ".NET & C# Development",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.9,
        Students: 450,
        PricePKR: 6000,
        Duration: 35,
        Session: 15,
        level: "All Levels",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
        Description:
          "Complete C# and .NET course covering OOP, LINQ, and application development.",
        keywords: "C#, .NET, Programming, OOP, Backend",
      },
      {
        id: 42,
        CourseID: "PR106",
        Title: "PowerShell Scripting for Automation",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 300,
        PricePKR: 4800,
        Duration: 25,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1537432376769-00a1b52dce0b?w=400&h=300&fit=crop",
        Description:
          "Learn PowerShell for automating tasks and managing Windows environments efficiently.",
        keywords: "PowerShell, Automation, Scripting, Windows",
      },
      {
        id: 43,
        CourseID: "PR107",
        Title: "SQL & Database Scripting",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 350,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Master SQL scripting for data querying, database management, and reporting.",
        keywords: "SQL, Database, Queries, Scripting, Data",
      },
      {
        id: 44,
        CourseID: "PR108",
        Title: "VBA Programming & Macros",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 280,
        PricePKR: 4500,
        Duration: 28,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Automate repetitive tasks in Office applications using VBA programming and macros.",
        keywords: "VBA, Macros, Automation, Excel, Office",
      },
      {
        id: 45,
        CourseID: "PR109",
        Title: "Shell Scripting for Linux & Windows",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.6,
        Students: 250,
        PricePKR: 4200,
        Duration: 25,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Learn shell scripting for automation, task scheduling, and system administration.",
        keywords: "Shell Scripting, Automation, Linux, Windows, Scripting",
      },
      {
        id: 46,
        CourseID: "PR110",
        Title: "Java Full-Stack Development",
        Catetory: "Programming & Scripting",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.9,
        Students: 400,
        PricePKR: 6000,
        Duration: 40,
        Session: 15,
        level: "All Levels",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Complete Java full-stack development including core Java, Spring, and backend APIs.",
        keywords: "Java, Full Stack, Backend, Programming, Spring",
      },
      {
        id: 47,
        CourseID: "VIRT101",
        Title: "VMware Workstation Essentials",
        Catetory: "Virtualization",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 320,
        PricePKR: 4800,
        Duration: 25,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Learn VMware Workstation basics, virtual machine setup, snapshots, and testing environments.",
        keywords: "VMware Workstation, Virtualization, VM, Hypervisor",
      },
      {
        id: 48,
        CourseID: "VIRT102",
        Title: "VMware ESXi & vSphere Mastery",
        Catetory: "Virtualization",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 300,
        PricePKR: 5500,
        Duration: 30,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Master VMware ESXi and vSphere for managing enterprise virtual environments and clusters.",
        keywords: "VMware ESXi, vSphere, Virtualization, Cluster Management",
      },
      {
        id: 49,
        CourseID: "VIRT103",
        Title: "VirtualBox Complete Guide",
        Catetory: "Virtualization",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 280,
        PricePKR: 4500,
        Duration: 28,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Learn VirtualBox for creating and managing virtual machines on Windows, Linux, and macOS.",
        keywords: "VirtualBox, Virtualization, VM, Multi-OS",
      },
      {
        id: 50,
        CourseID: "VIRT104",
        Title: "Hyper-V Administration",
        Catetory: "Virtualization",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 260,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Configure and manage Hyper-V virtual environments, VMs, and networking for enterprise setups.",
        keywords: "Hyper-V, Virtualization, Windows Server, VM Management",
      },
      {
        id: 51,
        CourseID: "VIRT105",
        Title: "Virtualization Tools & Best Practices",
        Catetory: "Virtualization",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 240,
        PricePKR: 4800,
        Duration: 25,
        Session: 10,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop",
        Description:
          "Learn various virtualization tools, techniques, and best practices for efficient resource management.",
        keywords: "Virtualization, Best Practices, Tools, Resource Management",
      },
      {
        id: 52,
        CourseID: "WCA101",
        Title: "Power Automate for Business",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 380,
        PricePKR: 4800,
        Duration: 25,
        Session: 12,
        level: "Beginner",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Learn Power Automate to streamline workflows, automate tasks, and improve business productivity.",
        keywords: "Power Automate, Workflow, Automation, Microsoft 365",
      },
      {
        id: 53,
        CourseID: "WCA102",
        Title: "VBA Macros for Office Automation",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 350,
        PricePKR: 4500,
        Duration: 28,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Automate repetitive tasks in Excel, Word, and Access using VBA macros.",
        keywords: "VBA, Macros, Office, Automation",
      },
      {
        id: 54,
        CourseID: "WCA103",
        Title: "SQL Jobs & Workflow Automation",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 320,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Create and manage SQL Jobs for scheduling, automation, and efficient database workflows.",
        keywords: "SQL Jobs, Automation, Database, Workflow",
      },
      {
        id: 55,
        CourseID: "WCA104",
        Title: "SSIS for Data Integration & Automation",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 300,
        PricePKR: 5200,
        Duration: 32,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop",
        Description:
          "Master SSIS for building ETL packages, automating data pipelines, and workflow integration.",
        keywords: "SSIS, ETL, Data Integration, Automation",
      },
      {
        id: 56,
        CourseID: "WCA105",
        Title: "Azure Automation Essentials",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.8,
        Students: 280,
        PricePKR: 5500,
        Duration: 35,
        Session: 15,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&h=300&fit=crop",
        Description:
          "Learn Azure Automation for managing cloud resources, scheduling tasks, and automating workflows.",
        keywords: "Azure Automation, Cloud, Workflow, Automation",
      },
      {
        id: 57,
        CourseID: "WCA106",
        Title: "Office Add-ins & Automation",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid Mansoor",
        Rating: 4.7,
        Students: 260,
        PricePKR: 4800,
        Duration: 28,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
        Description:
          "Enhance productivity with Office Add-ins and automation for Excel, Word, and Outlook.",
        keywords: "Office Add-ins, Automation, Productivity, Workflow",
      },
      {
        id: 58,
        CourseID: "WCA107",
        Title: "UiPath Robotic Process Automation",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.9,
        Students: 300,
        PricePKR: 6000,
        Duration: 40,
        Session: 15,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1581090700227-4c4d1b8a3b2b?w=400&h=300&fit=crop",
        Description:
          "Learn RPA with UiPath to automate repetitive business processes efficiently.",
        keywords: "UiPath, RPA, Automation, Workflow",
      },
      {
        id: 59,
        CourseID: "WCA108",
        Title: "Automation Anywhere Mastery",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.8,
        Students: 280,
        PricePKR: 5800,
        Duration: 38,
        Session: 14,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=300&fit=crop",
        Description:
          "Master Automation Anywhere for end-to-end robotic process automation.",
        keywords: "Automation Anywhere, RPA, Workflow, Business Automation",
      },
      {
        id: 60,
        CourseID: "WCA109",
        Title: "PowerShell Scripting for Automation",
        Catetory: "Workflow & Cloud Automation",
        Visible: "Yes",
        Trainer: "Sajid",
        Rating: 4.7,
        Students: 260,
        PricePKR: 5000,
        Duration: 30,
        Session: 12,
        level: "Intermediate",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        Description:
          "Automate administrative tasks, workflows, and system management using PowerShell scripts.",
        keywords: "PowerShell, Automation, Scripting, Workflow",
      },
    ];
    // Transform the data to match the expected format
    return excelData.map((course) => ({
      id: course.id,
      title: course.Title,
      instructor: course.Trainer,
      rating: course.Rating,
      students: course.Students,
      price: course.PricePKR,
      originalPrice: course.PricePKR * 1.5, // Adding a fictional original price
      duration: `${course.Duration} hours`,
      lectures: course.Session,
      level: course.level,
      image: course.image,
      bestseller: course.students > 400, // Mark as bestseller if more than 400 students
      description: course.Description,
      keywords: course.keywords.split(", "),
      category: course.Catetory,
      subCategory: course.SubCategory,
    }));
  };

  const allCourses = extractCourseData();
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  // Extract unique categories and subcategories for filters
  const categories = [
    "all",
    ...new Set(allCourses.map((course) => course.category)),
  ];
  const subCategories = [
    "all",
    ...new Set(allCourses.map((course) => course.subCategory)),
  ];

  const applyFilters = () => {
    let filtered = allCourses;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          course.keywords.some((keyword) =>
            keyword.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Rating filter
    if (selectedRating !== "all") {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter((course) => course.rating >= minRating);
    }

    // Level filter
    if (selectedLevel !== "all") {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Subcategory filter
    if (selectedSubCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.subCategory === selectedSubCategory
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (course) => course.price >= priceRange[0] && course.price <= priceRange[1]
    );

    setFilteredCourses(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [
    selectedRating,
    selectedLevel,
    priceRange,
    searchQuery,
    selectedCategory,
    selectedSubCategory,
  ]);

  const formatPrice = (value) => {
    return `$${value}`;
  };

  const clearFilters = () => {
    setSelectedRating("all");
    setSelectedLevel("all");
    setSelectedCategory("all");
    setSelectedSubCategory("all");
    setPriceRange([0, 10000]);
    setSearchQuery("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              All Courses
            </h1>
            <p className="text-gray-600 text-lg">
              Browse our complete catalog of courses
            </p>
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

                {/* Search Filter */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subcategory Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Subcategory
                  </h4>
                  <select
                    value={selectedSubCategory}
                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    {subCategories.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory === "all"
                          ? "All Subcategories"
                          : subCategory}
                      </option>
                    ))}
                  </select>
                </div>

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
                    <option value="All Levels">All Levels</option>
                  </select>
                </div>

                {/* Price Filter with Ant Design Slider */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Price Range
                  </h4>
                  <Slider
                    range
                    min={0}
                    max={10000}
                    step={1000}
                    value={priceRange}
                    onChange={setPriceRange}
                    tooltip={{
                      formatter: formatPrice,
                    }}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Clear Filters Button */}
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md text-sm transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredCourses.length} of {allCourses.length}{" "}
                  courses
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
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
                          <span className="font-medium text-gray-900">
                            {course.instructor}
                          </span>
                        </div>

                        {/* Rating and Students */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            <span className="text-yellow-400 font-semibold">
                              {course.rating}
                            </span>
                            <Star className="w-4 h-4 text-yellow-400 ml-1 fill-current" />
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">
                            ({course.students.toLocaleString()})
                          </span>
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
                            <span className="text-2xl font-bold text-gray-900">
                              ${course.price}
                            </span>
                            {course.originalPrice > course.price && (
                              <span className="text-gray-500 line-through">
                                ${course.originalPrice}
                              </span>
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
                  <p className="text-gray-500 text-lg">
                    No courses match your current filters.
                  </p>
                  <button
                    onClick={clearFilters}
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
