import { Link } from "react-router-dom";
import logo from "../../assets/image/banner/logo.webp";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#D1D5DB] text-primary-content">
      <div className="text-black">
        <Link to={"/"}>
          <img className="h-20" src={logo} alt="" />
        </Link>
        <p className="font-bold ">
          Marvel Toy Industries Ltd. <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 ">
          <a href="https://www.youtube.com/@ProgrammingHeroCommunity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-black"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/sk01787351418">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-black"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-black">
        <span className="footer-title">Office Address</span>
        <span className="link link-hover">
          Contect: <a href="">skjubayer@gmail.com</a>
        </span>
        <span className="link link-hover">address:Bheremara,khustia</span>
        <span className="link link-hover">
          Available : Sat - Thu, 10:00 AM to 7:00 PM
        </span>
      </div>
    </footer>
  );
};

export default Footer;
