import Dish from "./Dish.tsx";
import "./styles/Specials.css";

function Specials() {
  return (
    <div className="specials">
      <div className="specials-header">
        <h1>This weeks Specials!</h1>
        <div className="">
          <button className="btn button-container-specials">Online Menu</button>
        </div>
      </div>

      <Dish />
    </div>
  );
}

export default Specials;
