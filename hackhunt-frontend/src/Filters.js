import './Filters.css';

function Filters() {
  return (
    <div className="filters-container">
      <h3>🎯 Filters</h3>
      <label><input type="checkbox" /> Prize Pool</label><br />
      <label><input type="checkbox" /> Team Size</label><br />
      <label><input type="checkbox" /> Accommodation</label><br />
      <label><input type="checkbox" /> Online</label><br />
      <label><input type="checkbox" /> Offline</label><br />
    </div>
  );
}

export default Filters;
