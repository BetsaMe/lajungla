import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState(" ");

  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Atencion, no haz escrito un email valido 😥"
      );
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Para los amantes de las plantas 🌿🌱🌵
      </div>

      <input
        placeholder="Escribe tu email"
        value={inputValue}
        onChange={handleInput}
        onBlur={handleBlur}
        type="text"
        name="my_input"
      />

      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
    </footer>
  );
}

export default Footer;
