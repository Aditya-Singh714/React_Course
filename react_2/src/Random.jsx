const Random = () => {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <h1 style={{ "background-color": "#747bff" }}>
        Random Number: {randomNum}
      </h1>
    </div>
  );
};

export default Random;
