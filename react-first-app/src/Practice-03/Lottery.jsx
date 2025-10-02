import { useState } from "react";
import Ticket from "./Ticket";
import { generateTicket } from "./helper";
import Button from "./Button";

function Lottery({ n = 3, winCondition }) {
  let [Tickets, setTickets] = useState(generateTicket(n));

  let genTicket = () => {
    setTickets(generateTicket(n));
  };

  let isWinning = winCondition(Tickets);

  return (
    <div>
      <h2>Lottery-Game</h2>
      <Ticket tickets={Tickets} />
      {isWinning && <p>Congratulation you won</p>}
      <Button buyTicket={genTicket} />
    </div>
  );
}

export default Lottery;
