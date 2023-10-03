import React from "react";
import Card from "./Card";
import cars from "../data/Cars.json"
const CardList = ({searchQuery,id}) => {

  const LastCard = id * 6;
  const FirstCard = LastCard- 6;

  const filteredCars = cars
  .filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(FirstCard,LastCard)


  return (
    <div className="flex flex-wrap gap-12 mt-4">
    {filteredCars.map((car)=>(
      <Card car={car} key={car?.id}/>
    ))}
    </div>
  );
};

export default CardList;
