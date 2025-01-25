import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PhoneStepProps {
  phoneNumber: string;
  onPhoneNumberChange: (value: string) => void;
  onNext: () => void;
}

const PhoneStep: React.FC<PhoneStepProps> = ({
  phoneNumber,
  onPhoneNumberChange,
  onNext,
}) => {
  const [countryCode, setCountryCode] = useState("+1");

  const handlePhoneChange = (value: string) => {
    // Remove any non-digit characters except for the plus sign
    const cleaned = value.replace(/[^\d+]/g, "");
    onPhoneNumberChange(cleaned);
  };

  const isValidPhone = phoneNumber.length >= 10;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Confirm you're not a robot</h1>
        <p className="text-gray-600">Receive a verification code on your phone.</p>
      </div>

      <div className="flex gap-2">
        <Select
          value={countryCode}
          onValueChange={setCountryCode}
        >
          <SelectTrigger className="w-24">
            <SelectValue placeholder="+1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="+1">+1</SelectItem>
            <SelectItem value="+44">+44</SelectItem>
            <SelectItem value="+91">+91</SelectItem>
          </SelectContent>
        </Select>
        
        <Input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => handlePhoneChange(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-300"
        />
      </div>

      <p className="text-sm text-gray-500">
        Standard message rates may apply
      </p>

      <Button
        onClick={onNext}
        disabled={!isValidPhone}
        className="w-32 bg-primary hover:bg-primary-hover text-white float-right"
      >
        Get OTP
      </Button>
    </div>
  );
};

export default PhoneStep;