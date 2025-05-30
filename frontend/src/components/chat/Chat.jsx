import ConnectionStatus from "./ConnectionStatus";
import Events from "./Events";
import ConnectionManager from "./ConnectionManager";
import Form from "./Form";

import { useState, useEffect } from "react";
import { socket } from "../../utils/socket";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };
    const onDisconnect = () => {
      setIsConnected(false);
    };
    const onMessage = (event) => {
      console.log(event);
      setMessages((prev) => {
        return [...prev, event.message];
      });
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
    };
  }, []);

  return (
    <div>
      <h4>Chat</h4>
      {/* Ver el estado de la conexión con sockets */}
      <ConnectionStatus isConnected={isConnected} />
      {/* Lista de mensajes o eventos del socket */}
      <Events messages={messages} />
      {/* Botones para manejar la conexión */}
      <ConnectionManager isConnected={isConnected} />
      {/* Input para mandar mensajes */}
      <Form />
    </div>
  );
};

export default Chat;
