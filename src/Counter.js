import useCounter from "./useCounter";

function Counter() {
   const [count,increment,decrement]=useCounter()
  return (
    <div>
      <center><h1>count :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button></center>
    </div>
  );
}
export default Counter;

 