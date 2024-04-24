const data = [
  {
    name: "jange",
    umur: 31,
    id: 1,
    price: 10000,
    qty: 2,
  },
  {
    name: "adian",
    umur: 21,
    id: 2,
    price: 20000,
    qty: 1,
  },
  {
    name: "enah",
    umur: 30,
    id: 3,
    price: 30000,
    qty: 3,
  },
];

const jange = data.reduce((total, item) => {
  return total + item.price;
});
const jange2 = data.reduce((total, item) => {
  return (total += item.qty);
});

console.log(jange2);
