import Navbar from "./Navbar";
import Pro from "./Pro";
import  Head from "next/head";

// Import the 450DSAFinal.js file here
import data from "../450DSAFinal.js";

const Love = () => {
  return (
    <>
        
    <Head>
      <title>450 DSA Sheet by Love Babbar</title>
      <meta
        name="description"
        content="450 DSA Sheet by Love Babbar"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>



    
    <div>
      <div className="w-full h-full dark:bg-[#18191A]  mt-16 ">
        <Navbar />

        {/* SHEETS NAME STARTS FROM HERE */}

        <div class=" flex justify-center items-center h-10 pt-3  ">
          <p class="  dark:text-[#ffffff] text-2xl font-bold  ">
            DSA Sheet by Love Babbar
          </p>
           


        </div>
        {/* SHEETS NAME END FROM HERE */}

        {/* SHEETS STARTS FROM HERE */}

        <div className="  w-full h-full mx-auto items-center ">
          <div class="rounded-lg w-full   "></div>

          {/* SHEETS STARTS FROM HERE */}

          {/* {data.map((obj) => (
            <Pro  data={obj} />
          ))} */}
          {data.map((obj, index) => (
  <Pro key={index} data={obj} />
))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Love;
