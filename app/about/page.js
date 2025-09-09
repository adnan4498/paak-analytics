// "use client";
// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
//   Linkedin,
//   Twitter,
//   BookOpen,
//   Award,
//   Calendar,
//   User,
//   ArrowRight,
// } from "lucide-react";
// import Navbar from "../Navbar";
// import Image from "next/image";

// import sajidSirImg from "../../public/sajid-sir-img.jpg";
// import companyLogo1 from "../../public/company-logo-1.jpeg"
// import companyLogo2 from "../../public/company-logo-2.jpeg"
// import companyLogo3 from "../../public/company-logo-3.jpeg"
// import companyLogo4 from "../../public/company-logo-4.jpeg"
// import companyLogo5 from "../../public/company-logo-5.jpeg"
// import companyLogo6 from "../../public/company-logo-6.jpeg"
// import companyLogo7 from "../../public/company-logo-7.jpeg"
// import companyLogo8 from "../../public/company-logo-8.jpeg"
// import companyLogo9 from "../../public/company-logo-9.jpeg"
// import companyLogo10 from "../../public/company-logo-10.jpeg"
// import companyLogo11 from "../../public/company-logo-11.jpeg"
// import companyLogo12 from "../../public/company-logo-12.jpeg"
// import companyLogo13 from "../../public/company-logo-13.jpeg"
// import companyLogo14 from "../../public/company-logo-14.jpeg"
// import companyLogo15 from "../../public/company-logo-15.jpeg"
// import companyLogo16 from "../../public/company-logo-16.jpeg"
// import companyLogo17 from "../../public/company-logo-17.jpeg"
// import companyLogo18 from "../../public/company-logo-18.jpeg"

// const About = () => {
//   // Sample person data
//   const person = {
//     name: "Sajid Mansoor ",
//     title: "Data Mastermind",
//     bio: "Founder – Paak Analytics Consultancy Analytics consultant and educator with over 24 years of experience in BI, data analytics, ETL, and machine learning. Dedicated to empowering professionals through hands-on, project-based learning and practical business intelligence solutions.",
//     image: "/api/placeholder/400/400", // This would be replaced with actual image path
//     email: "sajidmansoorali@gmail.com",
//     phone: "+923222384577",
//     location: "Karachi, Pakistan",
//     website: "https://pk.linkedin.com/company/paak-analytics-consultancy",
//     linkedin: "https://pk.linkedin.com/in/sajidmansoor",
//     // twitter: "@sarahjohnson",
//     courses: 12,
//     students: 4500,
//     rating: 4.9,
//     joined: "instructor since 2000",
//   };

//   const skills = [
//     { name: "Machine Learning", proficiency: 90 },
//     { name: "Python Programming", proficiency: 95 },
//     { name: "Statistical Analysis", proficiency: 85 },
//     { name: "Data Visualization", proficiency: 80 },
//     { name: "Deep Learning", proficiency: 75 },
//   ];

//   const courses = [
//     { title: "Python for Data Science", students: 1500, rating: 4.8 },
//     { title: "Machine Learning Fundamentals", students: 1200, rating: 4.9 },
//     { title: "Advanced Statistical Modeling", students: 800, rating: 4.7 },
//     { title: "Data Visualization with Python", students: 1000, rating: 4.8 },
//   ];

//   let companyLogos = [

//     companyLogo2,
//     companyLogo3,
//     companyLogo4,
//     companyLogo5,
//     companyLogo6,
//     companyLogo7,
//     companyLogo8,
//     companyLogo9,
//     companyLogo10,
//     companyLogo11,
//     companyLogo12,
//     companyLogo13,
//         companyLogo1,
//     companyLogo14,
//     companyLogo15,
//     companyLogo16,
//     companyLogo17,
//     companyLogo18,
//   ]

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-white pt-20 ">
//         {/* Hero Section */}
//         <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row gap-12 items-center">
//               {/* Profile Image */}
//               <div className="flex-shrink-0">
//                 <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full overflow-hidden shadow-lg mx-auto">
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
//                     {/* <User className="w-20 h-20" /> */}
//                     <Image src={sajidSirImg} width={"0"} height={"0"} className="w-full h-full" />
//                   </div>
//                 </div>
//               </div>

