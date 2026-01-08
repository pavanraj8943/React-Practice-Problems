import React, { useEffect } from 'react';

const UseEffectExample = () => {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return <h2>!</h2>;
};

export default UseEffectExample;
