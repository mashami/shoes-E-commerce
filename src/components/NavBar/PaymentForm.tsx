"use client";

import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

interface PaymentFormProps {
  totalAmount: number;
}
const PaymentForm = ({ totalAmount }: PaymentFormProps) => {
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
        <InputOTP
          maxLength={16}
          pattern={REGEXP_ONLY_DIGITS}
          className="max-w-full  "
        >
          <InputOTPGroup className="flex flex-col space-y-2">
            <InputOTPGroup className="">
              <InputOTPSlot className="" index={0} />
              <InputOTPSlot className="" index={1} />
              <InputOTPSlot className="" index={2} />
              <InputOTPSlot className="" index={3} />
            </InputOTPGroup>

            <InputOTPGroup>
              <InputOTPSlot className="" index={8} />
              <InputOTPSlot className="" index={9} />
              <InputOTPSlot className="" index={10} />
              <InputOTPSlot className="" index={11} />
            </InputOTPGroup>
          </InputOTPGroup>

          <InputOTPGroup className="flex flex-col space-y-2">
            <InputOTPGroup className="">
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>

            <InputOTPGroup className="">
              <InputOTPSlot className="" index={12} />
              <InputOTPSlot className="" index={13} />
              <InputOTPSlot className="" index={14} />
              <InputOTPSlot className="" index={15} />
            </InputOTPGroup>
          </InputOTPGroup>
        </InputOTP>
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
          <InputOTP maxLength={4}>
            <InputOTPGroup className="border border-black rounded-md">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
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
          <span>${totalAmount === 0 ? 0 : totalAmount + 4}</span>
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
