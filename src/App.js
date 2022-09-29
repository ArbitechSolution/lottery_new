import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import BuyTickets from "./component/BuyTickets/BuyTickets";
import BuyPointOne from "./component/BuyPointOne/BuyPointOne";
import NextDraw from "./component/NextDraw/NextDraw";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";
import PersistentDrawerLeft from "./component/Menu";
import LotteryPage from "./component/CombineLotteryPage/lotteryPage";
function App() {
  return (
    <div className="App ">
      <ToastContainer />
      <Navbar />
      <PersistentDrawerLeft />
      <LotteryPage />
      {/* <BuyTickets />
      <BuyPointOne /> */}
      <NextDraw />
      <Footer />
    </div>
  );
}

export default App;
