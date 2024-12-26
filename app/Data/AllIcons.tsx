import React, { useEffect } from "react";

import {
  AccountBalance,
  AccountBalanceWallet,
  AddShoppingCart,
  AttachMoney,
  BarChart,
  BusinessCenter,
  Calculate,
  CreditCard,
  DateRange,
  DirectionsCar,
  EmojiTransportation,
  Fastfood,
  FlightTakeoff,
  Home,
  Hotel,
  LocalAtm,
  LocalGroceryStore,
  LocalHospital,
  LocalLaundryService,
  LocalLibrary,
  LocalMall,
  LocalOffer,
  MonetizationOn,
  Movie,
  MusicNote,
  Pets,
  PhoneAndroid,
  PieChart,
  Receipt,
  Restaurant,
  School,
  ShoppingBasket,
  ShoppingCart,
  ShowChart,
  SportsEsports,
  Store,
  Subscriptions,
  Timeline,
  TrendingDown,
  TrendingUp,
  ViewList,
  Wifi,
  WorkOutline,
  AccountCircle,
  Cake,
  ChildCare,
  ContentCut,
  FitnessCenter,
  Headset,
  LocalBar,
  LocalCafe,
  LocalFlorist,
  LocalParking,
  LocalPharmacy,
  LocalPizza,
  Redeem,
  SmokingRooms,
  SportsBasketball,
  Theaters,
  Tv,
  Backpack,
  Bed,
  Brush,
  Build,
  Camera,
  CameraAlt,
  Casino,
  ChildFriendly,
  CloudUpload,
  Computer,
  CreditScore,
  Dehaze,
  DesktopMac,
  Dining,
  ElectricalServices,
  EventSeat,
  FactCheck,
  FamilyRestroom,
  FastfoodOutlined,
  Flatware,
  Flight,
  Games,
  Gavel,
  Grade,
  Grass,
  Highlight,
  HomeRepairService,
  HowToVote,
  ImportContacts,
  InsertChart,
  Kitchen,
  LocalActivity,
  LocalShipping,
  Mediation,
  MenuBook,
  Nightlife,
  Paid,
  Park,
  PersonalVideo,
  Phonelink,
} from "@mui/icons-material";

import { IconData } from "../types/AppType";
import { useContextApp } from "../contextApp";

