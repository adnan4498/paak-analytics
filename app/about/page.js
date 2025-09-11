"use client";
import React from "react";
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
  ArrowRight,
  Handshake,
  Users,
  LifeBuoy,
  Briefcase,
  Group,
  Database,
  BarChart3,
  Cog,
  Cloud,
  Zap,
} from "lucide-react";
import Navbar from "../Navbar";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import sajidSirImg from "../../public/sajid-sir-img.jpg";
import companyLogo1 from "../../public/company-logo-1.jpeg";
import companyLogo2 from "../../public/company-logo-2.jpeg";
import companyLogo3 from "../../public/company-logo-3.jpeg";
import companyLogo4 from "../../public/company-logo-4.jpeg";
import companyLogo5 from "../../public/company-logo-5.jpeg";
import companyLogo6 from "../../public/company-logo-6.jpeg";
import companyLogo7 from "../../public/company-logo-7.jpeg";
import companyLogo8 from "../../public/company-logo-8.jpeg";
import companyLogo9 from "../../public/company-logo-9.jpeg";
import companyLogo10 from "../../public/company-logo-10.jpeg";
import companyLogo11 from "../../public/company-logo-11.jpeg";
import companyLogo12 from "../../public/company-logo-12.jpeg";
import companyLogo13 from "../../public/company-logo-13.jpeg";
import companyLogo14 from "../../public/company-logo-14.jpeg";
import companyLogo15 from "../../public/company-logo-15.jpeg";
import companyLogo16 from "../../public/company-logo-16.jpeg";
import companyLogo17 from "../../public/company-logo-17.jpeg";
import companyLogo18 from "../../public/company-logo-18.jpeg";

