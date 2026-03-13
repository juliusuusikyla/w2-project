import "./TypeFilter.css";

export default function TypeFilter({
  typeColors,
  activeFilters,
  onToggle,
  onClear,
}) {
  return (
    <div className="type-filter">
      <button
        className={`type-btn ${activeFilters.length === 0 ? "active" : ""}`}
        onClick={onClear}
      >
        Show all
      </button>
      {Object.entries(typeColors).map(([type, color]) => (
        <button
          key={type}
          className={`type-btn ${activeFilters.includes(type) ? "active" : ""}`}
          onClick={() => onToggle(type)}
        >
          <span className="type-dot" style={{ background: color }}></span>
          {type}
        </button>
      ))}
    </div>
  );
}
