/* eslint-disable react/no-unescaped-entities */
const Statistic = () => {
  return (
    <section className="text-gray-600 body-font shadow-2xl">
      <div
        data-aos="zoom-out-down"
        data-aos-duration="3000"
        className="container px-5 py-24 mx-auto"
      >
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            User and Products Dateils
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
            <iframe
              className="pt-4"
              src="https://embed.lottiefiles.com/animation/66214"
            ></iframe>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
              >
                <path d="M12 1L3 5v14l9 4 9-4V5L12 1zm7.95 17.65L12 21l-7.95-2.35L4 12l.05-.15L12 3l7.95 8.85.05.15-2.05 6.5zM12 17l-4-4h2v-4h4v4h2l-4 4z" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                74
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <iframe src="https://embed.lottiefiles.com/animation/45560"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
