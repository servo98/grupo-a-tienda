const Events = ({ messages = [] }) => {
  return (
    <div>
      {messages.map((event, index) => {
        return <p key={index}>{event}</p>;
      })}
    </div>
  );
};

export default Events;
