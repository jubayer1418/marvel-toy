const Delivary = () => {
  return (
    <section className="text-gray-600 body-font shadow-2xl my-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://www.instacart.com/assets/landing/value_props/groceries-30b917a3681004ebf92b947c28c43434db097939fd6b6e58298a46115ff2df3a.png"
              alt=""
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Fast delivery
            </h2>
            <p className="leading-relaxed text-base">
              Get in as fast as 1 hour
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-right text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              It’s all local
            </h2>
            <p className="leading-relaxed text-base">Shop your favorites</p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://www.instacart.com/assets/landing/value_props/stores-0df812d73f92afedb2e254e87490516b09533ea7efa2b5805214b82e274308df.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://www.instacart.com/assets/landing/value_props/phone-7131aaeae457dbaebd8f03c9be416a97b5b10b72fa1aff4dad6ad5204c5ed35f.png"
              alt=""
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Direct chat
            </h2>
            <p className="leading-relaxed text-base">Connect with shoppers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivary;
