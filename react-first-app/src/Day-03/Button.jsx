import Form from "./Form.jsx";

export default function Button() {
  function outer() {
    let a = 10;
    function inner() {
      let b = 20;
      console.log(a + b);
    }
    return inner;
  }

  const output = outer();
  output(); // Expected output 30

  function handleDoubleClick() {
    console.log("Hello World!");
  }
  return (
    <>
      <button onDoubleClick={handleDoubleClick}>
        Double Click To Console Something!
      </button>
      <Form />
    </>
  );
}
