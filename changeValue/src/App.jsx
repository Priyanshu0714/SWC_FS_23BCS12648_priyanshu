import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(1);
  const [count, setcount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setcount(newCount);

    if (newCount % 3 === 0) {
      setValue((a) => a * 2);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        Value: {value}
      </button>
    </div>
  );
}