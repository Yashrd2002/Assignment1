import React, { useState } from "react";
import { BsFillPeopleFill, BsSpeedometer2 } from "react-icons/bs";
import { LuFuel } from "react-icons/lu";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const Card = ({car}) => {
    const [liked,setLiked]=useState(false)
  return (
    <div className="w-[435px] border px-4 py-1 pb-3 shadow-md rounded-xl bg-[#ffffff89]">
      <div className="w-88 h-80">
        <img
          src={car?.img}
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-full mt-4">
        <h1 className="text-lg font-bold tracking-wide">{car?.name}</h1>
        <div className="border-2 flex items-center border-dotted border-blue-300 rounded-lg px-2 text-sm">
          {car?.year}
        </div>
      </div>
      <div className="flex flex-col mt-3 text-sm text-[#565353] gap-1">
        <div className="flex">
          <div className="flex items-center gap-2 w-1/2">
            <BsFillPeopleFill className="text-blue-500" />
            <p>{car?.capacity} people</p>
          </div>
          <div className="flex items-center gap-2 w-1/2">
            <LuFuel className="text-blue-500" />
            <p>{car?.engine}</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-2 w-1/2">
            <BsSpeedometer2 className="text-blue-500" />
            <p>{car?.average} km / 1-Litre</p>
          </div>
          <div className="flex items-center gap-2 w-1/2">
            <PiSteeringWheelDuotone className="text-blue-500" />
            <p>{car?.type}</p>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-[#7a78783a] my-4"></div>
      <div className="flex justify-between">
        <div>
        <span className="text-lg font-semibold">${car?.rent}</span> / month
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-[#99d1e898] p-1.5 rounded-lg" onClick={()=>setLiked(!liked)}>
            {liked ? <AiFillHeart className="text-red-500 text-xl" /> : <AiOutlineHeart className="text-xl"/>}
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2"
          >
            Rent now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
