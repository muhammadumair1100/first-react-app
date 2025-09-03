export default function Arrays({ name, price, features }) {
  const styles = {
    backgroundColor: price >= 100000 ? "red" : "blue",
    padding: "5px",
    marginTop: "10px",
  };

  return (
    <div style={styles}>
      <h1>Name : {name}</h1>
      <p>Price : {price}</p>
      {price >= 100000 && <h3>Discount 10%</h3>}
      {features.map((feature) => (
        <p>
          <li>{feature}</li>
        </p>
      ))}
    </div>
  );
}
