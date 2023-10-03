import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Pagination = ({id}) => {
    const navigate = useNavigate();

  return (
    <div className="flex p-3 mt-4 items-center justify-between shadow-lg border border-[#d8cdcd53] rounded-xl">
      <div>{id} from 10</div>
      <div className="flex gap-3">
        {id ==1 ||<div className="border-2 text-sm bg-white shadow flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg" onClick={()=>navigate(`/page/${parseInt(id)-1}`)}>
          <FaArrowLeftLong />
        </div>}
        
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==1&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/1")}>1</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==2&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/2")}>2</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==3&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/3")}>3</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==4&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/4")}>4</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==5&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/5")}>5</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==6&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/6")}>6</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==7&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/7")}>7</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==8&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/8")}>8</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==9&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/9")}>9</div>
        <div className={`border-2 text-sm bg-white shadow flex items-center justify-center w-7 h-7 rounded-lg cursor-pointer ${id==10&&"bg-[#1352a9] text-white"}`} onClick={()=>navigate("/page/10")}>10</div>
        {id ==10 ||<div className="border-2 text-sm bg-white shadow flex items-center justify-center cursor-pointer w-7 h-7 rounded-lg" onClick={()=>navigate(`/page/${parseInt(id)+1}`)}>
          <FaArrowRightLong />
        </div>}
        
      </div>
    </div>
  );
};

export default Pagination;
