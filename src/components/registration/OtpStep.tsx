import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface OtpStepProps {
  otp: string;
  onOtpChange: (value: string) => void;
  onNext: () => void;
  onResend: () => void;
}

const OtpStep: React.FC<OtpStepProps> = ({
  otp,
  onOtpChange,
  onNext,
  onResend,
}) => {
  const [allowRecovery, setAllowRecovery] = useState(false);

  const handleOtpChange = (value: string) => {
    // Only allow numbers and limit to 6 digits
    const cleaned = value.replace(/\D/g, "").slice(0, 6);
    onOtpChange(cleaned);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Verify Your Identity</h1>
        <p className="text-gray-600">
          Submit the 6-digit code sent to your phone to complete the verification.
        </p>
      </div>

      <Input
        type="text"
        placeholder="Enter the OTP"
        value={otp}
        onChange={(e) => handleOtpChange(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300"
      />

      <div className="flex items-center space-x-2">
        <Checkbox
          id="recovery"
          checked={allowRecovery}
          onCheckedChange={(checked) => setAllowRecovery(checked as boolean)}
        />
        <label
          htmlFor="recovery"
          className="text-sm text-gray-600"
        >
          Use my phone for account recovery
        </label>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={onResend}
          variant="outline"
          className="text-primary"
        >
          Get new code
        </Button>
        <Button
          onClick={onNext}
          disabled={otp.length !== 6}
          className="w-32 bg-primary hover:bg-primary-hover text-white"
        >
          Verify
        </Button>
      </div>
    </div>
  );
};

export default OtpStep;