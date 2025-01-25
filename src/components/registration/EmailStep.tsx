import React from "react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";

interface EmailStepProps {
  email: string;
  onEmailChange: (value: string) => void;
  onNext: () => void;
}

const EmailStep: React.FC<EmailStepProps> = ({
  email,
  onEmailChange,
  onNext,
}) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Enter Your Email</h1>
        <p className="text-gray-600">Provide your email address to continue.</p>
      </div>

      <FloatingLabelInput
        type="email"
        label="Email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300"
      />

      <Button
        onClick={onNext}
        disabled={!isValidEmail}
        className="w-32 bg-primary hover:bg-primary-hover text-white float-right"
      >
        Next
      </Button>
    </div>
  );
};

export default EmailStep;