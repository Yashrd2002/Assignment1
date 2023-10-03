import React from "react";
import Filters from "../components/Filters";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import { Car } from "../context/CarContext";

const CardListPage = () => {
  const { id } = useParams();
  const { searchQuery, setSearchQuery } = Car();

  return (
    <div className=" bg-[#bdd4f087] min-h-screen">
      <div className="mx-4 py-1 border flex flex-col justify-between min-h-screen">
        <Filters setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <CardList searchQuery={searchQuery} id={id} />
        <Pagination id={id} />
      </div>
    </div>
  );
};

export default CardListPage;
