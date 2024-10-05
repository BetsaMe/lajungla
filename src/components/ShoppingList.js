import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";


function ShoppingList({cart, updateCart}) {
  const uniqueCategories = plantList.reduce((acc, plant) => {
    // Si la categoría no está ya en el acumulador, la añadimos
    if (!acc.includes(plant.category)) {
      acc.push(plant.category);
    }
    return acc; // Devolver el acumulador correctamente
  }, []);

  function addToCart(name, price) {
    const cartUpdated = cart.map((plant) => //se crea un nuevo carrito verificando si hay una planta igual
      plant.name === name 
        ? { ...plant, amount: plant.amount + 1 } //si es asi, se suma lo existente y aumenta la cantidad
        : plant // sino, se devuelve el item tal cual esta
    )
    const plantExists = cart.some((plant) => plant.name === name)//arroja true o false, lo creo para plantear 
    //la condicion siguiente:
  
    if (plantExists) {
      updateCart(cartUpdated)
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }
  function filterCategory(){
    console.log('esta funcion hace esto');
    
  }
  return (
    <div className="lmj-shopping-list">
      <ul>
        {uniqueCategories.map((category, index) => (
          <li key={index} onClick={filterCategory}>{category}</li> // Renderizamos la lista de categorías únicas
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price}) => (
          <div>
            <PlantItem
              name={name}
              cover={cover}
              id={id}
              light={light}
              water={water}
              price={price}
            />
            <button onClick={() => addToCart(name, price)}>
              Agregar articulo
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
