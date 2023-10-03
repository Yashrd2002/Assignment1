
import { AiOutlineSearch } from "react-icons/ai";

const Filters = ({searchQuery,setSearchQuery}) => {


  return (
    <div className=" p-3 items-center shadow border border-[#d8cdcd53] rounded-xl">
      <div className="flex w-[320px] justify-between bg-white p-1 rounded-2xl px-4 items-center font-semibold">
        <input
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          placeholder="Search..."
          className=" outline-none bg-transparent text-[#635f5f]"
        />
        <AiOutlineSearch className="text-xl" />
      </div>
    </div>
  );
};

export default Filters;
