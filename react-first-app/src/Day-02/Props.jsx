import Arrays from "./Arrays.jsx";

export default function Props() {
  const features = ["Best Camera", "Model 2025", "Dual Sim Cards"];
  return (
    <>
      <Arrays name="iphone" price={120000} features={features} />
      <Arrays name="Samsung S24 Ultra" price={90000} features={features} />
    </>
  );
}
