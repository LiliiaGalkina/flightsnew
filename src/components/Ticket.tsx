import type React from "react";
import pobeda from "/image/pobeda.png";
import s7 from "/image/s7.png";
import redwings from "/image/red-wings.png";

type Time = {
  startTime: string;
  endTime: string;
};

interface TicketProps {
  price: number;
  fromto: string;
  time: Time;
  company: string;
  duration: number;
  connectionAmount: number;
}

const Ticket: React.FC<TicketProps> = ({
  price,
  fromto,
  time,
  company,
  duration,
  connectionAmount,
}) => {
  return (
    <div className="ticket">
      <div className="ticket__items">
        <div className="ticket__item">
          <div className="ticket__price">{`${price} Р`}</div>
          <div className="ticket__path">{fromto} </div>
          <div className="ticket__time">{`${time.startTime} - ${time.endTime}`}</div>
        </div>
        <div className="ticket__item">
          <div></div>
          <div className="ticket__text">В пути</div>
          <div className="ticket__duration">{`${Math.floor(duration / 60)} ч ${
            duration % 60
          } мин`}</div>
        </div>
        <div className="ticket__item">
          <div className="ticket__img">
            <img
              src={
                company === "Победа"
                  ? pobeda
                  : company === "S7 Airlines"
                  ? s7
                  : company === "Red Wings"
                  ? redwings
                  : ""
              }
              alt="название компании"
            />
          </div>
          <div className="ticket__text">Пересадки</div>
          <div className="ticket__transfers">
            {" "}
            {connectionAmount === 0
              ? "без пересадок"
              : connectionAmount === 1
              ? "1 пересадка"
              : `${connectionAmount} пресадки`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
