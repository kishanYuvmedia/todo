import { useCallback, useState } from "react";
const CallBackApp=()=>{
const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
        setCount(count+1)
  }, [count]);
  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
export default CallBackApp