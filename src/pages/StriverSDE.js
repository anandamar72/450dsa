import Navbar from "./Navbar"
import Pro1 from "./Pro1";
import data from "../STriverSDEData";
import Head from "next/head";

const StriverSDE = () => {
  return (
    <>

    <Head>
      <title>SDE Sheet by Striver</title>
      <meta
        name="description"
        content="SDE Sheet by Striver"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
        <div>
      <div className="w-full h-full dark:bg-[#18191A]  mt-16 ">
        <Navbar />

        {/* SHEETS NAME STARTS FROM HERE */}

        <div class=" flex justify-center items-center h-10 pt-3  ">
          <p class="  dark:text-[#ffffff] text-2xl font-bold  ">
            SDE Sheet by Striver
          </p>
           


        </div>
        {/* SHEETS NAME END FROM HERE */}

        {/* SHEETS STARTS FROM HERE */}

        <div className="  w-full h-full mx-auto items-center ">
          <div class="rounded-lg w-full   "></div>

          {/* SHEETS STARTS FROM HERE */}

          {/* {data.map((obj) => (
            <Pro1 data={obj} />
          ))} */}
          {data.map((obj, index) => (
  <Pro1 key={index} data={obj} />
))}
        </div>
      </div>
    </div>

    </>
  )
}

export default StriverSDE