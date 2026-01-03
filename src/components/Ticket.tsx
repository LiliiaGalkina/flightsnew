const Ticket = () => {
	return (
    <div className="ticket">
      <div className="ticket__items">
        <div className="ticket__item">
          <div className="ticket__price">12 680 Р</div>
          <div className="ticket__path">SVO - LED </div>
          <div className="ticket__time">12:00 - 16:30</div>
        </div>
        <div className="ticket__item">
          <div></div>
          <div className="ticket__text">В пути</div>
          <div className="ticket__duration">4 ч 30 мин</div>
        </div>
        <div className="ticket__item">
          <div className="ticket__img">
            <img src="public/image/pobeda.png" />
          </div>
          <div className="ticket__text">Пересадки</div>
          <div className="ticket__transfers">1 пересадка</div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;