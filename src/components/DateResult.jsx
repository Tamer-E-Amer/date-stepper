function DateResult({ days }) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-orange-400 px-4 py-3 text-center text-lg font-semibold text-orange-100 sm:flex-row">
      {days === 0 ? (
        <span className="">Today is</span>
      ) : (
        <span className="">
          {Math.abs(days)} days{" "}
          {days < 0 ? (
            <span className="font-bold text-red-600">before</span>
          ) : (
            <span className="font-bold text-red-600">after</span>
          )}{" "}
          today is
        </span>
      )}
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default DateResult;
