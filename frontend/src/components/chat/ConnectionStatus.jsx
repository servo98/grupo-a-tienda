const ConnectionStatus = ({ isConnected = false }) => {
  return (
    <div>
      <p>Estado de la conexión: {isConnected ? "Conectado" : "Desconectado"}</p>
    </div>
  );
};

export default ConnectionStatus;
