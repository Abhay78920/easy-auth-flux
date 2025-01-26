import React from "react";
import { useSelector } from 'react-redux';
import { Bell, HelpCircle, Grid, User } from "lucide-react";
import { RootState } from '../store/store';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <img
              src="/lovable-uploads/829929e4-42ea-49c3-a8cc-fab81373f0ad.png"
              alt="Logo"
              className="w-10 h-10"
            />

            {/* Navigation Tabs */}
            <div className="flex-1 px-8">
              <div className="flex space-x-4 bg-gray-100 p-1 rounded-lg">
                <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
                  Home
                </button>
                <button className="px-4 py-2 rounded-md hover:bg-gray-200">
                  Profile Info
                </button>
                <button className="px-4 py-2 rounded-md hover:bg-gray-200">
                  Security
                </button>
                <button className="px-4 py-2 rounded-md hover:bg-gray-200">
                  Privacy
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <HelpCircle className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Grid className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take charge of your information, privacy, and security to unlock a
            seamless, powerful experience with Praanm.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-2 text-gray-600">
              <p>Email: {user?.email}</p>
              <p>Phone: {user?.phoneNumber}</p>
            </div>
          </div>

          {/* Privacy Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4">
              Data and Privacy Settings
            </h2>
            <p className="text-gray-600">Manage your privacy preferences</p>
          </div>

          {/* Security Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
            <p className="text-gray-600">Update your password and security options</p>
          </div>

          {/* Preferences Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Account Preferences</h2>
            <p className="text-gray-600">Customize your account settings</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button className="text-gray-600 hover:underline">Language</button>
            <div className="space-x-6">
              <button className="text-gray-600 hover:underline">Help</button>
              <button className="text-gray-600 hover:underline">Terms</button>
              <button className="text-gray-600 hover:underline">Privacy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;