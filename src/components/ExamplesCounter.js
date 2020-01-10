import React, { useState, useEffect } from 'react';

/**
 * React hooks counter example.
 * Learn how to useState (setState) and userEffect (mounted, update and unmount event).
 * When updating the state, you have to use the function set[VariableName] to update the state.
 * You can not update the state through VaribleName = NewValue.
 */
export function ExamplesCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <>
      <h1>ee</h1>
      <h1>React hooks counter example</h1>
      <p>Learn how to useState (setState) and userEffect (mounted, update and unmount event).</p>
      <p>
        When updating the state, you have to use the function set[VariableName] to update the state. You can not update the state through
        VaribleName = NewValue.
      </p>
      Initial State:
      <pre>
        <code>const [count, setCount] = useState(0);</code>
      </pre>
      Update State:
      <pre>
        <code>setCount(count + 1)</code>
      </pre>
      <hr></hr>
      <p>Count: {count}</p>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
}
