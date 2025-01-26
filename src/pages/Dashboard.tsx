import React from "react";
import { useSelector } from 'react-redux';
import { Bell, HelpCircle, Grid, User } from "lucide-react";
import { RootState } from '../store/store';
import { useIsMobile } from "../hooks/use-mobile";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-4 sm:py-0">
            {/* Logo */}
            <img
              src="/lovable-uploads/829929e4-42ea-49c3-a8cc-fab81373f0ad.png"
              alt="Logo"
              className="w-10 h-10 mb-4 sm:mb-0"
            />

            {/* Navigation Tabs */}
            <div className="flex-1 w-full sm:w-auto px-0 sm:px-8 mb-4 sm:mb-0">
              <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-4 bg-gray-100 p-1 rounded-lg">
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-md bg-blue-500 text-white text-sm sm:text-base">
                  Home
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-md hover:bg-gray-200 text-sm sm:text-base">
                  Profile Info
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-md hover:bg-gray-200 text-sm sm:text-base">
                  Security
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-md hover:bg-gray-200 text-sm sm:text-base">
                  Privacy
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
                <Grid className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Welcome Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Welcome {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Take charge of your information, privacy, and security to unlock a
            seamless, powerful experience with Praanm.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Profile Info Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Profile Information</h2>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <p>Email: {user?.email}</p>
              <p>Phone: {user?.phoneNumber}</p>
            </div>
          </div>

          {/* Privacy Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Data and Privacy Settings
            </h2>
            <p className="text-sm sm:text-base text-gray-600">Manage your privacy preferences</p>
          </div>

          {/* Security Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Security Settings</h2>
            <p className="text-sm sm:text-base text-gray-600">Update your password and security options</p>
          </div>

          {/* Preferences Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Account Preferences</h2>
            <p className="text-sm sm:text-base text-gray-600">Customize your account settings</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 sm:mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <button className="text-sm sm:text-base text-gray-600 hover:underline">Language</button>
            <div className="flex space-x-4 sm:space-x-6">
              <button className="text-sm sm:text-base text-gray-600 hover:underline">Help</button>
              <button className="text-sm sm:text-base text-gray-600 hover:underline">Terms</button>
              <button className="text-sm sm:text-base text-gray-600 hover:underline">Privacy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;