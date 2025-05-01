const StepperCounter = ({ step, stepIncrement, stepDecrement }) => {
  return (
    <>
      <div className="flex w-full grow items-center justify-center gap-4 bg-orange-200 p-4 text-slate-200">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-950 text-3xl transition-colors duration-300 hover:bg-violet-800 focus:outline-none"
          onClick={stepDecrement}
        >
          -
        </button>

        <span className="inline-block w-32 border border-slate-300 bg-slate-600 px-4 py-2 text-center">
          {`Steps: ${step}`}
        </span>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-950 text-3xl transition-colors duration-300 hover:bg-violet-800 focus:outline-none"
          onClick={stepIncrement}
        >
          +
        </button>
      </div>
    </>
  );
};
export default StepperCounter;
