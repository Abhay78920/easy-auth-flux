import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailSignInStep from "@/components/signin/EmailSignInStep";
import PasswordSignInStep from "@/components/signin/PasswordSignInStep";
import { LoadingLine } from "@/components/ui/loading-line";
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleNext = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  const handleSignIn = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      toast({
        title: "Sign In Successful",
        description: "Welcome back!",
      });
      setIsLoading(false);
      // Here you would typically handle the authentication logic
      console.log("Sign in data:", formData);
    }, 1000);
  };

  const handleBackToEmail = () => {
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <EmailSignInStep
            email={formData.email}
            onEmailChange={(value) =>
              setFormData({ ...formData, email: value })
            }
            onNext={handleNext}
            onSignUp={() => navigate("/")}
          />
        );
      case 2:
        return (
          <PasswordSignInStep
            email={formData.email}
            password={formData.password}
            onPasswordChange={(value) =>
              setFormData({ ...formData, password: value })
            }
            onSignIn={handleSignIn}
            onBackToEmail={handleBackToEmail}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <LoadingLine isLoading={isLoading} />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <img
            src="/lovable-uploads/829929e4-42ea-49c3-a8cc-fab81373f0ad.png"
            alt="Logo"
            className="w-12 h-12 mb-6"
          />
          {renderStep()}
        </div>
      </main>
      
      <footer className="p-4 bg-white border-t">
        <div className="max-w-7xl mx-auto flex justify-between text-sm text-gray-600">
          <button className="hover:underline">Language</button>
          <div className="space-x-4">
            <button className="hover:underline">Help</button>
            <button className="hover:underline">Terms</button>
            <button className="hover:underline">Privacy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;