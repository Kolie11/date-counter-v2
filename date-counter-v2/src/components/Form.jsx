import React from "react";

function Form() {
  const [count, setCount] = React.useState(0);
  // Function to handle changes in the input range

  const [stepInputRange, setStepInputRange] = React.useState(1);
  // State to manage the input text value
  // Initialize with a default value of 1

  const currentDate = new Date()
  // Get the current date and time
  //  const currentDate = new Date();
  //currentDate.setDate(currentDate.getDate() + count);
 currentDate.setDate(currentDate.getDate() + count);

  function handleSubmit(event) {
    event.preventDefault();
  }
  // Function to handle form submission
  // Prevent default behavior of form submission

  function handleIncrement() {
    // Increment the count by the value of stepInputRange
    // Use parseInt to convert the string value to an integer
    // Use the functional form of setCount to ensure we get the latest state
    // This is important to avoid stale state issues
    // This is especially useful when the state update depends on the previous state
    // This ensures that the increment is always based on the latest count value
    setCount((prevCount) => prevCount + parseInt(stepInputRange));
  }

  function handleDecrement() {
    setCount((prevCount) => {
      // Decrement the count by the value of stepInputRange
      // Use parseInt to convert the string value to an integer
      // Use the functional form of setCount to ensure we get the latest state
      // This is important to avoid stale state issues
      return prevCount - parseInt(stepInputRange);
    });
  }

  function handleReset() {
    // Reset the count to 0
    setCount(0);
    // Reset the stepInputRange to 0
    setStepInputRange(0);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
        <h1 className="text-3xl font-bold text-white mb-6">Date Counter v2</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 h-70"
      >
        <div className="flex justify-center gap-2 bg-zinc-200 p-2 rounded mb-4 shadow-md">
          <input
            value={stepInputRange}
            min={0}
            max={10}
            type="range"
            onChange={(e) => setStepInputRange(+e.target.value)}
          />{" "}
          <span className="bg-slate-500 p-2 text-white font-bold rounded-e-xl">
            {stepInputRange}
          </span>
        </div>

        <div className="flex justify-center items-center gap-2 bg-zinc-200 p-2 rounded mb-4 shadow-md">
          <button
            onClick={handleDecrement}
            className="bg-red-600 p-2 text-xl font-bold text-white rounded-2xl w-8 h-8 leading-1 cursor-pointer"
          >
            -
          </button>
          <input
            value={count}
            onChange={(e) => setCount(+e.target.value)}
            type="text"
            className="outline-0 bg-zinc-100 p-2 rounded-md shadow-lg focus:border-slate-400 focus:border-1"
          />
          <button
            onClick={handleIncrement}
            className="bg-green-600 p-2 text-xl font-bold text-white rounded-2xl w-8 h-8 leading-1 cursor-pointer"
          >
            +
          </button>
        </div>

        <p className="text-center text-gray-700 mb-4">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days from today was `}
            {currentDate.toDateString()}
          </span>
        </p>
        <button 
        onClick={handleReset}
          type="reset"
          className="bg-red-600 text-xl p-1 rounded-lg shadow-lg text-white cursor-pointer hover:bg-red-400 hover:shadow-xl transition duration-300 ease-in-out w-full h-10 font-bold"
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
