import React, { useEffect, useState } from 'react';

const WhatIsReact = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount((prev) => prev+1);
    }
    return (
      <div>
          <h1>Hello, React!</h1>
          <p>You clicked {count} times</p>
          <button onClick={handleIncrement}>
            Click me
          </button>
        </div>
    );
};

export default WhatIsReact;
