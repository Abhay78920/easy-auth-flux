import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/authSlice';
import NameStep from "@/components/registration/NameStep";
import EmailStep from "@/components/registration/EmailStep";
import PasswordStep from "@/components/registration/PasswordStep";
import PhoneStep from "@/components/registration/PhoneStep";
import OtpStep from "@/components/registration/OtpStep";
import PrivacyStep from "@/components/registration/PrivacyStep";
import { LoadingLine } from "@/components/ui/loading-line";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    otp: "",
  });

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  const handleComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      }));
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <NameStep
            firstName={formData.firstName}
            lastName={formData.lastName}
            onFirstNameChange={(value) =>
              setFormData({ ...formData, firstName: value })
            }
            onLastNameChange={(value) =>
              setFormData({ ...formData, lastName: value })
            }
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <EmailStep
            email={formData.email}
            onEmailChange={(value) =>
              setFormData({ ...formData, email: value })
            }
            onNext={handleNext}
          />
        );
      case 3:
        return (
          <PasswordStep
            password={formData.password}
            confirmPassword={formData.confirmPassword}
            onPasswordChange={(value) =>
              setFormData({ ...formData, password: value })
            }
            onConfirmPasswordChange={(value) =>
              setFormData({ ...formData, confirmPassword: value })
            }
            onNext={handleNext}
          />
        );
      case 4:
        return (
          <PhoneStep
            phoneNumber={formData.phoneNumber}
            onPhoneNumberChange={(value) =>
              setFormData({ ...formData, phoneNumber: value })
            }
            onNext={handleNext}
          />
        );
      case 5:
        return (
          <OtpStep
            otp={formData.otp}
            onOtpChange={(value) => setFormData({ ...formData, otp: value })}
            onNext={handleNext}
            onResend={() => {
              // Handle OTP resend logic here
            }}
          />
        );
      case 6:
        return (
          <PrivacyStep
            onComplete={handleComplete}
            onCancel={() => setStep(1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {isLoading && (
        <div className="h-1 bg-gray-200 w-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-loading-line"></div>
        </div>
      )}
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

export default Index;
