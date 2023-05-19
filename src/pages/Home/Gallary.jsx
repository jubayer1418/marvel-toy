import img1 from "../../assets/image/gallary/img1.webp";

import img2 from "../../assets/image/gallary/img2.jpg";
import img3 from "../../assets/image/gallary/img3.jpg";
import img4 from "../../assets/image/gallary/img4.jpg";
import img5 from "../../assets/image/gallary/img5.jpg";
import img6 from "../../assets/image/gallary/img6.jpg";
const Gallary = () => {
  return (
    <>
      <div className="divider text-3xl font-bold text-green-500 py-20 ">
        Gellary Section
      </div>
      <div className="grid gap-4 shadow-xl">
        <div className="shadow-2xl">
          <img className="h-auto max-w-full rounded-lg" src={img1} alt="" />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="shadow-2xl">
            <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
          </div>
          <div className="shadow-2xl">
            <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
          </div>
          <div className="shadow-2xl">
            <img className="h-auto max-w-full rounded-lg" src={img4} alt="" />
          </div>
          <div className="shadow-2xl">
            <img className="h-auto max-w-full rounded-lg" src={img5} alt="" />
          </div>
          <div className="shadow-2xl">
            <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
