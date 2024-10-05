import { useState } from "react";
import "../styles/Cart.css";

function Cart({cart, updateCart}) {
  
  const [isOpen, setIsOpen] = useState(true);
  const total= cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price,
  0
)

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Cerrar
      </button>
      <h2>Carrito</h2>     

      {cart.map(({name, price, amount}, index) => (// Iteramos con map en la tabla de objetos creada en el state de cart en app
        <div key={index}>
        {name} {price}€ x {amount}
        </div>
      ))}
      <h3>Total: {total}€</h3>
      <button onClick={() => updateCart([])}>Vaciar carrito</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
