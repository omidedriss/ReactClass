let Menues = [
  {
    name: "Home",
    number: 1,
    description: <h2>Home description </h2>,
  },
  {
    name: "About",
    number: 2,
    description: <h2>About </h2>,
  },
  {
    name: "Contact",
    number: 3,
    description: <h2>Contact </h2>,
  },
];
export function getMenues() {
  return Menues;
}
export function getMenu(number) {
  return Menues.find((menu) => menu.number === number);
}
