import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";

const Vediotiltle = ({title,overview}) => {
  return (
    <div className="w-[vw] aspect-video  absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className='w-1/3 mt-4' title={overview}>
        {overview.slice(0,100)}...
      </p>
      <div className="flex gap-2 mt-4">
        <button className="px-6 py-2 flex items-center gap-1 bg-white text-black rounded-md hover:bg-white/80 cursor-pointer">
          <CiPlay1 />
          <span>Play</span>
        </button>
        <button className="px-6 py-2 flex items-center gap-1 bg-white text-black rounded-md hover:bg-white/80 cursor-pointer">
          <IoInformationCircleOutline />
          <span>Watch More</span>
        </button>
      </div>
    </div>
  );
}

export default Vediotiltle