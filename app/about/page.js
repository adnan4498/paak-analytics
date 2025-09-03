"use client"
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin,
  Twitter,
  BookOpen,
  Award,
  Calendar,
  User,
  ArrowRight
} from 'lucide-react';
import Navbar from '../Navbar';

const About = () => {
  // Sample person data
  const person = {
    name: "Dr. Sarah Johnson",
    title: "Senior Data Science Instructor",
    bio: "Data scientist and educator with over 10 years of experience in machine learning and statistical analysis. Passionate about making complex data concepts accessible to everyone.",
    image: "/api/placeholder/400/400", // This would be replaced with actual image path
    email: "sarah.johnson@learnhub.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "sarahjohnson.com",
    linkedin: "linkedin.com/in/sarahjohnson",
    twitter: "@sarahjohnson",
    courses: 12,
    students: 4500,
    rating: 4.9,
    joined: "January 2019"
  };

  const skills = [
    { name: "Machine Learning", proficiency: 90 },
    { name: "Python Programming", proficiency: 95 },
    { name: "Statistical Analysis", proficiency: 85 },
    { name: "Data Visualization", proficiency: 80 },
    { name: "Deep Learning", proficiency: 75 }
  ];

  const courses = [
    { title: "Python for Data Science", students: 1500, rating: 4.8 },
    { title: "Machine Learning Fundamentals", students: 1200, rating: 4.9 },
    { title: "Advanced Statistical Modeling", students: 800, rating: 4.7 },
    { title: "Data Visualization with Python", students: 1000, rating: 4.8 }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full overflow-hidden shadow-lg mx-auto">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <User className="w-20 h-20" />
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{person.name}</h1>
              <p className="text-xl text-blue-600 mb-6">{person.title}</p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">{person.bio}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">{person.courses} Courses</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <User className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">{person.students.toLocaleString()} Students</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">{person.rating} Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <a href={`mailto:${person.email}`} className="text-gray-700 hover:text-blue-600">
                      {person.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <a href={`tel:${person.phone}`} className="text-gray-700 hover:text-blue-600">
                      {person.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{person.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-blue-600 mr-3" />
                    <a href={`https://${person.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                      {person.website}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
                    <a href={`https://${person.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                      {person.linkedin}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Twitter className="w-5 h-5 text-blue-600 mr-3" />
                    <a href={`https://twitter.com/${person.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                      {person.twitter}
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>Instructor since {person.joined}</span>
                  </div>
                </div>
                
                <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className="md:col-span-2">
              {/* Skills Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Courses Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
                
                <div className="grid gap-4">
                  {courses.map((course, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{course.title}</h3>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{course.students.toLocaleString()} students</span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 text-yellow-500 mr-1" />
                          {course.rating}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium">
                  View all courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              
              {/* Bio Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Biography</h2>
                
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Dr. Sarah Johnson is a seasoned data scientist and educator with over a decade of experience 
                    in machine learning and statistical analysis. She holds a Ph.D. in Computer Science from 
                    Stanford University, where her research focused on developing novel algorithms for 
                    large-scale data processing.
                  </p>
                  
                  <p className="mb-4">
                    Prior to joining LearnHub, Sarah worked as a lead data scientist at TechInnovate, where 
                    she led a team of analysts working on predictive modeling for customer behavior. Her work 
                    has been published in several prestigious journals and she regularly speaks at international 
                    conferences on data science and AI.
                  </p>
                  
                  <p className="mb-4">
                    Sarah's teaching philosophy centers on making complex data concepts accessible and 
                    engaging for learners of all backgrounds. She believes that hands-on practice is key to 
                    mastering data science, which is reflected in her project-based course approach.
                  </p>
                  
                  <p>
                    When she's not teaching or working on data projects, Sarah enjoys hiking, reading 
                    historical fiction, and volunteering with organizations that promote STEM education 
                    for underrepresented groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Learning with Sarah</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through Sarah's engaging and comprehensive courses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              Browse Courses
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;