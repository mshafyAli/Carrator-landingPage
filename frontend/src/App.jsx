import { useState } from "react";
import mainbg from "./assets/mainbg.jpg";
import CartPage from "./Components/CartPage";
import Navbar from "./Components/Navbar";
import Pos from "./assets/Pos.png";
import LoudSpeaker from "./assets/LoudSpeaker.png";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div>
        <div className="w-full bg-white relative flex flex-col md:flex-row">
          <div
            className="relative h-[832px] w-full md:w-[800px] lg:w-[1059px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${mainbg})`,
              clipPath: "polygon(0 0, 100% 0%, 63% 100%, 0% 100%)",
            }}
          >
            <div
              className="absolute inset-0 bg-[#FF7917] opacity-75"
              style={{
                clipPath: "polygon(0 0, 100% 0%, 63% 100%, 0% 100%)",
              }}
            >
              <Navbar />

              {/* Main Content */}
              <div className="py-[6rem] px-[20px] md:px-[70px]">
                <p className="text-4xl md:text-5xl lg:text-7xl p-2 text-white font-[900]">
                  Join Our
                </p>
                <p className="text-4xl md:text-5xl lg:text-7xl p-2 text-white font-[900]">
                  EcoSystem
                </p>
                <p className="text-4xl md:text-5xl lg:text-7xl p-2 text-white font-[900]">
                  and rule the
                </p>
                <p className="text-4xl md:text-5xl lg:text-7xl p-2 text-white font-[900]">
                  Market
                </p>
              </div>

              <div className="px-[20px] md:pl-[100px]">
              <button className="w-[200px] md:w-[155.7px] h-[50px] bg-[#F2C94C] text-[16px] md:text-[20px] font-[600] text-[#333333] rounded-[30px]">
                Get it now
              </button>
            </div>
            </div>
          </div>
          {/** Only render this div on medium and larger screens */}
        <div className="hidden md:flex md:pl-[14rem] py-8">
          <button className="md:w-[151px] h-[40px] bg-[#FF7917] text-[14px] md:text-[16px] font-[600] text-white rounded-[30px]">
            For Restaurant
          </button>
        </div>

          {/* Centered Fixed Image */}
          <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={Pos}
              alt="Centered Fixed"
              className="w-[90%] max-w-[758px] h-auto hidden md:block"
            />
          </div>
        </div>

        <div className="bg-[#0F0B06] w-full h-auto py-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <img src={LoudSpeaker} alt="LoudSpeaker" className="mb-4 md:mb-0 md:mr-4 w-16 h-16 md:w-auto md:h-auto" />
          <p className="text-white text-[16px] md:text-[32px] p-4">
            Onboarding the next 100 restaurants for free from Pakistan
          </p>
        </div>

        {/* Cart */}
        <CartPage />
      </div>
    </>
  );
}

export default App;

