import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface PrivacyStepProps {
  onComplete: () => void;
  onCancel: () => void;
}

const PrivacyStep: React.FC<PrivacyStepProps> = ({
  onComplete,
  onCancel,
}) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Privacy and Terms</h1>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          To create a Praanm Account, you need to agree to the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        
        <p>
          When you set up your account, we collect information such as your name,
          email address, and phone number. We also store data from your
          interactions with Praanm services. This information helps us deliver
          personalized experience, improve our services, and enhance security
          against fraud.
        </p>

        <p>
          You have control over your data and can adjust your privacy settings at
          any time. You can manage how we collect and use your information. For
          further customization, visit your Praanm Account to review your settings.
        </p>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={(checked) => setAccepted(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm"
          >
            Allow tracking of my usage patterns to improve service.
          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={onCancel}
          variant="outline"
          className="w-32"
        >
          Cancel
        </Button>
        <Button
          onClick={onComplete}
          disabled={!accepted}
          className="w-32 bg-primary hover:bg-primary-hover text-white"
        >
          Agree
        </Button>
      </div>
    </div>
  );
};

export default PrivacyStep;