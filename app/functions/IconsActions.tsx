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
  Help,
  LocalGasStation,
  LocalMovies,
  FitnessCenterOutlined,
  Laptop,
  ElectricalServicesOutlined,
  DensitySmall,
} from "@mui/icons-material";

export const getIconComponent = (
  iconName: string,
  textColor?: string,
  fontSize?: string
): JSX.Element => {
  const defaultFontSize = "27px";
  const defaultTextColor = "text-orange-600";

  const iconProps = {
    sx: { fontSize: fontSize || defaultFontSize },
    className: `${defaultTextColor} ${textColor || ""}`.trim(),
  };

  switch (iconName) {
    case "DensitySmall":
      return <DensitySmall {...iconProps} />;
    case "ElectricalServicesOutlined":
      return <ElectricalServicesOutlined {...iconProps} />;
    case "AccountBalance":
      return <AccountBalance {...iconProps} />;
    case "AccountBalanceWallet":
      return <AccountBalanceWallet {...iconProps} />;
    case "AddShoppingCart":
      return <AddShoppingCart {...iconProps} />;
    case "AttachMoney":
      return <AttachMoney {...iconProps} />;
    case "BarChart":
      return <BarChart {...iconProps} />;
    case "BusinessCenter":
      return <BusinessCenter {...iconProps} />;
    case "Calculate":
      return <Calculate {...iconProps} />;
    case "CreditCard":
      return <CreditCard {...iconProps} />;
    case "DateRange":
      return <DateRange {...iconProps} />;
    case "DirectionsCar":
      return <DirectionsCar {...iconProps} />;
    case "EmojiTransportation":
      return <EmojiTransportation {...iconProps} />;
    case "Fastfood":
      return <Fastfood {...iconProps} />;
    case "FlightTakeoff":
      return <FlightTakeoff {...iconProps} />;
    case "Home":
      return <Home {...iconProps} />;
    case "Hotel":
      return <Hotel {...iconProps} />;
    case "LocalAtm":
      return <LocalAtm {...iconProps} />;
    case "LocalGroceryStore":
      return <LocalGroceryStore {...iconProps} />;
    case "LocalHospital":
      return <LocalHospital {...iconProps} />;
    case "LocalLaundryService":
      return <LocalLaundryService {...iconProps} />;
    case "LocalLibrary":
      return <LocalLibrary {...iconProps} />;
    case "LocalMall":
      return <LocalMall {...iconProps} />;
    case "LocalOffer":
      return <LocalOffer {...iconProps} />;
    case "MonetizationOn":
      return <MonetizationOn {...iconProps} />;
    case "Movie":
      return <Movie {...iconProps} />;
    case "MusicNote":
      return <MusicNote {...iconProps} />;
    case "Pets":
      return <Pets {...iconProps} />;
    case "PhoneAndroid":
      return <PhoneAndroid {...iconProps} />;
    case "PieChart":
      return <PieChart {...iconProps} />;
    case "Receipt":
      return <Receipt {...iconProps} />;
    case "Restaurant":
      return <Restaurant {...iconProps} />;
    case "School":
      return <School {...iconProps} />;
    case "ShoppingBasket":
      return <ShoppingBasket {...iconProps} />;
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "ShowChart":
      return <ShowChart {...iconProps} />;
    case "SportsEsports":
      return <SportsEsports {...iconProps} />;
    case "Store":
      return <Store {...iconProps} />;
    case "Subscriptions":
      return <Subscriptions {...iconProps} />;
    case "Timeline":
      return <Timeline {...iconProps} />;
    case "TrendingDown":
      return <TrendingDown {...iconProps} />;
    case "TrendingUp":
      return <TrendingUp {...iconProps} />;
    case "ViewList":
      return <ViewList {...iconProps} />;
    case "Wifi":
      return <Wifi {...iconProps} />;
    case "WorkOutline":
      return <WorkOutline {...iconProps} />;
    case "AccountCircle":
      return <AccountCircle {...iconProps} />;
    case "Cake":
      return <Cake {...iconProps} />;
    case "ChildCare":
      return <ChildCare {...iconProps} />;
    case "ContentCut":
      return <ContentCut {...iconProps} />;
    case "FitnessCenter":
      return <FitnessCenter {...iconProps} />;
    case "Headset":
      return <Headset {...iconProps} />;
    case "LocalBar":
      return <LocalBar {...iconProps} />;
    case "LocalCafe":
      return <LocalCafe {...iconProps} />;
    case "LocalFlorist":
      return <LocalFlorist {...iconProps} />;
    case "LocalParking":
      return <LocalParking {...iconProps} />;
    case "LocalPharmacy":
      return <LocalPharmacy {...iconProps} />;
    case "LocalPizza":
      return <LocalPizza {...iconProps} />;
    case "Redeem":
      return <Redeem {...iconProps} />;
    case "SmokingRooms":
      return <SmokingRooms {...iconProps} />;
    case "SportsBasketball":
      return <SportsBasketball {...iconProps} />;
    case "Theaters":
      return <Theaters {...iconProps} />;
    case "Tv":
      return <Tv {...iconProps} />;
    case "Backpack":
      return <Backpack {...iconProps} />;
    case "Bed":
      return <Bed {...iconProps} />;
    case "Brush":
      return <Brush {...iconProps} />;
    case "Build":
      return <Build {...iconProps} />;
    case "Camera":
      return <Camera {...iconProps} />;
    case "CameraAlt":
      return <CameraAlt {...iconProps} />;
    case "Casino":
      return <Casino {...iconProps} />;
    case "ChildFriendly":
      return <ChildFriendly {...iconProps} />;
    case "CloudUpload":
      return <CloudUpload {...iconProps} />;
    case "Computer":
      return <Computer {...iconProps} />;
    case "CreditScore":
      return <CreditScore {...iconProps} />;
    case "Dehaze":
      return <Dehaze {...iconProps} />;
    case "DesktopMac":
      return <DesktopMac {...iconProps} />;
    case "Dining":
      return <Dining {...iconProps} />;
    case "ElectricalServices":
      return <ElectricalServices {...iconProps} />;
    case "EventSeat":
      return <EventSeat {...iconProps} />;
    case "FactCheck":
      return <FactCheck {...iconProps} />;
    case "FamilyRestroom":
      return <FamilyRestroom {...iconProps} />;
    case "FastfoodOutlined":
      return <FastfoodOutlined {...iconProps} />;
    case "Flatware":
      return <Flatware {...iconProps} />;
    case "Flight":
      return <Flight {...iconProps} />;
    case "Games":
      return <Games {...iconProps} />;
    case "Gavel":
      return <Gavel {...iconProps} />;
    case "Grade":
      return <Grade {...iconProps} />;
    case "Grass":
      return <Grass {...iconProps} />;
    case "Highlight":
      return <Highlight {...iconProps} />;
    case "HomeRepairService":
      return <HomeRepairService {...iconProps} />;
    case "HowToVote":
      return <HowToVote {...iconProps} />;
    case "ImportContacts":
      return <ImportContacts {...iconProps} />;
    case "InsertChart":
      return <InsertChart {...iconProps} />;
    case "Kitchen":
      return <Kitchen {...iconProps} />;
    case "LocalActivity":
      return <LocalActivity {...iconProps} />;
    case "LocalShipping":
      return <LocalShipping {...iconProps} />;
    case "Mediation":
      return <Mediation {...iconProps} />;
    case "MenuBook":
      return <MenuBook {...iconProps} />;
    case "Nightlife":
      return <Nightlife {...iconProps} />;
    case "Paid":
      return <Paid {...iconProps} />;
    case "Park":
      return <Park {...iconProps} />;
    case "PersonalVideo":
      return <PersonalVideo {...iconProps} />;
    default:
      console.warn(`Icon "${iconName}" not found in MUI icons.`);
      return <Help {...iconProps} />;
  }
};
