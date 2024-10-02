import { plantList } from "../datas/plantList";
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
          <li key={category.id}>
            {category}
          </li> // Renderizamos la lista de categorías únicas
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer && <div className="lmj-sales">soldes</div>}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
