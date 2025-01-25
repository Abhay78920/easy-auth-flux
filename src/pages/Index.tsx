import React, { useState } from "react";
import NameStep from "@/components/registration/NameStep";
import EmailStep from "@/components/registration/EmailStep";
import PasswordStep from "@/components/registration/PasswordStep";
import PhoneStep from "@/components/registration/PhoneStep";
import OtpStep from "@/components/registration/OtpStep";
import PrivacyStep from "@/components/registration/PrivacyStep";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
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
    setStep((prev) => prev + 1);
  };

  const handleComplete = () => {
    toast({
      title: "Registration Complete",
      description: "Your account has been created successfully!",
    });
    // Here you would typically submit the form data to your backend
    console.log("Form submitted:", formData);
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
              toast({
                title: "OTP Resent",
                description: "A new verification code has been sent to your phone.",
              });
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