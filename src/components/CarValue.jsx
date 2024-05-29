import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { searchTerm, data } }) =>
    data
      .filter(({ name }) => name.toLowerCase().includes(searchTerm))
      .reduce((sum, car) => (sum += car.cost), 0)
  );
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
