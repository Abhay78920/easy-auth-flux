import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NameStepProps {
  firstName: string;
  lastName: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onNext: () => void;
}

const NameStep: React.FC<NameStepProps> = ({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  onNext,
}) => {
  const isValid = firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Create your Praanm account</h1>
        <p className="text-gray-600">Provide Your Full Name</p>
      </div>
      
      <div className="space-y-4">
        <Input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => onFirstNameChange(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300"
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => onLastNameChange(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300"
        />
      </div>

      <Button
        onClick={onNext}
        disabled={!isValid}
        className="w-32 bg-primary hover:bg-primary-hover text-white float-right"
      >
        Next
      </Button>
    </div>
  );
};

export default NameStep;