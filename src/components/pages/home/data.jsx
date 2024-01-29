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
const allProjectsSwiper = [
  { title: "Resort", text: "A touch of paradise.", img: "projects/resort.jpg" },
  {
    title: "Mall",
    text: "A modern retail destination.",
    img: "projects/mall.jpg",
  },
  { title: "Condo", text: "A contemporary home.", img: "projects/condo.jpg" },
];
const ourBlog = [
  {
    bg: "blog/article1.jpg",
    details: {
      avatar: "avatar1.jpg",
      name: "STEVE DAVIS",
      role: "ENVIRONMENT",
      date: "DEC 8, 2023",
    },
    text: "Sustainable Building Practices",
  },
  {
    bg: "blog/article2.jpg",
    details: {
      avatar: "avatar2.jpg",
      name: "JOHN SMITH",
      role: "RESERCH",
      date: "DEC 8, 2023",
    },
    text: "Choosing the Right Contractor",
  },
  {
    bg: "blog/article3.jpg",
    details: {
      avatar: "avatar3.jpg",
      name: "JANE DOE",
      role: "SAFETY",
      date: "DEC 8, 2023",
    },
    text: "Creating a Safe Construction Site",
  },
];

export { swiperOpacityImgs, servicesGrid, allProjectsSwiper, ourBlog };
