import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid py-5 text-black border-t-2 md:grid-cols-4 md:gap-4 border-gray-300/10">
            {/* brand info section */}
            <div className="px-4 py-8 space-y-4">
              <div className="flex items-center gap-2 text-2xl font-bold uppercase">
                <MdComputer className="text-4xl text-secondary" />
                <p className="">E-Tutor</p>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                accusamus nulla labore cumque id ipsum molestias architecto
                voluptatum saepe ab.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="#" className="duration-200 hover:text-secondary">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="duration-200 hover:text-secondary">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="duration-200 hover:text-secondary">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="duration-200 hover:text-secondary">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links  */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="px-4 py-8">
                <h1 className="mb-5 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 py-8">
                <h1 className="mb-5 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 py-8">
                <h1 className="mb-5 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="duration-200 hover:text-secondary">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-8">
            <div className="py-6 text-center border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                {" "}
                @copyright 2024 The Coding Journey
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;