//               {/* Profile Info */}
//               <div className="flex-grow text-center md:text-left">
//                 <h1 className="text-4xl font-bold text-gray-900 mb-2">
//                   {person.name}
//                 </h1>
//                 <p className="text-xl text-blue-600 mb-6">{person.title}</p>
//                 <p className="text-lg text-gray-600 mb-8 max-w-2xl">
//                   {person.bio}
//                 </p>

//                   <div className="flex ">
//                     {/* <Image src={companyLogo1} width={"0"} height={"0"} className="w-full" alt="Company Logo" /> */}
//                     {companyLogos.map((logo, index) => (
//                       <div key={index} className="w-32 ">
//                         <Image src={logo} width={"0"} height={"0"} className="w-full" alt={`Company Logo ${index + 1}`} />
//                       </div>
//                     ))}
//                   </div>

//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Main Content */}
//         <section className="py-16 bg-white">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid md:grid-cols-3 gap-12">
//               {/* Left Column - Contact Information */}
//               <div className="md:col-span-1">
//                 <div className="bg-gray-50 rounded-2xl p-6 shadow-sm sticky top-24">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     Contact Information
//                   </h2>

//                   <div className="space-y-4">
//                     <div className="flex items-center">
//                       <Mail className="w-5 h-5 text-blue-600 mr-3" />
//                       <a
//                         href={`mailto:${person.email}`}
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         {person.email}
//                       </a>
//                     </div>

//                     <div className="flex items-center">
//                       <Phone className="w-5 h-5 text-blue-600 mr-3" />
//                       <a
//                         href={`tel:${person.phone}`}
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         {person.phone}
//                       </a>
//                     </div>

//                     <div className="flex items-center">
//                       <MapPin className="w-5 h-5 text-blue-600 mr-3" />
//                       <span className="text-gray-700">{person.location}</span>
//                     </div>

//                     <div className="flex items-center">
//                       <Globe className="w-5 h-5 text-blue-600 mr-3" />
//                       <a
//                         href={`https://${person.website}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         {person.website}
//                       </a>
//                     </div>

//                     <div className="flex items-center">
//                       <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
//                       <a
//                         href={`https://${person.linkedin}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         {person.linkedin}
//                       </a>
//                     </div>

//                     {/* <div className="flex items-center">
//                       <Twitter className="w-5 h-5 text-blue-600 mr-3" />
//                       <a
//                         href={`https://twitter.com/${person.twitter.replace(
//                           "@",
//                           ""
//                         )}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         {person.twitter}
//                       </a>
//                     </div> */}
//                   </div>

//                   <div className="mt-8 pt-6 border-t border-gray-200">
//                     <div className="flex items-center text-gray-600">
//                       <Calendar className="w-5 h-5 mr-3" />
//                       <span>Instructor since {person.joined}</span>
//                     </div>
//                   </div>

//                   <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
//                     Send Message
//                   </button>
//                 </div>
//               </div>

//               {/* Right Column - Details */}
//               <div className="md:col-span-2">
//                 {/* Skills Section */}
//                 <div className="mb-12">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     Areas of Expertise
//                   </h2>

//                   <div className="space-y-4">
//                     {skills.map((skill, index) => (
//                       <div key={index}>
//                         <div className="flex justify-between mb-1">
//                           <span className="font-medium text-gray-700">
//                             {skill.name}
//                           </span>
//                           <span className="text-sm text-gray-500">
//                             {skill.proficiency}%
//                           </span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2.5">
//                           <div
//                             className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
//                             style={{ width: `${skill.proficiency}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Courses Section */}
//                 <div className="mb-12">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     Featured Courses
//                   </h2>

//                   <div className="grid gap-4">
//                     {courses.map((course, index) => (
//                       <div
//                         key={index}
//                         className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow"
//                       >
//                         <h3 className="font-semibold text-lg text-gray-900 mb-2">
//                           {course.title}
//                         </h3>
//                         <div className="flex justify-between text-sm text-gray-600">
//                           <span>
//                             {course.students.toLocaleString()} students
//                           </span>
//                           <span className="flex items-center">
//                             <Award className="w-4 h-4 text-yellow-500 mr-1" />
//                             {course.rating}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <button className="flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium">
//                     View all courses
//                     <ArrowRight className="w-5 h-5 ml-2" />
//                   </button>
//                 </div>

