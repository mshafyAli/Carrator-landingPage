import { useState } from "react";
import mainbg from "./assets/mainbg.jpg";
import CartPage from "./Components/CartPage";
import Navbar from "./Components/Navbar";
import Pos from "./assets/Pos.png";
import LoudSpeaker from "./assets/LoudSpeaker.png";

function App() {
  return (
    <>
      <div>
        {/* { bg-[#E5561C]} */}

        <div className="w-full bg-white relative flex">
          <div
            className="relative h-[832px] w-[1059px] bg-cover bg-center"
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

              {/* main Content */}

              <div className="py-[6rem] px-[70px]">
                <p className="text-7xl p-2 text-white font-[900]">Join Our</p>
                <p className="text-7xl p-2 text-white font-[900]">EcoSystem</p>
                <p className="text-7xl p-2 text-white font-[900]">
                  and rule the
                </p>
                <p className="text-7xl p-2 text-white font-[900]">Market</p>
              </div>

              <div className="pl-[100px]">
                <button className="w-[155.7px] h-[50px] bg-[#F2C94C] text-[20px]  font-[600] text-[#333333] rounded-[30px]">
                  Get it now
                </button>
              </div>
            </div>
          </div>
          <div className="pl-[14rem] py-8">
            <button className="w-[151px] h-[40px] bg-[#FF7917] text-[16px] font-[600] text-white rounded-[30px]">
              For Restaurant
            </button>
          </div>
          {/* // want to add picture in center with position fixed */}

          <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={Pos}
              alt="Centered Fixed"
              className="w-[758px] h-[476px]"
            />
          </div>
        </div>

        <div className="bg-[#0F0B06] w-full h-[114px] flex items-center justify-center">
          {/* <div className=""> */}
            <img src={LoudSpeaker} alt="" />
            <p className="text-white text-[32px] p-4">
              Onboarding the next 100 restaurants for free from Pakistan
            </p>
          {/* </div> */}
        </div>
        {/* Cart */}

        <CartPage />
      </div>
    </>
  );
}

export default App;
