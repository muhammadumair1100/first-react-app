import SecondComponent from "./SecondComponent.jsx";

function FirstComponent() {
  const style = { backgroundColor: "white", padding: "10px" };
  return (
    <div style={style}>
      <SecondComponent />
    </div>
  );
}

export default FirstComponent;
