import "./Ticket.css";

function Ticket({ tickets }) {
  return (
    <div className="ticket">
      {tickets.map((ticket, idx) => (
        <span key={idx}>{ticket}</span>
      ))}
    </div>
  );
}

export default Ticket;
