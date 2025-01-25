import React from "react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";

interface PasswordSignInStepProps {
  password: string;
  onPasswordChange: (value: string) => void;
  onSignIn: () => void;
}

const PasswordSignInStep: React.FC<PasswordSignInStepProps> = ({
  password,
  onPasswordChange,
  onSignIn,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Enter your password</h1>
        <p className="text-gray-600">to continue to your account</p>
      </div>

      <FloatingLabelInput
        type="password"
        label="Password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300"
      />

      <Button
        onClick={onSignIn}
        disabled={!password}
        className="w-32 bg-primary hover:bg-primary-hover text-white float-right"
      >
        Sign in
      </Button>
    </div>
  );
};

export default PasswordSignInStep;