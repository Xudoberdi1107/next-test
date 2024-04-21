import Image from "next/image";
import img1 from "../../../../public/Adobe1.jpeg";
import img2 from "../../../../public/Adobe2.jpeg";
import img3 from "../../../../public/Adobe3.jpeg";
import img4 from "../../../../public/Adobe4.jpeg";
import img5 from "../../../../public/Adobe5.jpeg";
import img6 from "../../../../public/Adobe6.jpeg";
import img7 from "../../../../public/Adobe7.jpeg";
import img8 from "../../../../public/Adobe8.jpeg";
import img9 from "../../../../public/Adobe9.jpeg";
import img10 from "../../../../public/Adobe10.jpeg";
import img11 from "../../../../public/Adobe11.jpeg";
import img12 from "../../../../public/Adobe12.jpeg";
import img13 from "../../../../public/Adobe13.jpeg";
import cn from "./style.module.css";
function About() {
  return (
    <div>
      <h1>About</h1>
      <Image src={img1} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img2} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img3} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img4} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img5} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img6} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img7} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img8} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img9} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img10} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img11} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img12} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
      <Image src={img13} alt="" className={cn["img"]} loading="lazy" />
      <div className={cn["box"]}></div>
    </div>
  );
}

export default About;
