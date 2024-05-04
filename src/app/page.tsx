import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Image src={"/assets/background/night.jpeg"} width={1920} height={1080} alt="image" className="z-[-5] absolute hidden"></Image>
      <Image src={"/assets/background/forest.png"} width={1920} height={1080} alt="image" className="z-[5] absolute "></Image>
    <Image src={"/assets/svg.png"} width={1920} height={1080} alt="image" className="z-[50] absolute"></Image>
    <div className="opacity-0 hover:opacity-100 z-[100] absolute top-[46%] left-[-5px]"><Image src="/assets/onselected/calendar.png" width={370} height={100} alt="image"></Image></div>
    </div>
  );
}