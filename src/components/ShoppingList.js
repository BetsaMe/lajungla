import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList() {
  const uniqueCategories = plantList.reduce((acc, plant) => {
    // Si la categoría no está ya en el acumulador, la añadimos
    if (!acc.includes(plant.category)) {
      acc.push(plant.category);
    }
    return acc; // Devolver el acumulador correctamente
  }, []);

  return (
    <div>
      <ul>
        {uniqueCategories.map((category) => (
          <li key={category.id}>{category}</li> // Renderizamos la lista de categorías únicas
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem 
            name={name}
            cover={cover} 
            id={id}
            light={light}
            water={water} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
