import React from "react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { User } from "lucide-react";

interface PasswordSignInStepProps {
  email: string;
  password: string;
  onPasswordChange: (value: string) => void;
  onSignIn: () => void;
  onBackToEmail: () => void;
}

const PasswordSignInStep: React.FC<PasswordSignInStepProps> = ({
  email,
  password,
  onPasswordChange,
  onSignIn,
  onBackToEmail,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Enter your password</h1>
        <p className="text-gray-600">to continue to your account</p>
      </div>

      <button
        onClick={onBackToEmail}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <User className="w-5 h-5" />
        <span>{email}</span>
      </button>

      <FloatingLabelInput
        type="password"
        label="Password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300"
      />

      <div className="flex justify-between items-center pt-4">
        <Button
          variant="ghost"
          onClick={() => {}} // TODO: Implement forgot password
          className="text-primary hover:text-primary-hover"
        >
          Forgot password?
        </Button>
        <Button
          onClick={onSignIn}
          disabled={!password}
          className="w-32 bg-primary hover:bg-primary-hover text-white"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default PasswordSignInStep;