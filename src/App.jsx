import { useState } from "react";
import StepperCounter from "./components/Stepper";
import DaysCounter from "./components/DaysCounter";
import DateResult from "./components/DateResult";
function App() {
  const [days, setDays] = useState(0);
  const [step, setStep] = useState(1);

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
      <DateResult days={days} />
    </div>
  );
}

export default App;
