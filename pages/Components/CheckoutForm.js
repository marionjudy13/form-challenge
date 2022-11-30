import React from "react";

function CheckoutForm({ toggleState }) {
  return (
    <div className={toggleState === 2 ? "mt-10 mx-10 max-w-[640px]" : "hidden"}>
      <h1 className="text-[28px] font-medium mb-6">Checkout</h1>
      <form
        action="/send-data-here"
        method="post"
        className="w-full flex flex-wrap justify-between"
      >
        {/* First Name */}
        <div className="flex flex-wrap mb-6 basis-full md:basis-[49.5%]">
          <label className="font-normal mb-2" for="first">
            First Name
          </label>
          <input
            className="w-full p-4 h-12 rounded border border-lighterGray focus:outline-none focus:border-blue"
            type="text"
            id="first"
            name="first"
            placeholder="First Name"
          />
        </div>
        {/* Last Name */}
        <div className="flex flex-wrap mb-6 basis-full  md:basis-[49.5%]">
          <label className="font-normal mb-2" for="last">
            Last Name
          </label>
          <input
            className="w-full p-4 h-12 rounded border border-lighterGray focus:outline-none focus:border-blue"
            type="text"
            id="last"
            name="last"
            placeholder="Last Name"
          />
        </div>
        <div className="buttons flex flex-wrap mt-4 basis-full">
          <button
            className="w-full h-[40px] b-2 border rounded text-white text-[14px] bg-black"
            type="submit"
          >
            Proceed to Checkout
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
