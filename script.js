const a = 1;
const b = 2;
const c = 3;

if (a === b && b === c) {
  console.log("Les trois variables sont identiques");
} else if (a === b || a === c || b === c) {
  console.log("Deux des variables sont identiques");
} else {
  console.log("Toutes les variables sont différentes");
}
