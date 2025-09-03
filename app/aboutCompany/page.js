"use client"
import React from 'react';
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
  Calendar
} from 'lucide-react';

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
    mission: "To empower businesses with data-driven insights that drive growth and innovation",
    vision: "To be the leading analytics consultancy in the region, transforming how organizations leverage their data"
  };

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security",
      description: "Implement robust security measures to protect your sensitive business information"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Turn complex data into clear visualizations and dashboards for better decision-making"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Training & Workshops",
      description: "Upskill your team with our comprehensive data analytics training programs"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver to our clients"
    },
    {
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to stay ahead"
    },
    {
      title: "Integrity",
      description: "We maintain honesty and transparency in all our business dealings"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique challenges"
    }
  ];

  const team = [
    {
      name: "Founding Team",
      description: "Industry veterans with 15+ years of experience in data analytics and business intelligence"
    },
    {
      name: "Data Scientists",
      description: "Experts in machine learning, statistical analysis, and predictive modeling"
    },
    {
      name: "Business Analysts",
      description: "Skilled at translating business problems into data solutions"
    },
    {
      name: "Support Staff",
      description: "Dedicated professionals ensuring seamless project delivery and client satisfaction"
    }
  ];

  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "GlobalBank", logo: "GB" },
    { name: "HealthPlus", logo: "HP" },
    { name: "EduFuture", logo: "EF" },
    { name: "RetailHub", logo: "RH" },
    { name: "Logistica", logo: "LG" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Paak Analytics Consultancy</h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Leading the data revolution with cutting-edge analytics solutions that drive business growth and innovation across industries.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{companyInfo.founded}</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{companyInfo.employees}</div>
                <div className="text-gray-600">Employees</div>
              </div>
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{companyInfo.clients}</div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{companyInfo.projects}</div>
                <div className="text-gray-600">Projects</div>
              </div>
            </div>
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
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700">{companyInfo.mission}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Paak Analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {value.title.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse experts united by a passion for data and analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((teamMember, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {teamMember.name.split(' ').map(word => word[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{teamMember.name}</h3>
                <p className="text-gray-600 text-sm">{teamMember.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders across various sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business with data? Contact us today.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">{companyInfo.location}</p>
              </div>
              
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">{companyInfo.phone}</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
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
  );
};

export default AboutCompany;