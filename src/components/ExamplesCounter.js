import React, { useState, useEffect, useMemo } from 'react';

/**
 * React hooks counter example.
 * Learn how to useState
 * - Set initial state value using function.
 * and userEffect
 * - call effect on state change.
 * - mounted and unmount event.
 * - multiple useEffect().
 * When updating the state, you have to use the function set[VariableName] to update the state.
 * You can not update the state through VaribleName = NewValue.
 */

const callconsole = text => {
  console.log(text);
};

export function ExamplesCounter() {
  // This is an example how to set initial value using function.
  // Without function, you do it like this:  const [count, setCount] = useState(0);
  const initialCount = () => {
    console.log('Call');
    return 0;
  };
  const [count, setCount] = useState(() => initialCount());

  const increaseCount = () => {
    setCount(prevMode => prevMode + 1);
  };

  const decreaseCount = () => {
    setCount(prevMode => prevMode - 1);
  };

  useEffect(() => {
    console.log('mounted');
    return () => {
      // This is an example on mount and unmount.
      console.log('unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Count initial');
    return () => {
      // This is an example on bind an effect on a state.
      console.log('Count deinitial');
    };
  }, [count]);

  // Remove the useMemo, then you will see the console keep displaying the on counter increase or decrease.
  const displayConsole = useMemo(() => {
    callconsole('Display console - Call only render using memo');
  }, []);

  return (
    <>
      <h1>React hooks counter example</h1>
      <p>Learn how to useState (setState):</p>
      <ul>
        <li> Set initial state value using function.</li>
      </ul>
      <p>Learn how to useEffect:</p>
      <ul>
        <li>Call effect on state change.</li>
        <li>Mounted and unmount event.</li>
        <li>Multiple useEffect().</li>
      </ul>
      <p>Learn how to useMemo:</p>
      <ul>
        <li>Only computed once on first render.</li>
      </ul>
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
      {displayConsole}
    </>
  );
}
