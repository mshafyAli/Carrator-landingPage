import { useState } from "react";
import mainbg from "./assets/mainbg.jpg";
import CartPage from "./Components/CartPage";

function App() {
  return (
    <>
    <div>
      
    
      <div className="w-full bg-white">
        <div
          className={`bg-cover bg-center bg-[#E5561C]  h-[832px] w-[1059px]`}
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <h1 className="text-white text-4xl font-bold">Hello, World!</h1>
        </div>
      </div>

      <div className="bg-[#0F0B06] w-full h-[114px]">

      </div>
      {/* Cart */}

      <CartPage/>

      </div>
    </>
  );
}

export default App;
