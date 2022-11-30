import React, { useState } from "react";
import Head from "next/head";
import Address from "./Components/AddressForm";
import CheckoutForm from "./Components/CheckoutForm";

export default function Home() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log("I'm working!", index);
    setToggleState(index);
  };

  return (
    <>
      <Head>
        <title>Cerkl Checkout Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-wrap justify-center w-full">
        <div className="flex justify-center border-b border-gray bg-white w-full font-medium">
          <button
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? "text-base py-6 min-w-[200px] border-b-4 border-blue"
                : "text-base py-6 min-w-[200px] border-b-4 border-transparent"
            }
          >
            Address
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? "text-base py-6 min-w-[200px] border-b-4 border-blue"
                : "text-base py-6 min-w-[200px] border-b-4 border-transparent"
            }
          >
            Checkout
          </button>
        </div>
        <Address toggleState={toggleState} />
        <CheckoutForm toggleState={toggleState} />
      </section>
    </>
  );
}

// To Do:
// - Add State Drop Down
// - Add Cancel Button
// - Fill out Checkout Page
// - Separate Tab Buttons to Separate Component
// - Replace Tab Border with Rounded Span
