
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Bell, HelpCircle, Grid, User, LogOut } from "lucide-react";
import { RootState } from '../store/store';
import { useIsMobile } from "../hooks/use-mobile";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  const UserButton = () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <User className="w-5 h-5 text-gray-600" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-500 px-2">
            Signed in as<br/>
            <span className="font-medium text-gray-900">{user?.email}</span>
          </p>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-4 sm:py-0">
            {/* Logo */}
            <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
              <img
                src="/lovable-uploads/829929e4-42ea-49c3-a8cc-fab81373f0ad.png"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="flex sm:hidden items-center space-x-3">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
                <UserButton />
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="w-full sm:w-auto sm:flex-1 px-0 sm:px-8 mb-4 sm:mb-0">
              <div className="flex flex-nowrap overflow-x-auto sm:overflow-visible gap-2 sm:gap-4 bg-gray-100 p-1 rounded-lg hide-scrollbar">
                <button className="flex-none px-4 py-2 rounded-md bg-blue-500 text-white text-sm whitespace-nowrap transition-colors duration-200">
                  Home
                </button>
                <button className="flex-none px-4 py-2 rounded-md hover:bg-gray-200 text-sm whitespace-nowrap transition-colors duration-200">
                  Profile Info
                </button>
                <button className="flex-none px-4 py-2 rounded-md hover:bg-gray-200 text-sm whitespace-nowrap transition-colors duration-200">
                  Security
                </button>
                <button className="flex-none px-4 py-2 rounded-md hover:bg-gray-200 text-sm whitespace-nowrap transition-colors duration-200">
                  Privacy
                </button>
              </div>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <HelpCircle className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Grid className="w-5 h-5 text-gray-600" />
              </button>
              <UserButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-12">
        {/* Welcome Section */}
        <div className="text-left sm:text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome back, {user?.firstName} {user?.lastName}!
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Manage your account settings and preferences to personalize your experience.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Profile Info Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold ml-3">Profile Information</h2>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                {user?.email}
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Phone:</span>
                {user?.phoneNumber}
              </p>
            </div>
          </div>

          {/* Privacy Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <HelpCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-lg font-semibold ml-3">Data and Privacy</h2>
            </div>
            <p className="text-sm text-gray-600">
              Control your data sharing preferences and privacy settings
            </p>
          </div>

          {/* Security Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Bell className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-lg font-semibold ml-3">Security Settings</h2>
            </div>
            <p className="text-sm text-gray-600">
              Manage your password and security preferences
            </p>
          </div>

          {/* Preferences Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Grid className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-lg font-semibold ml-3">Account Preferences</h2>
            </div>
            <p className="text-sm text-gray-600">
              Customize your account settings and notifications
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Language
            </button>
            <div className="flex space-x-6">
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Help
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Terms
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Privacy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
