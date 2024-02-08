import { BsBuildingGear, BsHouseDoor, BsBuildings } from "react-icons/bs";

const swiperOpacityImgs = ["swiper1.webp", "swiper2.webp", "swiper3.webp"];
const servicesGrid = [
  {
    title: "Residential",
    bigImg: "services/big-img1.webp",
    smallImg: "services/small-img1.webp",
    card: {
      icon: <BsHouseDoor />,
      title: "Houses & Condos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    bigText: "Our skilled craftsmen specialize in residential construction.",
    url:"services/residential"
  },
  {
    title: "Commercial",
    bigImg: "services/big-img2.webp",
    smallImg: "services/small-img2.webp",
    card: {
      icon: <BsBuildings />,
      title: "Offices & Malls",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    bigText: "We are the ideal choice for commercial construction.",
    url:"services/commercial"
  },
  {
    title: "Renovation",
    bigImg: "services/big-img3.webp",
    smallImg: "services/small-img3.webp",
    card: {
      icon: <BsBuildingGear />,
      title: "Interiors",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    bigText: "We specialize in breathing new life into existing spaces.",
    url:"services/renovation"
  },
];
export { swiperOpacityImgs, servicesGrid,  };
