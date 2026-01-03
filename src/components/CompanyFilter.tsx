import { useState } from "react";

const CompanyFilter = () => {
	const [filterCompany1, setFilterCompany1] = useState(false);
	const [filterCompany2, setFilterCompany2] = useState(false);
	const [filterCompany3, setFilterCompany3] = useState(false);

	const handleFilterCompanyClick1 = () => {
    setFilterCompany1(!filterCompany1);
	};
		const handleFilterCompanyClick2 = () => {
      setFilterCompany2(!filterCompany2);
	};
		const handleFilterCompanyClick3 = () => {
      setFilterCompany3(!filterCompany3);
    };
	
	return (
    <div className="filter">
      <div className="filter__title">Компании</div>
      <ul className="filter__list circle">
        <li className="circle__item">
          <input
            type="checkbox"
            id="company1"
            className={
              filterCompany1
                ? "circle__rowcheckbox circle__rowcheckbox_after"
                : "circle__rowcheckbox"
            }
            checked={filterCompany1}
            onChange={handleFilterCompanyClick1}
          />
          <label htmlFor="company1" className="circle__rowtext">
            Победа
          </label>
        </li>
        <li className="circle__item">
          <input
            type="checkbox"
            id="company2"
            className={
              filterCompany2
                ? "circle__rowcheckbox circle__rowcheckbox_after"
                : "circle__rowcheckbox"
            }
            checked={filterCompany2}
            onChange={handleFilterCompanyClick2}
          />
          <label htmlFor="company2" className="circle__rowtext">
            Red Wings
          </label>
        </li>
        <li className="circle__item">
          <input
            type="checkbox"
            id="company3"
            className={
              filterCompany3
                ? "circle__rowcheckbox circle__rowcheckbox_after"
                : "circle__rowcheckbox"
            }
            checked={filterCompany3}
            onChange={handleFilterCompanyClick3}
          />
          <label htmlFor="company3" className="circle__rowtext">
            S7 Airlines
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CompanyFilter;