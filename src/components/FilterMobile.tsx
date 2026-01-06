import { useState } from "react";
import CompanyFilte from "./CompanyFilter";
import TransferCountFilter from "./TransferCountFilter";

const FilterMobile = () => {
	const [showFilter, setShowFilter] = useState(false);

  return (
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
            style={{ transform: showFilter ? "rotate(180deg)" : "none" }}
          />
        </div>
      </div>
      <div
        className="filtermobile__items filters"
        style={{ display: showFilter ? "flex" : "none" }}
      >
        <CompanyFilte/>
       <TransferCountFilter/>
      </div>
    </div>
  );
}

export default FilterMobile;