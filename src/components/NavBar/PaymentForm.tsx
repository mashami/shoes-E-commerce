"use client";

import React from "react";

interface PaymentFormProps {
  totalAmount: number;
}
const PaymentForm = ({ totalAmount }: PaymentFormProps) => {
  console.log("Amount ====>", totalAmount);

  return (
    <form className="max-w-md mx-auto p-4 space-y-4 flex flex-col justify-center">
      <h2 className="text-lg font-semibold">Payment details</h2>

      {/* <!-- Email Address --> */}
      <div>
        <label className="block text-gray-600 text-sm mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="youremail@example.com"
          className="w-full border border-black focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md"
        />
      </div>

      {/* <!-- Credit Card Number --> */}
      <div>
        <label className="block text-gray-600 text-sm mb-1">
          Credit Card Number
        </label>
        <input
          type="text"
          placeholder="xxxx  xxxx  xxxx  xxxx"
          className="w-full border border-black focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md"
        />
      </div>

      {/* <!-- Expiry Date and CVV --> */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-600 text-sm mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="mm / yy"
            className="w-full border border-black focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-600 text-sm mb-1">CVV</label>
          <input
            type="text"
            placeholder="xxx"
            className="w-full border border-black focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md"
          />
        </div>
      </div>

      {/* <!-- Promo Code Checkbox --> */}
      <div className="flex items-center space-x-2 ">
        <input
          type="checkbox"
          id="promo"
          className="w-4 h-4 text-blue-500 cursor-pointer"
        />
        <label htmlFor="promo" className="text-sm text-gray-700 cursor-pointer">
          I have promo code
        </label>
      </div>

      {/* <!-- Payment Summary --> */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform Fee</span>
          <span>$4</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total Amount</span>
          <span>${totalAmount + 4}</span>
        </div>
      </div>

      {/* <!-- Make Payment Button --> */}
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
        Make Payment
      </button>
    </form>
  );
};

export default PaymentForm;
