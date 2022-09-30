import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import BuyTickets from "./component/BuyTickets/BuyTickets";
import BuyPointOne from "./component/BuyPointOne/BuyPointOne";
import NextDraw from "./component/NextDraw/NextDraw";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";
import PersistentDrawerLeft from "./component/Menu";
import LotteryPage from "./pages/CombineLotteryPage/lotteryPage";
import ClassicLottery from "./pages/classicLottery/classicLotteryPage";
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ToastContainer />
      <Navbar />
      <PersistentDrawerLeft />
      <Routes>
        {/* <Route path="/" element={<LotteryPage />}></Route> */}
        <Route path="/" element={<ClassicLottery />}></Route>
      </Routes>
      {/* <LotteryPage /> */}
      {/* <BuyTickets />
      <BuyPointOne /> */}
      {/* <NextDraw /> */}
      <Footer />
    </div>
  );
}

export default App;
