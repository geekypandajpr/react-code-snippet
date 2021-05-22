import React from "react";
import StepperComponent from "../../common/stepper";
import C1 from "./c1";
import C2 from "./c2";
import C3 from "./c3";
import C4 from "./c4";
import C5 from "./c5";
import { useState } from "react";

const Platinum: React.SFC<any> = () => {
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
        value={5}
      />
      {current === 0 && <C1 />}
      {current === 1 && <C2 />}
      {current === 2 && <C3 />}
      {current === 3 && <C4 />}
      {current === 4 && <C5 />}
    </>
  );
};

export default Platinum;
