import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
import { CarContextProvider } from "./context/CarContext";

function App() {
  return (
    <CarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/page/1" replace={true} />} />
          <Route path="/page/:id" element={<CardListPage />} />
        </Routes>
      </BrowserRouter>
    </CarContextProvider>
  );
}

export default App;
