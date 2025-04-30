import React from 'react';

interface StepTabsProps {
  steps: string[];
  currentStep: number;
  onChange: (index: number) => void;
}

export const StepTabs: React.FC<StepTabsProps> = ({ steps, currentStep, onChange }) => {
  return (
    <div className="flex w-full bg-gray-400 rounded-full">
      {steps.map((step, index) => {
        const isActive = index <= currentStep;

        const isFirst = index === 0;
        const isLast = index === steps.length - 1;

        const roundedClass = isFirst
          ? 'rounded-l-full'
          : isLast
            ? 'rounded-r-full'
            : isActive
              ? ''
              : '';

        return (
          <button
            key={step}
            onClick={() => onChange(index)}
            className={`
                flex-1 px-4 py-2 text-sm font-semibold transition-colors duration-300
                ${isActive ? 'bg-blue-100 text-blue-900' : 'text-white bg-gray-400 hover:bg-gray-500'}
                ${roundedClass}
              `}
          >
            {step}
          </button>
        );
      })}
    </div>
  );
};
