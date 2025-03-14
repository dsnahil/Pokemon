const pokes = [
  { name: "Bulbasaur", types: ["grass", "poison"] },
  { name: "Caterpie", types: ["bug"] },
  { name: "Weedle", types: ["bug", "poison"] },
  { name: "Oddish", types: ["grass", "poison"] }
];

console.log("Pokes", pokes);

const type = "grass";
const answer1 = pokes
  .filter(poke => poke.types.includes(type))
  .map(poke => poke.name);

const types = ["bug", "poison"];

const answer2Or = pokes
  .filter(poke => types.some(t => poke.types.includes(t)))
  .map(poke => poke.name);

const answer2And = pokes
  .filter(poke => types.every(t => poke.types.includes(t)))
  .map(poke => poke.name);

console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);
