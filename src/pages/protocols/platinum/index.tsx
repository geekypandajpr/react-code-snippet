import React from "react";
import StepperComponent from "../../common/stepper";
import C1 from "./c1";
import C2 from "./c2";
import C3 from "./c3";
import C4 from "./c4";
import C5 from "./c5";
import C6 from "./c6";
import C7 from "./c7";
import C8 from "./c8";
import C9 from "./c9";
import { useState } from "react";

const Platinum = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    const c = current + 1;
    setCurrent(c);
  };

  const handlePrev = () => {
    const c = current - 1;
    setCurrent(c);
  };
  return (
    <>
      <StepperComponent
        handlenext1={handleNext}
        handlePrev1={handlePrev}
        value={9}
      />
      {current === 0 && <C1 />}
      {current === 1 && <C2 />}
      {current === 2 && <C3 />}
      {current === 3 && <C4 />}
      {current === 4 && <C5 />}
      {current === 5 && <C6 />}
      {current === 6 && <C7 />}
      {current === 7 && <C8 />}
      {current === 8 && <C9 />}
    </>
  );
};

export default Platinum;
