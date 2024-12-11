import { faker } from "@faker-js/faker";

function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://www.pikpng.com/pngl/b/295-2959559_m8-alt-bmw-m8-png-clipart.png",
    miles: 1000,
    gear: "Automatic",
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}



const carlist = faker.helpers.multiple(createRandomCarList, {
  count: 7,
});

export default {
  carlist,
  
};
