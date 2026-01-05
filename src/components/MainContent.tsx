import CompanyFilter from "./CompanyFilter";
import TransferCountFilter from "./TransferCountFilter";
import TicketsList from "./TicketsList";

const MainContent = () => {
	
  return (
    <main className="main">
      <div className="container">
        <div className="main__items">
          <div className="main__item filters">
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