const About = () => {
  // Sample person data
  const person = {
    name: "Sajid Mansoor ",
    title: "Data Mastermind",
    bio: "Founder – Paak Analytics Consultancy Analytics consultant and educator with over 24 years of experience in BI, data analytics, ETL, and machine learning. Dedicated to empowering professionals through hands-on, project-based learning and practical business intelligence solutions.",
    image: "/api/placeholder/400/400", // This would be replaced with actual image path
    email: "sajidmansoorali@gmail.com",
    phone: "+923222384577",
    location: "Karachi, Pakistan",
    website: "https://pk.linkedin.com/company/paak-analytics-consultancy",
    linkedin: "https://pk.linkedin.com/in/sajidmansoor",
    // twitter: "@sarahjohnson",
    courses: 12,
    students: 4500,
    rating: 4.9,
    joined: "Trainer since 2000",
  };

  const subCategory = [
    { title: "Hands-on Workshops", icon: Handshake },
    { title: "Professional Trained", icon: Users },
    { title: "Post-Training Support", icon: LifeBuoy },
    { title: "Real-World Projects", icon: Briefcase },
    { title: "Interactive Group Sessions", icon: Group },
    { title: "One-to-One Mentorship", icon: User },
    { title: "Case Study Based Learning", icon: BookOpen },
  ];

  const skills = [
    { name: "Machine Learning", proficiency: 90 },
    { name: "Python Programming", proficiency: 95 },
    { name: "Statistical Analysis", proficiency: 85 },
    { name: "Data Visualization", proficiency: 80 },
    { name: "Deep Learning", proficiency: 75 },
  ];

  const courses = [
    { title: "Python for Data Science", students: 1500, rating: 4.8 },
    { title: "Machine Learning Fundamentals", students: 1200, rating: 4.9 },
    { title: "Advanced Statistical Modeling", students: 800, rating: 4.7 },
    { title: "Data Visualization with Python", students: 1000, rating: 4.8 },
  ];

  let companyLogos = [
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo6,
    companyLogo7,
    companyLogo8,
    companyLogo9,
    companyLogo10,
    companyLogo11,
    companyLogo12,
    companyLogo13,
    companyLogo1,
    companyLogo14,
    companyLogo15,
    companyLogo16,
    companyLogo17,
    companyLogo18,
  ];

  // Configure the carousel responsiveness
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const expertiseAreas = [
    {
      title: "Data & Analytics",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Data Warehousing",
        "Data Analytics & Visualization",
        "Business Intelligence (BI)",
        "Predictive Analytics",
        "Machine Learning & AI Concepts",
        "KPI Design & Performance Tracking",
        "Data Governance & Master Data Management (MDM)",
        "Data Quality & Cleansing",
      ],
    },
    {
      title: "Business & Consulting",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500",
      skills: [
        "Business Process Automation",
        "Dashboard Design & Storytelling",
        "Reporting Strategy & Automation",
        "Decision Support Systems",
        "Analytics Consulting & Advisory",
        "Training & Capacity Building",
      ],
    },
        {
      title: "Automation & Integration",
      icon: Zap,
      color: "from-pink-500 to-rose-500",
      skills: [
        "ETL Processes",
        "Workflow Automation",
        "PowerShell Scripting",
        "Power Automate",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        "Azure Cloud Services",
        "Virtualization & Cloud Integration",
        "Data Security & Compliance",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Cog,
      color: "from-purple-500 to-indigo-500",
      skills: [
        "Microsoft Power BI",
        "Excel & Advanced Excel",
        "Power Query",
        "VBA & Office Automation",
        "SQL (MySQL, PostgreSQL, SQL Server)",
        "SSMS, SSRS, SSAS, SSIS",
        "R Programming",
        "Python for Analytics",
        "Metabase",
        ".NET, Office Add-ins, COM Add-ins",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20 ">
        {/* Hero Section */}
        <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-44 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full overflow-hidden shadow-lg mx-auto">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <Image
                      src={sajidSirImg}
                      width={"0"}
                      height={"0"}
                      className="w-full h-full"
                      alt="Sajid Mansoor"
                    />
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {person.name}
                </h1>
                <p className="text-xl text-blue-600 mb-6">{person.title}</p>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  {person.bio}
                </p>

                <div className="mt-8 w-[340px] lg:w-[700px] ">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    Center
                    mode={true}
                    keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    // containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // itemClass="carousel-item-padding-40-px"
                  >
                    {companyLogos.map((logo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={logo}
                          width={120}
                          height={60}
                          className="rounded-full h-36 w-36 object-contain bg-white"
                          alt={`Company Logo ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-4">
            {subCategory.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3  px-6 py-3 rounded-full border border-blue-200"
                >
                  <IconComponent className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div> */}
        </section>

        {/* Rest of the component remains exactly the same */}
        {/* Main Content */}

   <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <a
                    href={`mailto:${person.email}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {person.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <a
                    href={`tel:${person.phone}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {person.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{person.location}</span>
                </div>

                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-blue-600 mr-3" />
                  <a
                    href={`https://${person.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {person.website}
                  </a>
                </div>

                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
                  <a
                    href={`https://${person.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {person.linkedin}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>{person.joined}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                Send Message
              </button>
            </div>
          </div>

          {/* Areas of Expertise Main Content */}
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Areas of Expertise
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {expertiseAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div key={index} className="group">
                      {/* Header */}
                      <div className="flex items-center mb-6">
                        <div className={`bg-gradient-to-br ${area.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 ml-4 group-hover:text-gray-900 transition-colors">
                          {area.title}
                        </h3>
                      </div>
                      
                      {/* Skills Column */}
                      <div className="space-y-3">
                        {area.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-start p-3 rounded-lg bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 group/skill"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${area.color} mr-3 mt-2 opacity-70 group-hover/skill:opacity-100 transition-opacity flex-shrink-0`}></div>
                            <span className="text-gray-700 group-hover/skill:text-gray-900 transition-colors text-sm font-medium leading-relaxed">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Skill Count Badge */}
                      {/* <div className="mt-6">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r ${area.color} text-white shadow-sm`}>
                          {area.skills.length} {area.skills.length === 1 ? 'Skill' : 'Skills'}
                        </span>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Biography Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Detailed Biography
              </h2>

              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Sajid Mansoor is a seasoned analytics consultant and
                  educator with over two decades of experience in data
                  analytics, BI, ETL, machine learning, and system
                  automation. As the Founder and Head of Data Analytics at
                  Paak Analytics Consultancy, based in Karachi and
                  established in 2021, he leads the delivery of analytics
                  services and hands-on training programs.
                </p>

                <p className="mb-4">
                  With a focus on real-world application, Sajid has trained
                  professionals across sectors ranging from banking to
                  supply chain and tech-driven organizations. His
                  specialties span Azure and cloud data warehousing,
                  dashboards, automation using MS Office tools, Python, R,
                  Metabase, and BI technologies like Power BI, SSMS, SSRS,
                  SSAS, and SSIS.
                </p>

                <p className="mb-4">
                  Sajid's teaching philosophy centers on architecture-first
                  learning, blending strategic design with practical
                  execution. He empowers learners to break free from tool-level
                  thinking—teaching the architecture behind scalable BI
                  systems and semantic modelling layers. Through project-based, 
                  real-world ETL pipeline design using SQL, Excel, Python, and SSIS, 
                  he brings business logic to life.
                </p>

                <p>
                  When he's not consulting or teaching, Sajid enjoys
                  exploring emerging tech trends, reading about business
                  strategy, and mentoring young professionals to excel in
                  the analytics field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Start Learning with Sajid Mansoor
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start Learning with Sajid Mansoor Join professionals who have
              transformed their careers through practical, interactive, and
              career-focused training.
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
