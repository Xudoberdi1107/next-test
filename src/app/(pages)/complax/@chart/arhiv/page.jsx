const { default: Link } = require("next/link");

function Arhiv() {
  return (
    <div style={{ border: "1px solid blue", padding: "20px", margin: "20px" }}>
      <h1>arhive</h1>
      <Link href={"/complax"}>complex</Link>
    </div>
  );
}

export default Arhiv;
