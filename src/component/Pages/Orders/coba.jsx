import React from "react";
import PaymentMethod from "./coba2";
import OrderDetail from "./order2";
import Biodata from "./biodata";
import Example from "./order1";

const Payment = () => {
  return (
    <>
      <div className="mb-16">
        <div className="flex justify-center w-full max-w-screen-lg gap-6 px-4 py-2 m-auto lg:px-8 lg:pt-4">
          <Biodata />
          <OrderDetail />
        </div>
      </div>
    </>
  );
};

export default Payment;