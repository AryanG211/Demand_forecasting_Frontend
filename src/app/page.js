import Image from "next/image";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import imgDesk from "./Assets/Home-Banner.svg"
import imgMob from "./Assets/Home-Banner.svg"
import ImgText from "./Components/ImgText";
import VideoText from "./Components/VideoText";
import Slider from "./Components/Slider";
import GetInTouch from "./Components/GetInTouch";
import imgText from './Assets/ImgText.svg'


export default function Home() {
  return (
    <div >
      <Banner imgDesk={imgDesk} imgMob={imgMob} HomeContent={true} />
      <ImgText
        imgText={imgText}
        subHeading={"About AgroSpace"}
        Heading={"Demand Forecasting"}
        Description={"Demand forecasting involves predicting future customer demand using historical data, statistical models, and machine learning techniques. By accurately forecasting demand, businesses can optimize inventory, reduce costs, and plan better for production. This process allows companies to respond proactively to market trends, ensuring they meet customer needs without overstocking or understocking products. It is essential for improving operational efficiency and maximizing profits in industries like retail, manufacturing, and agriculture."} />
      <VideoText />
      <Slider />
      <GetInTouch />
    </div>
  );
}
