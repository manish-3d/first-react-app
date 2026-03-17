
import { useEffect, useState } from "react";


function Button({ text, color, fontSize, handleclick, counting }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button
      onClick={() => {
        if (handleclick) handleclick();
        if (counting) counting();
      }}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}

export default function Apple() {
  const handlebuttonclick = () => {
    window.location.href = "http://www.google.com";
  };

  const [count, setCount] = useState(0);

  const counting = () => {
    setCount((prev) => {
      console.log("previous count:", prev);
      console.log("next count:", prev + 1);
      return prev + 1;
    });
  };

  return (
    <div>
      <Button counting={counting} text={count} color="red" fontSize={12} />
      <Button
        handleclick={handlebuttonclick}
        text="Click Me!"
        color="blue"
        fontSize={12}
      />
      <Button
        handleclick={handlebuttonclick}
        text="Click Me!"
        color="blue"
        fontSize={20}
      />
    </div>
  );
}

export  function Clock() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });

  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
export function Person() {
  const [person, setPerson] = useState({
    name: "John",
    age: 100
  });

  const handleIncreaseAge = () => {
    console.log("before:", person);

    setPerson((prev) => ({
      ...prev,
      age: prev.age + 1
    }));

    console.log("after (still old state):", person);
  };

  console.log("during render:", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>
        Increase age
      </button>
    </>
  );
}
function Counter() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <button onClick={increase}>
      {count}
    </button>
  );
}