import { useState } from "react";
import NoOfCircles from "./NoOfCircles";

export default function CirclesInput() {
  const [input, setInput] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div>circles</div>
      <input
        type="number"
        className="border border-black"
        value={input}
        onChange={handleChange}
      />
      {input && <NoOfCircles count={Number(input)} />}
    </div>
  );
}
