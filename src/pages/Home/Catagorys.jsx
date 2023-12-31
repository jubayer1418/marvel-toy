import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
const Catagorys = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://assinment-11-server-tau.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="py-20 shadow-2xl my-10">
      <div className="divider text-3xl font-bold text-green-500 py-10 ">
        Catagory Section
      </div>
      <Tabs data-aos="fade-up" data-aos-duration="3000" className="text-center">
        <TabList>
          <Tab>Star wars</Tab>
          <Tab>Marvel</Tab>
          <Tab>Transformers</Tab>
        </TabList>

        <TabPanel className="md:flex justify-center">
          <div className="md:flex gap-5">
            {categories.slice(0, 2).map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="md:flex justify-center">
          <div className="md:flex gap-5">
            {categories.slice(2, 4).map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="md:flex justify-center">
          <div className="md:flex gap-5">
            {categories.slice(4, 6).map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Catagorys;
