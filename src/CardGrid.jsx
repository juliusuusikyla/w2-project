import Card from "./Card";
import "./CardGrid.css";

export default function CardGrid({ beasts, typeColors }) {
  return (
    <div className="cardgrid">
      {beasts.map((beast) => (
        <Card key={beast.id} {...beast} typeColor={typeColors[beast.type]} />
      ))}
    </div>
  );
}
