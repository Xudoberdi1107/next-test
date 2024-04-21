import Image from "next/image";
import img from "../../../../public/AdobeStock_103569978.jpeg";
import cn from "./style.module.css";
function About() {
  return (
    <div>
      <h1>About</h1>
      <Image src={img} alt="" className={cn["img"]} />
    </div>
  );
}

export default About;
