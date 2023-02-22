import cars from "@/data/cars.json";

const carList = [];

export const useCars = () => {
  return {
    cars,
  };
};

const getCars = async () => {
  const data = await fetch("http://127.0.0.1:3000/api/purchases")
    .then((response) => response.json())
    .then((response) => {
      response.forEach((car) => {
        carList.push(car);
      });
    });
  return data;
};
getCars();

console.log(carList);
