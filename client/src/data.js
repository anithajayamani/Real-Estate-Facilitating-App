import { TbBeach, TbMountain} from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiPlantSeed,
  GiChemicalDrop,
  GiWaterDrop,
  GiGroundSprout,
  GiDroplets,
  GiWaterTank,
  GiStonePile,
  GiEarthAmerica,
  GiMoneyStack,
  GiSeaCliff,
  GiVillage,
  GiFactory,
  GiHedgehog,
  GiPencilRuler
} from "react-icons/gi";
import {
  FaSkiing,
  FaSeedling,
  FaRuler,
  FaMap,
  FaTree,
  FaMapMarkedAlt,
  FaLeaf,
  FaCity,
  FaCertificate,
} from "react-icons/fa";
import {FaMoneyBill1Wave } from "react-icons/fa6";
import {
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, } from "react-icons/bs";
import { MdOutlineVilla, MdHotel, MdLineStyle } from "react-icons/md";


export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Beachfront",
    icon: <TbBeach />,
    description: "This property is close to the beach!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Windmills",
    icon: <GiWindmill />,
    description: "This property is has windmills!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Iconic cities",
    icon: <MdOutlineVilla />,
    description: "This property is modern!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Countryside",
    icon: <TbMountain />,
    description: "This property is in the countryside!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Islands",
    icon: <GiIsland />,
    description: "This property is on an island!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Lakefront",
    icon: <GiBoatFishing />,
    description: "This property is near a lake!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Ski-in/out",
    icon: <FaSkiing />,
    description: "This property has skiing activies!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Castles",
    icon: <GiCastle />,
    description: "This property is an ancient castle!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Caves",
    icon: <GiCaveEntrance />,
    description: "This property is in a spooky cave!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Camping",
    icon: <GiForestCamp />,
    description: "This property offers camping activities!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Arctic",
    icon: <BsSnow />,
    description: "This property is in arctic environment!",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Desert",
    icon: <GiCactus />,
    description: "This property is in the desert!",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Barns",
    icon: <GiBarn />,
    description: "This property is in a barn!",
  },
];

export const types = [
  {
    name: "Buying entire Land",
    description: "Buyers have the whole place to themselves",
    icon: <GiEarthAmerica />,
  },
  {
    name: "Rent the entire Land",
    description:"Buyers can rent the land for certain period for certain purpose",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "An Agricultural Land",
    description: "Buying Land for Agricultural purpose",
    icon: <FaSeedling />,
  },
];

export const facilities = [
  {
    name: "Soil Type",
    icon: <GiPlantSeed />,
  },
  {
    name: "Soil Fertility",
    icon: <FaSeedling />,
  },
  {
    name: "PH Level",
    icon: <GiChemicalDrop />,
  },
  {
    name: "Water Level",
    icon: <GiWaterDrop />,
  },
  {
    name: "Hospitality",
    icon: <MdHotel />,
  },
  {
    name: "Ground water Level",
    icon: <GiGroundSprout />,
  },
  {
    name: "Square Feet",
    icon: <FaRuler />,
  },
  {
    name: "Acre",
    icon: <FaMap />,
  },
  {
    name: "Soil Moisture",
    icon: <GiDroplets />
  },
  {
    name: "Water Reservoir",
    icon: <GiWaterTank />,
  },
  {
    name: "Rock Type",
    icon: <GiStonePile />,
  },
  {
    name: "Land Type",
    icon: <GiEarthAmerica/>,
  },
  {
    name: "Land Degradation",
    icon: <FaTree/>,
  },
  {
    name: "Land Tenure",
    icon: <FaMapMarkedAlt />,
  },
  {
    name: "Erosion Rate",
    icon: <FaLeaf />,
  },
  {
    name: "Cultural LandMarks",
    icon: <MdLineStyle />,
  },
  {
    name: "Market Value",
    icon: <FaMoneyBill1Wave />,
  },
  {
    name: "Conservation Area",
    icon: <GiForestCamp />,
  },
  {
    name: "Economic Value",
    icon: <GiMoneyStack />,
  },
  {
    name: "Landforms",
    icon: <GiSeaCliff />,
  },
  {
    name: "Urban Area",
    icon: < FaCity/>,
  },
  {
    name: "Rural Area",
    icon: <GiVillage />,
  },
  {
    name: "Industrial Area",
    icon: <GiFactory />,
  },
  {
    name: "Certificates",
    icon: <FaCertificate />,
  },
  {
    name: "Bio Diversity",
    icon: <GiHedgehog />
  },
  {
    name: "FAR or FSI",
    icon: < GiPencilRuler/>
  }
];