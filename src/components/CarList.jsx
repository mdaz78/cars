import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.data);

  const handleCarDelete = (car) => {
    dispatch(removeCar({ id: car.id }));
  };

  const renderedCars = cars.map((car) => (
    <div className="panel" key={car.id}>
      <p>
        {car.name} ${car.cost}
      </p>
      <button className="button is-danger" onClick={() => handleCarDelete(car)}>
        Delete
      </button>
    </div>
  ));

  return (
    <div className="">
      <div>{renderedCars}</div>
      <hr />
    </div>
  );
};

export default CarList;
