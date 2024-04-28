import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing"
// import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import MarketsNavBar from "./components/MarketsNavBar"
import Home from "./components/Home"
import Withdraw from "./components/Withdraw"
import Deposit from "./components/Deposit"








const App = () => {
  return (
    <div>
      {/* <Landing/> */}
      {/* <NavBar /> */}
      {/* <SideBar /> */}
      {/* <MarketsNavBar /> */}
      {/* <Home /> */}
      <Withdraw />
      <Deposit />


    </div>
  )
}

export default App;
