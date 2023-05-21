import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./Banner";
import Catagorys from "./Catagorys";
import Delivary from "./Delivary";
import Gallary from "./Gallary";
import Statistic from "./Statistic";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <Catagorys></Catagorys>
      <Statistic></Statistic>
      <Delivary></Delivary>
      <ToastContainer />
    </div>
  );
};

export default Home;
