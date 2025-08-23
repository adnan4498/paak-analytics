"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Search, Play, BookOpen, Users, Award, Settings, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">PAC</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Products Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isProductsOpen && (
                  <div
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-4"
                  >
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">Online Courses</div>
                          <div className="text-sm text-gray-500">Create and sell courses</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Users className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium text-gray-900">Communities</div>
                          <div className="text-sm text-gray-500">Build learning communities</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Award className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-medium text-gray-900">Memberships</div>
                          <div className="text-sm text-gray-500">Recurring revenue model</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isSolutionsOpen && (
                  <div
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-4"
                  >
                    <div className="px-4">
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-gray-900">For Creators</div>
                        <div className="text-sm text-gray-500">Individual course creators</div>
                      </a>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-gray-900">For Businesses</div>
                        <div className="text-sm text-gray-500">Enterprise training</div>
                      </a>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-gray-900">For Coaches</div>
                        <div className="text-sm text-gray-500">Coaching programs</div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isResourcesOpen && (
                  <div
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-4"
                  >
                    <div className="px-4">
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-900">
                        Blog
                      </a>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-900">
                        Help Center
                      </a>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-900">
                        Webinars
                      </a>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-900">
                        Case Studies
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="hidden lg:block p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Auth buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                Log in
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
            </div>

            {/* User menu (when logged in) */}
            <div className="hidden lg:block relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <BookOpen className="w-4 h-4" />
                    <span>My Courses</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </a>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <a href="#" className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <LogOut className="w-4 h-4" />
                      <span>Sign out</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <div className="space-y-4 py-4">
                <div>
                  <div className="text-sm font-semibold text-gray-900 px-3 py-2">Products</div>
                  <div className="ml-4 space-y-2">
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                      <BookOpen className="w-4 h-4" />
                      <span>Online Courses</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                      <Users className="w-4 h-4" />
                      <span>Communities</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
                      <Award className="w-4 h-4" />
                      <span>Memberships</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-semibold text-gray-900 px-3 py-2">Solutions</div>
                  <div className="ml-4 space-y-2">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">For Creators</a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">For Businesses</a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">For Coaches</a>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-900 px-3 py-2">Resources</div>
                  <div className="ml-4 space-y-2">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Blog</a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Help Center</a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Webinars</a>
                  </div>
                </div>

                <a href="#" className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-md">Pricing</a>
              </div>
              
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                  Log in
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;