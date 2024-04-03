import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const Category = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach.",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has a view of the windmills.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern.",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is on countryside.",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has pool.",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This property on Island.",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is Near a lake.",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has Skiing activities.",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle.",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities.",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in Arctic.",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in cave.",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in desert.",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in barn!.",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is Luxurious!.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {Category.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
