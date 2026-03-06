function Button({ text, color, fontSize,handleclick}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleclick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function Apple() {
    const handlebuttonclick = () => {
        window.location.href = "http://www.google.com"
    };
  return (
    <div>
      <Button handleclick={handlebuttonclick} text="Don't Click Me!" color="red" fontSize={12} />
      <Button handleclick={handlebuttonclick} text="Click Me!" color="blue" fontSize={12} />
      <Button handleclick={handlebuttonclick} text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}