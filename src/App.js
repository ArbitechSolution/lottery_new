
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import BuyTickets from './component/BuyTickets/BuyTickets';
import BuyPointOne from './component/BuyPointOne/BuyPointOne';
import NextDraw from './component/NextDraw/NextDraw';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BuyTickets/>
      <BuyPointOne/>
      <NextDraw/>
    </div>
  );
}

export default App;
