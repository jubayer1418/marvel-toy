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
    </div>
  );
};

export default Home;