export const allIconsArray: IconData[] = [
  {
    id: 1,
    icon: <AccountBalance className="text-[23px]" />,
    name: "AccountBalance",
    isSelected: true,
  },
  {
    id: 2,
    icon: <AccountBalanceWallet className="text-[23px]" />,
    name: "AccountBalanceWallet",
    isSelected: false,
  },
  {
    id: 3,
    icon: <AddShoppingCart className="text-[23px]" />,
    name: "AddShoppingCart",
    isSelected: false,
  },
  {
    id: 4,
    icon: <AttachMoney className="text-[23px]" />,
    name: "AttachMoney",
    isSelected: false,
  },
  {
    id: 5,
    icon: <BarChart className="text-[23px]" />,
    name: "BarChart",
    isSelected: false,
  },
  {
    id: 6,
    icon: <BusinessCenter className="text-[23px]" />,
    name: "BusinessCenter",
    isSelected: false,
  },
  {
    id: 7,
    icon: <Calculate className="text-[23px]" />,
    name: "Calculate",
    isSelected: false,
  },
  {
    id: 8,
    icon: <CreditCard className="text-[23px]" />,
    name: "CreditCard",
    isSelected: false,
  },
  {
    id: 9,
    icon: <DateRange className="text-[23px]" />,
    name: "DateRange",
    isSelected: false,
  },
  {
    id: 10,
    icon: <DirectionsCar className="text-[23px]" />,
    name: "DirectionsCar",
    isSelected: false,
  },
  {
    id: 11,
    icon: <EmojiTransportation className="text-[23px]" />,
    name: "EmojiTransportation",
    isSelected: false,
  },
  {
    id: 12,
    icon: <Fastfood className="text-[23px]" />,
    name: "FastFood",
    isSelected: false,
  },
  {
    id: 13,
    icon: <FlightTakeoff className="text-[23px]" />,
    name: "FlightTakeoff",
    isSelected: false,
  },
  {
    id: 14,
    icon: <Home className="text-[23px]" />,
    name: "Home",
    isSelected: false,
  },
  {
    id: 15,
    icon: <Hotel className="text-[23px]" />,
    name: "Hotel",
    isSelected: false,
  },
  {
    id: 16,
    icon: <LocalAtm className="text-[23px]" />,
    name: "LocalAtm",
    isSelected: false,
  },
  {
    id: 17,
    icon: <LocalGroceryStore className="text-[23px]" />,
    name: "LocalGroceryStore",
    isSelected: false,
  },
  {
    id: 18,
    icon: <LocalHospital className="text-[23px]" />,
    name: "LocalHospital",
    isSelected: false,
  },
  {
    id: 19,
    icon: <LocalLaundryService className="text-[23px]" />,
    name: "LocalLaundryService",
    isSelected: false,
  },
  {
    id: 20,
    icon: <LocalLibrary className="text-[23px]" />,
    name: "LocalLibrary",
    isSelected: false,
  },
  {
    id: 21,
    icon: <LocalMall className="text-[23px]" />,
    name: "LocalMall",
    isSelected: false,
  },
  {
    id: 22,
    icon: <LocalOffer className="text-[23px]" />,
    name: "LocalOffer",
    isSelected: false,
  },
  {
    id: 23,
    icon: <MonetizationOn className="text-[23px]" />,
    name: "MonetizationOn",
    isSelected: false,
  },
  {
    id: 24,
    icon: <Movie className="text-[23px]" />,
    name: "Movie",
    isSelected: false,
  },
  {
    id: 25,
    icon: <MusicNote className="text-[23px]" />,
    name: "MusicNote",
    isSelected: false,
  },
  {
    id: 26,
    icon: <Pets className="text-[23px]" />,
    name: "Pets",
    isSelected: false,
  },
  {
    id: 27,
    icon: <PhoneAndroid className="text-[23px]" />,
    name: "PhoneAndroid",
    isSelected: false,
  },
  {
    id: 28,
    icon: <PieChart className="text-[23px]" />,
    name: "PieChart",
    isSelected: false,
  },
  {
    id: 29,
    icon: <Receipt className="text-[23px]" />,
    name: "Receipt",
    isSelected: false,
  },
  {
    id: 30,
    icon: <Restaurant className="text-[23px]" />,
    name: "Restaurant",
    isSelected: false,
  },
  {
    id: 31,
    icon: <School className="text-[23px]" />,
    name: "School",
    isSelected: false,
  },
  {
    id: 32,
    icon: <ShoppingBasket className="text-[23px]" />,
    name: "ShoppingBasket",
    isSelected: false,
  },
  {
    id: 33,
    icon: <ShoppingCart className="text-[23px]" />,
    name: "ShoppingCart",
    isSelected: false,
  },
  {
    id: 34,
    icon: <ShowChart className="text-[23px]" />,
    name: "ShowChart",
    isSelected: false,
  },
  {
    id: 35,
    icon: <SportsEsports className="text-[23px]" />,
    name: "SportsEsports",
    isSelected: false,
  },
  {
    id: 36,
    icon: <Store className="text-[23px]" />,
    name: "Store",
    isSelected: false,
  },
  {
    id: 37,
    icon: <Subscriptions className="text-[23px]" />,
    name: "Subscriptions",
    isSelected: false,
  },
  {
    id: 38,
    icon: <Timeline className="text-[23px]" />,
    name: "Timeline",
    isSelected: false,
  },
  {
    id: 39,
    icon: <TrendingDown className="text-[23px]" />,
    name: "TrendingDown",
    isSelected: false,
  },
  {
    id: 40,
    icon: <TrendingUp className="text-[23px]" />,
    name: "TrendingUp",
    isSelected: false,
  },
  {
    id: 41,
    icon: <ViewList className="text-[23px]" />,
    name: "ViewList",
    isSelected: false,
  },
  {
    id: 42,
    icon: <Wifi className="text-[23px]" />,
    name: "Wifi",
    isSelected: false,
  },
  {
    id: 43,
    icon: <WorkOutline className="text-[23px]" />,
    name: "WorkOutline",
    isSelected: false,
  },
  {
    id: 44,
    icon: <AccountCircle className="text-[23px]" />,
    name: "AccountCircle",
    isSelected: false,
  },
  {
    id: 45,
    icon: <Cake className="text-[23px]" />,
    name: "Cake",
    isSelected: false,
  },
  {
    id: 46,
    icon: <ChildCare className="text-[23px]" />,
    name: "ChildCare",
    isSelected: false,
  },
  {
    id: 47,
    icon: <ContentCut className="text-[23px]" />,
    name: "ContentCut",
    isSelected: false,
  },
  {
    id: 48,
    icon: <FitnessCenter className="text-[23px]" />,
    name: "FitnessCenter",
    isSelected: false,
  },
  {
    id: 49,
    icon: <Headset className="text-[23px]" />,
    name: "Headset",
    isSelected: false,
  },
  {
    id: 50,
    icon: <LocalBar className="text-[23px]" />,
    name: "LocalBar",
    isSelected: false,
  },
  {
    id: 51,
    icon: <LocalCafe className="text-[23px]" />,
    name: "LocalCafe",
    isSelected: false,
  },
  {
    id: 52,
    icon: <LocalFlorist className="text-[23px]" />,
    name: "LocalFlorist",
    isSelected: false,
  },
  {
    id: 53,
    icon: <LocalParking className="text-[23px]" />,
    name: "LocalParking",
    isSelected: false,
  },
  {
    id: 54,
    icon: <LocalPharmacy className="text-[23px]" />,
    name: "LocalPharmacy",
    isSelected: false,
  },
  {
    id: 55,
    icon: <LocalPizza className="text-[23px]" />,
    name: "LocalPizza",
    isSelected: false,
  },
  {
    id: 56,
    icon: <Redeem className="text-[23px]" />,
    name: "Redeem",
    isSelected: false,
  },
  {
    id: 57,
    icon: <SmokingRooms className="text-[23px]" />,
    name: "Smoking",
    isSelected: false,
  },
  {
    id: 58,
    icon: <SportsBasketball className="text-[23px]" />,
    name: "SportsBasketball",
    isSelected: false,
  },
  {
    id: 59,
    icon: <Theaters className="text-[23px]" />,
    name: "Theaters",
    isSelected: false,
  },
  {
    id: 60,
    icon: <Tv className="text-[23px]" />,
    name: "Tv",
    isSelected: false,
  },
  {
    id: 61,
    icon: <Backpack className="text-[23px]" />,
    name: "Backpack",
    isSelected: false,
  },
  {
    id: 62,
    icon: <Bed className="text-[23px]" />,
    name: "Bed",
    isSelected: false,
  },
  {
    id: 63,
    icon: <Brush className="text-[23px]" />,
    name: "Brush",
    isSelected: false,
  },
  {
    id: 64,
    icon: <Build className="text-[23px]" />,
    name: "Build",
    isSelected: false,
  },
  {
    id: 65,
    icon: <Camera className="text-[23px]" />,
    name: "Camera",
    isSelected: false,
  },
  {
    id: 66,
    icon: <CameraAlt className="text-[23px]" />,
    name: "CameraAlt",
    isSelected: false,
  },
  {
    id: 67,
    icon: <Casino className="text-[23px]" />,
    name: "Casino",
    isSelected: false,
  },
  {
    id: 68,
    icon: <ChildFriendly className="text-[23px]" />,
    name: "ChildFriendly",
    isSelected: false,
  },
  {
    id: 69,
    icon: <CloudUpload className="text-[23px]" />,
    name: "CloudUpload",
    isSelected: false,
  },
  {
    id: 70,
    icon: <Computer className="text-[23px]" />,
    name: "Computer",
    isSelected: false,
  },
  {
    id: 71,
    icon: <CreditScore className="text-[23px]" />,
    name: "CreditScore",
    isSelected: false,
  },
  {
    id: 72,
    icon: <Dehaze className="text-[23px]" />,
    name: "Dehaze",
    isSelected: false,
  },
  {
    id: 73,
    icon: <DesktopMac className="text-[23px]" />,
    name: "Desktop",
    isSelected: false,
  },
  {
    id: 74,
    icon: <Dining className="text-[23px]" />,
    name: "Dining",
    isSelected: false,
  },

  {
    id: 76,
    icon: <ElectricalServices className="text-[23px]" />,
    name: "ElectricalServices",
    isSelected: false,
  },
  {
    id: 77,
    icon: <EventSeat className="text-[23px]" />,
    name: "EventSeat",
    isSelected: false,
  },
  {
    id: 78,
    icon: <FactCheck className="text-[23px]" />,
    name: "FactCheck",
    isSelected: false,
  },
  {
    id: 79,
    icon: <FamilyRestroom className="text-[23px]" />,
    name: "FamilyRestroom",
    isSelected: false,
  },
  {
    id: 80,
    icon: <FastfoodOutlined className="text-[23px]" />,
    name: "FastfoodOutlined",
    isSelected: false,
  },
  {
    id: 81,
    icon: <Flatware className="text-[23px]" />,
    name: "Flatware",
    isSelected: false,
  },
  {
    id: 82,
    icon: <Flight className="text-[23px]" />,
    name: "Flight",
    isSelected: false,
  },
  {
    id: 83,
    icon: <Games className="text-[23px]" />,
    name: "Games",
    isSelected: false,
  },
  {
    id: 84,
    icon: <Gavel className="text-[23px]" />,
    name: "Gavel",
    isSelected: false,
  },
  {
    id: 85,
    icon: <Grade className="text-[23px]" />,
    name: "Grade",
    isSelected: false,
  },
  {
    id: 86,
    icon: <Grass className="text-[23px]" />,
    name: "Grass",
    isSelected: false,
  },
  {
    id: 87,
    icon: <Highlight className="text-[23px]" />,
    name: "Highlight",
    isSelected: false,
  },
  {
    id: 88,
    icon: <HomeRepairService className="text-[23px]" />,
    name: "HomeRepairService",
    isSelected: false,
  },
  {
    id: 89,
    icon: <HowToVote className="text-[23px]" />,
    name: "HowToVote",
    isSelected: false,
  },
  {
    id: 90,
    icon: <ImportContacts className="text-[23px]" />,
    name: "ImportContacts",
    isSelected: false,
  },
  {
    id: 91,
    icon: <InsertChart className="text-[23px]" />,
    name: "InsertChart",
    isSelected: false,
  },
  {
    id: 92,
    icon: <Kitchen className="text-[23px]" />,
    name: "Kitchen",
    isSelected: false,
  },
  {
    id: 93,
    icon: <LocalActivity className="text-[23px]" />,
    name: "LocalActivity",
    isSelected: false,
  },
  {
    id: 94,
    icon: <LocalShipping className="text-[23px]" />,
    name: "LocalShipping",
    isSelected: false,
  },
  {
    id: 95,
    icon: <Mediation className="text-[23px]" />,
    name: "Mediation",
    isSelected: false,
  },
  {
    id: 96,
    icon: <MenuBook className="text-[23px]" />,
    name: "MenuBook",
    isSelected: false,
  },
  {
    id: 97,
    icon: <Nightlife className="text-[23px]" />,
    name: "Nightlife",
    isSelected: false,
  },
  {
    id: 98,
    icon: <Paid className="text-[23px]" />,
    name: "Paid",
    isSelected: false,
  },
  {
    id: 99,
    icon: <Park className="text-[23px]" />,
    name: "Park",
    isSelected: false,
  },
  {
    id: 100,
    icon: <PersonalVideo className="text-[23px]" />,
    name: "PersonalVideo",
    isSelected: false,
  },
];

export default function AllIcons() {
  const {
    allIconsDataObject: { allIconsData, setAllIconsData },
    selectedIconObject: { selectedIcon, setSelectedIcon },
    openIconWindowObject: { setOpenIconWindow },
  } = useContextApp();

  function handleTheIconSelection(singleIcon: IconData) {
    setAllIconsData((prevIcons) =>
      prevIcons.map((icon) => {
        if (icon.name === singleIcon.name) {
          setSelectedIcon(singleIcon);
          return { ...icon, isSelected: true };
        }

        return { ...icon, isSelected: false };
      })
    );

    //Close the icon window
    setOpenIconWindow(false);
  }

  return (
    <div className="flex flex-wrap gap-2 text-orange-600 p-3">
      {allIconsData.map((singleIcon, index) => (
        <div
          key={index}
          onClick={() => handleTheIconSelection(singleIcon)}
          className={`w-9 h-9  shadow-sm border border-slate-50 flex items-center 
          
          justify-center rounded-lg hover:bg-orange-600 hover:text-white 
          ${
            singleIcon.isSelected
              ? "bg-orange-600 text-white"
              : "bg-white text-orange-600"
          }`}
        >
          {singleIcon.icon}
        </div>
      ))}
    </div>
  );
}
