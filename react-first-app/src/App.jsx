import "./App.css";
import FirstComponent from "./Day-01/ComponentDEMO.jsx"; // For Day-01 learning
import Props from "./Day-02/Props.jsx"; // For Day-02 learning
import Button from "./Day-03/Button.jsx"; // For Day-03 learning
import Profile from "./Practice-01/Profile.jsx"; // For Practice-01 Folder
import Buttons from "./Practice-02/Buttons.jsx"; // For Practice-02 Folder
import Lottery from "./Practice-03/Lottery.jsx";
import { sum } from "./Practice-03/helper.js";

function App() {
  const hobbies = ["Mobile Games", "Football", "Coding"];

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