//                 {/* Bio Section */}
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     Detailed Biography
//                   </h2>

//                   <div className="prose prose-lg text-gray-700">
//                     <p className="mb-4">
//                       Sajid Mansoor is a seasoned analytics consultant and
//                       educator with over two decades of experience in data
//                       analytics, BI, ETL, machine learning, and system
//                       automation. As the Founder and Head of Data Analytics at
//                       Paak Analytics Consultancy, based in Karachi and
//                       established in 2021, he leads the delivery of analytics
//                       services and hands-on training programs.
//                     </p>

//                     <p className="mb-4">
//                       With a focus on real-world application, Sajid has trained
//                       professionals across sectors ranging from banking to
//                       supply chain and tech-driven organizations. His
//                       specialties span Azure and cloud data warehousing,
//                       dashboards, automation using MS Office tools, Python, R,
//                       Metabase, and BI technologies like Power BI, SSMS, SSRS,
//                       SSAS, and SSIS.
//                     </p>

//                     <p className="mb-4">
//                       Sajid’s teaching philosophy centers on architecture-first
//                       learning, blending strategic design with practical
//                       execution:
//                       <ul className="list-disc pl-5">
//                         <li>
//                           He empowers learners to break free from tool-level
//                           thinking—teaching the architecture behind scalable BI
//                           systems and semantic modelling layers.
//                         </li>
//                         <li>
//                           Through project-based, real-world ETL pipeline design
//                           using SQL, Excel, Python, and SSIS, he brings business
//                           logic to life.
//                         </li>
//                         <li>
//                           He transforms static Excel reports into dynamic,
//                           storytelling dashboards that decision-makers can trust
//                           and understand.
//                         </li>
//                         <li>
//                           Sajid also bridges the gap between advanced Excel
//                           users and DAX in Power BI, using side-by-side
//                           comparisons and clarity-first teaching.
//                         </li>
//                         <li>
//                           His leadership in mock interview prep and project
//                           portfolio building ensures analytics professionals can
//                           communicate their insight and their value with
//                           confidence.
//                         </li>
//                         <li>
//                           Further, Sajid demystifies machine learning and neural
//                           networks, explaining how AI models learn and adjust,
//                           not just how to run them.
//                         </li>
//                       </ul>
//                     </p>

//                     <p>
//                       When he's not consulting or teaching, Sajid enjoys
//                       exploring emerging tech trends, reading about business
//                       strategy, and mentoring young professionals to excel in
//                       the analytics field.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Start Learning with Sajid Mansoor
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               Join thousands of students who have transformed their careers
//               through Sarah's engaging and comprehensive courses.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
//                 Browse Courses
//               </button>
//               <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white">
//                 Schedule Consultation
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;

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
    joined: "instructor since 2000",
  };

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
                    Center mode={true}
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
        </section>

        {/* Rest of the component remains exactly the same */}
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Left Column - Contact Information */}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Areas of Expertise
                  </h2>

                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {skill.proficiency}%
                          </span>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Featured Courses
                  </h2>

                  <div className="grid gap-4">
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>
                            {course.students.toLocaleString()} students
                          </span>
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
                      execution:
                      <ul className="list-disc pl-5">
                        <li>
                          He empowers learners to break free from tool-level
                          thinking—teaching the architecture behind scalable BI
                          systems and semantic modelling layers.
                        </li>
                        <li>
                          Through project-based, real-world ETL pipeline design
                          using SQL, Excel, Python, and SSIS, he brings business
                          logic to life.
                        </li>
                        <li>
                          He transforms static Excel reports into dynamic,
                          storytelling dashboards that decision-makers can trust
                          and understand.
                        </li>
                        <li>
                          Sajid also bridges the gap between advanced Excel
                          users and DAX in Power BI, using side-by-side
                          comparisons and clarity-first teaching.
                        </li>
                        <li>
                          His leadership in mock interview prep and project
                          portfolio building ensures analytics professionals can
                          communicate their insight and their value with
                          confidence.
                        </li>
                        <li>
                          Further, Sajid demystifies machine learning and neural
                          networks, explaining how AI models learn and adjust,
                          not just how to run them.
                        </li>
                      </ul>
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Start Learning with Sajid Mansoor
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers
              through Sarah's engaging and comprehensive courses.
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
