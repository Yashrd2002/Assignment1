import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const CarContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <CarContext.Provider
      value={{
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

const Car = () => {
  return useContext(CarContext);
};
export { Car };
