import React from "react";
import bg2 from "../assets/bg2.jpg";

const CartPage = () => {
  return (
    <>
      <div
        className={`bg-cover bg-center bg-[#FEF4DE] bg-opacity-50 h-[832px] w-full`}
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="py-10 flex justify-center items-center">
          <h1 className="font-500 text-[44px]">POS</h1>
          <h2 className="font-500 text-[44px] text-[#FF7917] ml-4">Pricing</h2>
        </div>

        {/* Cards */}

        <div className="py-[1rem]">
          <div className="max-w-[1114.75px] mx-auto md:mx-auto md:grid grid-cols-3 gap-5">
            {/* 1st Card     */}
            <div className="w-[365.46px] h-[552.19px] bg-[#FFFFFF] shadow-xl rounded-lg  hover:scale-105 duration-100 my-4">
              {/* color Code */}
              <div className="w-full h-[17.23px] rounded-t-lg bg-[#3FA5FB]"></div>

              <div className="w-full  flex items-center justify-center py-12">
                <div className="text-center">
                  <h4 className="text-[#46B4FB] font-[800] text-[20px]">
                    Basic
                  </h4>
                  <h1 className="text-4xl font-bold font-500 text-[#000000]">
                    Always Free
                  </h1>
                  <p className="text-[#000000] text-[15px]  font-semibold py-6">
                    includes:
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="mx-10">
                  <ol className="list-decimal text-left  text-[17px]">
                    <li>Complete on-boarding on mobile App</li>
                    <li>Complete AR based 3D menu</li>
                    <li>
                      Users can scan QR codes from the table and place an order
                    </li>
                    <li>Multiple table identification</li>
                    <li>Order receiving desktop application</li>
                    <li>Order management</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* 2nd Card */}
            <div className="w-[365.46px] h-[612px] bg-[#FFFFFF] shadow-xl rounded-lg  hover:scale-105 duration-100 my-4">
              {/* color Code */}
              <div className="w-full h-[17.23px] rounded-t-lg bg-[#6F5DFC]"></div>
              <div className="w-full  flex items-center justify-center py-12">
                <div className="text-center">
                  <h4 className="text-[#46B4FB] font-[800] text-[20px]">
                    ESSENTIALS
                  </h4>
                  <h1 className="text-4xl font-bold font-500 text-[#000000]">
                    $100/mo
                  </h1>
                  <p className="text-[#000000] text-[15px]  font-semibold py-6">
                    Everything in the basic plan+
                  </p>

                  <div className="flex items-center justify-center">
                    <div className="mx-10">
                      <ol className="list-decimal text-left  text-[15px]">
                        <li>Advanced order management</li>
                        <li>Menu management</li>
                        <li>Table management (Floor management as well)</li>
                        <li>Inventory management</li>
                        <li>Billing and invoicing</li>
                        <li>Reservation management</li>
                        <li>Delivery order receive</li>
                        <li>Employee management</li>
                        <li>Payroll management</li>
                        <li>Customer chat</li>
                        <li>Customer history</li>
                        <li>Analytics</li>
                        <li>Received/view feedback</li>
                        <li>Report generation</li>
                        <li>Manage roles and access</li>
                        <li>Cashier management</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd Card */}
            <div className="w-[365.46px] h-[552.19px] bg-[#FFFFFF] shadow-xl rounded-lg  hover:scale-105 duration-100 my-4">
              {/* color Code */}
              <div className="w-full h-[17.23px] rounded-t-lg bg-[#263154]"></div>

              <div className="w-full  flex items-center justify-center py-12">
                <div className="text-center">
                  <h4 className="text-[#46B4FB] font-[800] text-[20px]">
                    Pro
                  </h4>
                  <h1 className="text-4xl font-bold font-500 text-[#000000]">
                    $125/mo
                  </h1>
                  <p className="text-[#000000] text-[15px]  font-semibold py-6">
                    Everything in the Essentials +
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="mx-10">
                  <ol className="list-decimal text-left  text-[17px]">
                    <li>In-app marketing</li>
                    <li>Special highlights in app</li>
                    <li>Assistance with “Growth Wizard” AI</li>
                    <li>Heatmap (show which area generate most orders)</li>
                    <li>Multiple branch management</li>
                    <li>Third party integrations</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
