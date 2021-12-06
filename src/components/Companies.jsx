import companies from "../data/companies";
import "./styles/companies.css";
function Companies() {
  return (
    <div className="companies-container">
      <p>Companies that trusted us</p>
      <div className="companies">
        {companies.map((company, index) => (
          <img src={company.path} alt={company.name} className="company-logo" />
        ))}
      </div>
    </div>
  );
}

export default Companies;
