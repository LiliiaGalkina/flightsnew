import Ticket from "./Ticket";

const TicketsList = () => {
  return (
    <>
      <div className="tickets__sort-buttons">
        <div className="tickets__sort-button">Самый дешевый</div>
        <div className="tickets__sort-button">Самый быстрый</div>
        <div className="tickets__sort-button">Самый оптимальный</div>
      </div>
      <div className="tickets__list">
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </>
  );
};

export default TicketsList