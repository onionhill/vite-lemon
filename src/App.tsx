
import './App.css'

import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import ConfirmationPage from "./components/pages/ConfirmationPage.tsx";
import ReservationPage from "./components/pages/ReservationPage.tsx"


function App() {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<ReservationPage/>} path="/reservations"/>
      <Route element={<ConfirmationPage/>} path="/confirmation"/>
    </Routes>
  );
}
export default App
