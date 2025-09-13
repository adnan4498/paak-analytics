"use client";
import React from "react";
import {
  Target,
  Eye,
  Users,
  Globe,
  Award,
  BarChart3,
  Shield,
  Zap,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Building,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Smartphone,
  // Sensor,
  GraduationCap,
  Building2,
  ShoppingCart,
  Factory,
  Truck,
  Package,
  Pill,
  Heart,
} from "lucide-react";
import Navbar from "../Navbar";

const AboutCompany = () => {
  const companyInfo = {
    name: "Paak Analytics Consultancy",
    founded: "2015",
    employees: "50+",
    clients: "200+",
    projects: "500+",
    location: "Lahore, Pakistan",
    email: "info@paakanalytics.com",
    phone: "+92 42 123 4567",
    mission:
      "To make high-quality, practical, and affordable training accessible to professionals and students worldwide, enabling them to excel in today’s data-driven world.",
    vision:
      "To become a leading global provider of analytics and business intelligence training, recognized for innovation, excellence, and impact.",
  };

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics Training",
      description:
        "Master data analysis techniques and tools to transform raw data into meaningful insights that drive smarter decisions.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Business Intelligence Solutions",
      description:
        "Learn how to design dashboards, reports, and visualization systems that make complex data simple, clear, and actionable.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Programming & Tools Training",
      description:
        "Develop hands-on expertise in essential programming languages and analytics tools to enhance productivity and technical skills.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Shariah-Compliant Investment Training",
      description:
        "Gain specialized knowledge in investment strategies, portfolio analysis, and decision-making aligned with Shariah principles.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Islamic Finance & Investment Analytics",
      description:
        "Learn how to analyze, manage, and evaluate financial instruments and investments within the framework of Shariah principles.",
    },
  ];

  const values = [
    {
      title: "Professionalism",
      description:
        "We uphold the highest standards of conduct, ensuring reliable and ethical service in every engagement.",
    },
    {
      title: "Accountability",
      description:
        "We take ownership of our work, delivering on our promises with responsibility and transparency.",
    },
    {
      title: "Commitment",
      description:
        "We are dedicated to empowering individuals and organizations through impactful training and consultancy.",
    },
  ];

  const team = [
    {
      name: "Founder & Lead Consultant",
      description:
        "As the founder of Paak Analytics Consultancy, I bring [X years] of hands-on experience in data analytics, business intelligence, and training. I have worked with professionals and organizations to design practical, results-driven learning programs.",
    },
    {
      name: "Collaborative Network",
      description:
        "To deliver the best solutions, I collaborate with industry experts, trainers, and subject specialists on a project-by-project basis. This ensures every client gets access to the right knowledge and expertise.",
    },
    {
      name: "Client-Centered Approach",
      description:
        "Rather than a large team, I provide personalized guidance and attention to every client, supported by a trusted network of professionals when needed.",
    },
  ];

  // const clients = [
  //   { name: "Technology & Communication", logo: "TC" },
  //   { name: "GlobalBank", logo: "GB" },
  //   { name: "HealthPlus", logo: "HP" },
  //   { name: "EduFuture", logo: "EF" },
  //   { name: "RetailHub", logo: "RH" },
  //   { name: "Logistica", logo: "LG" },
  // ];

  const clients = [
    {
      name: "Technology & Communication",
      icon: Smartphone,
      logo: "TC",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Smart Sensors & Monitoring",
      icon: Smartphone,
      logo: "SS",
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Education & Training",
      icon: GraduationCap,
      logo: "ET",
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Government & Public Sector",
      icon: Building2,
      logo: "GP",
      color: "from-indigo-500 to-blue-600",
    },
    {
      name: "Retail & E-Commerce",
      icon: ShoppingCart,
      logo: "RE",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Manufacturing & Production",
      icon: Factory,
      logo: "MP",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Logistics & Distribution",
      icon: Truck,
      logo: "LD",
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Courier Services",
      icon: Package,
      logo: "CS",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Pharmaceuticals",
      icon: Pill,
      logo: "PH",
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Non-Profit & NGO",
      icon: Heart,
      logo: "NG",
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        {/* <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Paak Analytics Consultancy
                </h1>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leading the data revolution with cutting-edge analytics
                solutions that drive business growth and innovation across
                industries.
              </p>
            </div>
          </div>
        </section> */}

        {/* Hero Section */}
        <section
          className="relative pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50"
          // style={{
          //   backgroundImage:
          //     "url('https://images.unsplash.com/photo-1676299083931-34e65e073cf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", // AI/Data related image
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/70"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Paak Analytics Consultancy
                </h1>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Leading the data revolution with cutting-edge analytics
                solutions that drive business growth and innovation across
                industries.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-700">{companyInfo.mission}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-700">{companyInfo.vision}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Practical training and consultancy designed to help you and your
                organization thrive in a data-driven world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Paak Analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {value.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Paak Analytics, the strength of our consultancy lies in
                dedicated leadership and specialized expertise brought in when
                needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((teamMember, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {teamMember.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {teamMember.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {teamMember.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Clients We’ve Served
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Paak Analytics Consultancy, we have worked with organizations
                across diverse sectors, delivering tailored training and
                analytics solutions to meet their unique needs.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <div key={index} className="">
                  <div>{client.name}</div>
                </div>
              ))}
            </div> */}

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clients.map((client, index) => {
                  const IconComponent = client.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="flex items-center p-5 space-x-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <IconComponent className="w-5 h-5 text-gray-600" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                            {client.name}
                          </h3>
                          {/* Optional subtitle */}
                          {/* <div className="flex items-center space-x-2 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <span className="text-sm text-gray-500">
                  Industry Partner
                </span>
              </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to transform your business with data? Contact us today.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600">{companyInfo.location}</p>
                </div>

                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">{companyInfo.phone}</p>
                </div>

                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">{companyInfo.email}</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutCompany;
