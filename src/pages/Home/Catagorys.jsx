import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import marvel1 from "../../assets/image/catagory/marvel1.webp";
import marvel2 from "../../assets/image/catagory/marvel2.webp";
import star1 from "../../assets/image/catagory/star1.jpg";
import star2 from "../../assets/image/catagory/star2.jpg";
import trans1 from "../../assets/image/catagory/trans1.webp";
import trans2 from "../../assets/image/catagory/trans2.jpg";
const Catagorys = () => {
  return (
    <div className="py-20">
      <div className="divider text-3xl font-bold text-green-500 py-10 ">
        Catagory Section
      </div>
      <Tabs className="text-center">
        <TabList>
          <Tab>Star wars</Tab>
          <Tab>Marvel</Tab>
          <Tab>Transformers</Tab>
        </TabList>

        <TabPanel className="flex justify-center">
          <div className="flex gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={star1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Star Wars The Black Series Darth Malgus 6-Inch Action Figure
                </h2>
                <div className="flex justify-between w-full text-green-400 text-xl pb-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <h1>price: $ 30</h1>
                </div>
                <div className="card-actions">
                  <Link to={"/catagoryDetails"} className="btn btn-success">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={star2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Star Wars The Black Series Bastilla Shan 6-Inch Action Figure
                </h2>
                <div className="flex justify-between w-full text-green-400 text-xl pb-4">
                  <h1>Rating: 4.8</h1>
                  <h1>price: $ 70</h1>
                </div>
                <div className="card-actions">
                  <Link to={"/catagoryDetails"} className="btn btn-success">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={marvel1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title"> Thor Stormbreaker Role Play</h2>
                <div className="flex justify-between w-full text-green-400 text-xl pb-4">
                  <h1>Rating: 4.5</h1>
                  <h1>price: $ 39</h1>
                </div>
                <div className="card-actions">
                  <Link to={"/catagoryDetails"} className="btn btn-success">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={marvel2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Avengers Ironman Hero Figure Assortment
                </h2>
                <div className="flex justify-between w-full text-green-400 text-xl pb-4">
                  <h1>Rating: 4.3</h1>
                  <h1>price: $ 35</h1>
                </div>
                <div className="card-actions">
                  <Link to={"/catagoryDetails"} className="btn btn-success">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={trans1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Transformers Generations Legacy Commander Motormaster
                </h2>
                <div className="flex justify-between w-full text-green-400 text-xl pb-4">
                  <h1>Rating: 4.6</h1>
                  <h1>price: $ 30</h1>
                </div>
                <div className="card-actions">
                  <Link to={"/catagoryDetails"} className="btn btn-success">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={trans2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Transformers Generations Legacy Deluxe Wild Rider
                </h2>
                <div className="flex justify-between w-full text-green-400 text-xl pb-4">
                  <h1>Rating: 4.8</h1>
                  <h1>price: $ 90</h1>
                </div>
                <div className="card-actions">
                  <Link to={"/catagoryDetails"} className="btn btn-success">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Catagorys;
