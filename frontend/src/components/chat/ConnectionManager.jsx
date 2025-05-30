import { socket } from "../../utils/socket";

const ConnectionManager = ({ isConnected }) => {
  const handleConnect = () => {
    socket.connect();
  };

  const handleDisconnect = () => {
    socket.disconnect();
  };
  return (
    <div>
      {isConnected ? (
        <button onClick={handleDisconnect}>Desconectar</button>
      ) : (
        <button onClick={handleConnect}>Conectar</button>
      )}
    </div>
  );
};

export default ConnectionManager;
