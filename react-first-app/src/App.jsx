import "./App.css";
import FirstComponent from "./Day-01/ComponentDEMO.jsx"; // For Day-01 learning
import Props from "./Day-02/Props.jsx"; // For Day-02 learning
import Button from "./Day-03/Button.jsx"; // For Day-03 learning
import Profile from "./Practice-01/Profile.jsx"; // For Practice-01 Folder
import Buttons from "./Practice-02/Buttons.jsx"; // For Practice-02 Folder
import TodoBoard from "./Day-04/TodoBoard.jsx";

function App() {
  const hobbies = ["Mobile Games", "Football", "Coding"];
  return (
    <>
      {/* <Profile name="Gentleman" age={19} city="Hangu" hobbies={hobbies} /> */}
      <TodoBoard />
    </>
  );
}

export default App;
