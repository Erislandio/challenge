import React, { useState } from "react";
import { InputDefault } from "../components/input/inputDefault";

export const Bin2Dec = ({ title }) => {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const binaryText = bin
      .split("")
      .map(Number)
      .reverse();

    const dec = binaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );
    setDec(dec);
  };

  const handleChange = e => {
    if (e.match(/^[0-1]+$/g) === null) {
      return;
    }

    setBin(e);
  };

  return (
    <div className="container" id="bin2dec">
      <h1>{title}</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <InputDefault
            placeholder="Binary numbers"
            onChange={e => handleChange(e.target.value)}
            value={bin}
          />
          <button type="submit">Converter</button>
          <InputDefault placeholder="Decimal" disabled value={dec} />
        </form>
      </main>
    </div>
  );
};
