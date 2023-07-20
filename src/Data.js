import faker from "faker";

const data = Array.from({ length: 120 }, (_, id) => ({
  id: id + 1,
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  active: true,
}));

export { data };
