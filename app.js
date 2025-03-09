const pokes = getPokes();
console.log("Pokes", pokes);

const type = "grass";
const answer1 = pokes
  .filter(poke => poke.types.includes(type))
  .map(poke => poke.name);

const types = ["bug", "poison"];
// For "OR": select if at least one of the types is included in the Pokemon's types
const answer2Or = pokes
  .filter(poke => types.some(t => poke.types.includes(t)))
  .map(poke => poke.name);

const answer2And = pokes
  .filter(poke => types.every(t => poke.types.includes(t)))
  .map(poke => poke.name);

console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}
