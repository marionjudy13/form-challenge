import React from "react";

function AddressForm({ toggleState }) {
  return (
    <div
      className={
        toggleState === 1 ? "block mt-10 mx-10 max-w-[640px]" : "hidden"
      }
    >
      {console.log(toggleState, "togglestate")}
      <h1 className="text-[28px] font-medium mb-6">Delivery Address</h1>
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
        {/* Street Address 1 */}
        <div className="flex flex-wrap mb-6 basis-full">
          <label className="font-normal mb-2" for="address">
            Street Address 1
          </label>
          <input
            className="w-full p-4 h-12 rounded border border-lighterGray focus:outline-none focus:border-blue"
            type="text"
            id="address"
            name="address"
            placeholder="Street Address 1"
          />
        </div>
        {/* Street Address 2 */}
        <div className="flex flex-wrap mb-6 basis-full">
          <label className="font-normal mb-2" for="address2">
            Street Address 2
          </label>
          <input
            className="w-full p-4 h-12 rounded border border-lighterGray focus:outline-none focus:border-blue"
            type="text"
            id="address2"
            name="address2"
            placeholder="Street Address 2"
          />
        </div>
        {/* City */}
        <div className="flex flex-wrap mb-6 basis-full  md:basis-[49.5%]">
          <label className="font-normal mb-2" for="City">
            City
          </label>
          <input
            className="w-full p-4 h-12 rounded border border-lighterGray focus:outline-none focus:border-blue"
            type="text"
            id="city"
            name="city"
            placeholder="City"
          />
        </div>
        {/* State */}
        <div className="flex flex-wrap mb-6 basis-[49.5%]  md:basis-[24.5%]">
          <label className="font-normal mb-2" for="state">
            State
          </label>
          <input
            className="w-full p-4 h-12 rounded border border-lighterGray focus:outline-none focus:border-blue"
            type="text"
            id="state"
            name="state"
            placeholder="State"
          />
        </div>
        {/* Zip */}
        <div className="flex flex-wrap mb-6 basis-[49.5%]  md:basis-[24.5%]">
          <label className="font-normal mb-2" for="zip">
            Zip
          </label>
          <input
            className="w-full p-4 h-12 rounded border border-lighterGray focus:outline-none focus:border-blue"
            type="text"
            id="zip"
            name="zip"
            placeholder="Zip"
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

export default AddressForm;
