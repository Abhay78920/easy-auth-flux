import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PasswordStepProps {
  password: string;
  confirmPassword: string;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onNext: () => void;
}

const PasswordStep: React.FC<PasswordStepProps> = ({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  onNext,
}) => {
  const [error, setError] = useState("");

  const validatePassword = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      return false;
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      setError("Password must contain at least one special character");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleNext = () => {
    if (validatePassword()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Create a strong password</h1>
        <p className="text-gray-600">
          Combine letters, numbers, and symbols to ensure maximum security.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300"
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => onConfirmPasswordChange(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300"
        />
        {error && <p className="text-error text-sm">{error}</p>}
      </div>

      <Button
        onClick={handleNext}
        className="w-32 bg-primary hover:bg-primary-hover text-white float-right"
      >
        Next
      </Button>
    </div>
  );
};

export default PasswordStep;