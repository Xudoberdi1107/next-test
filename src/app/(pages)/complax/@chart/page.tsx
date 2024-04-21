import Link from "next/link";

function Chart() {
  return (
    <div style={{ border: "1px solid red", padding: "20px", margin: "20px" }}>
      <span>CHART</span>
      <Link href={"/complax/arhiv"}>arhiv</Link>
    </div>
  );
}

export default Chart;
