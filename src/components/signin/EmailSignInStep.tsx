import React from "react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { useNavigate } from "react-router-dom";

interface EmailSignInStepProps {
  email: string;
  onEmailChange: (value: string) => void;
  onNext: () => void;
}

const EmailSignInStep: React.FC<EmailSignInStepProps> = ({
  email,
  onEmailChange,
  onNext,
}) => {
  const navigate = useNavigate();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-gray-600">Use your email to continue</p>
      </div>

      <FloatingLabelInput
        type="email"
        label="Email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300"
      />

      <div className="flex justify-between items-center pt-4">
        <Button
          variant="outline"
          onClick={handleSignUp}
          className="w-32"
        >
          Sign up
        </Button>
        <Button
          onClick={onNext}
          disabled={!isValidEmail}
          className="w-32 bg-primary hover:bg-primary-hover text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default EmailSignInStep;