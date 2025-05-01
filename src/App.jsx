import { useState } from "react";
import StepperCounter from "./components/Stepper";
import DaysCounter from "./components/DaysCounter";
function App() {
  const [days, setDays] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + days);

  return (
    <div className="container mx-auto h-screen max-w-[768px] bg-violet-950 px-4 py-8">
      {/* Buttons container */}
      <div className="flex flex-col items-center justify-between gap-4 bg-orange-300 sm:flex-row sm:gap-0 sm:divide-x-2">
        <StepperCounter
          step={step}
          stepIncrement={() => {
            setStep((prev) => prev + 1);
          }}
          stepDecrement={() => {
            if (step > 1) setStep((prev) => prev - 1);
          }}
        />

        <DaysCounter
          days={days}
          daysIncrement={() => {
            setDays((prev) => prev + step);
          }}
          daysDecrement={() => {
            setDays((prev) => prev - step);
          }}
        />
      </div>
      {/* Date result */}
      <div className="flex items-center justify-center gap-2 bg-orange-400 px-4 py-3 text-center text-lg font-semibold text-orange-100">
        {days === 0 ? (
          <span className="inline-block w-full text-right">Today is</span>
        ) : (
          <div className="inline-block w-full text-right">
            {Math.abs(days)} days{" "}
            {days < 0 ? (
              <span className="font-bold text-red-600">before</span>
            ) : (
              <span className="font-bold text-red-600">after</span>
            )}{" "}
            today is
          </div>
        )}
        <span className="inline-block w-full text-left">
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
}

export default App;
