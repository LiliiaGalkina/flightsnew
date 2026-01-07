import CompanyFilter from "./CompanyFilter";
import TransferCountFilter from "./TransferCountFilter";
import TicketsList from "./TicketsList";
import { useState } from "react";

const MainContent = () => {
	const [showFilter, setShowFilter] = useState(false);
	
  return (
    <main className="main">
      <div className="container">
        <div className="main__items">
          <div className="filtermobile">
            <div className="filtermobile__row">
              <div className="filtermobile__info">
                Любая авиакомпания, любое кол-во пересадок
              </div>
              <div
                className="filtermobile__button"
                onClick={() => setShowFilter(!showFilter)}
              >
                <p className="filtermobile__buttontext">Открыть настройки</p>
                <img
                  src="/image/arrow.png"
                  alt="белая стрелка вниз"
                  style={{
                    transform: showFilter ? "rotate(180deg)" : "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={`main__item filters ${showFilter ? "filters__hidden" : "" }`}
          
          >
            <TransferCountFilter />
            <CompanyFilter />
          </div>
          <div className="main__item tickets">
            <TicketsList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
