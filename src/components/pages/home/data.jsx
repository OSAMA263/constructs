import { BsBuildingGear, BsHouseDoor, BsBuildings } from "react-icons/bs";

const swiperOpacityImgs = ["swiper1.jpg", "swiper2.jpg", "swiper3.jpg"];
const servicesGrid = [
  {
    title: "Residential",
    bigImg: "services/big-img1.jpg",
    smallImg: "services/small-img1.jpg",
    card: {
      icon: <BsHouseDoor />,
      title: "Houses & Condos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    bigText: "Our skilled craftsmen specialize in residential construction.",
  },
  {
    title: "Commercial",
    bigImg: "services/big-img2.jpg",
    smallImg: "services/small-img2.jpg",
    card: {
      icon: <BsBuildings />,
      title: "Offices & Malls",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    bigText: "We are the ideal choice for commercial construction.",
  },
  {
    title: "Renovation",
    bigImg: "services/big-img3.jpg",
    smallImg: "services/small-img3.jpg",
    card: {
      icon: <BsBuildingGear />,
      title: "Interiors",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    bigText: "We specialize in breathing new life into existing spaces.",
  },
];
export { swiperOpacityImgs, servicesGrid,  };
