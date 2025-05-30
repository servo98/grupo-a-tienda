import { useState } from "react";
import { socket } from "../../utils/socket";

const Form = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar mensaje con socket
    socket.emit("message", {
      message,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={message}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
