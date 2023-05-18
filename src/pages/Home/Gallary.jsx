import img1 from "../../assets/image/gallary/img1.jpg";
import img2 from "../../assets/image/gallary/img2.jpg";
import img3 from "../../assets/image/gallary/img3.jpg";
import img4 from "../../assets/image/gallary/img4.jpg";
import img5 from "../../assets/image/gallary/img5.jpg";
import img6 from "../../assets/image/gallary/img6.jpg";
const Gallary = () => {
  return (
    <section className="text-gray-600 body-font py-10">
      <div className="divider text-3xl font-bold text-green-500 ">
        Gallary Section
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={img1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={img2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={img3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={img4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={img5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={img6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
