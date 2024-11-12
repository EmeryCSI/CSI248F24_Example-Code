import { useState, useCallback } from "react";

//A custom hook is just a JavaScript function that:
//1. Starts with use
//2. May call other hooks useState/Effect
//3. Returns any data and or functions that a component might need

// Why make a hook?
//1. Avoid duplicating code DRY (Dont repeat yourself)
//2. Keep components clean and organized
//3. Share state logic between components
//4. Seperate Concerns

//js function with default value
//This useCounter takes in a parameter that MIGHT be a function
export function useCounter(initialValue = 0) {
  //you can figure out if initialValue is a function or not
  let input;
  if (typeof initialValue === "function") {
    input = initialValue();
  } else {
    input = initialValue;
  }
  //state management with useState
  const [count, setCount] = useState(input);

  //functions that we want to share
  //useCallBack()
  //here incremement will be called anytime we ask for increment
  //if you wrap this in a useCallback it only gets called if the parameters have changed
  //useCallback Saves the respone and the input for a function
  //table of saved
  //f(0) = 1;
  //f(1) = 100;

  //so the next time f(0) it doesnt actually run the function it just returns you the 1
  //memoization - saves the input and response from a function and if the function is called
  //again with the same inputs it just returns the same response
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  //decrement
  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
  //reset function which sets count back to the initial value but this
  //ONLY runs if initial value has changed
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  //A custom hook returns whatever you need in your component
  //This could be state, function, computed values...
  return {
    count,
    increment,
    decrement,
    reset,
  };
}
