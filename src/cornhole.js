const readlineSync = require("readline-sync");

const LENGTH = 48;
const WIDTH = 24;
const DIAMETER = 6;

let rectangleSurfaceArea= LENGTH * WIDTH;
let circleSurfaceArea = Math.PI * ((DIAMETER / 2) ** 2);

let boardSurfaceArea = rectangleSurfaceArea - circleSurfaceArea
boardSurfaceArea = boardSurfaceArea.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nThe surface area of a standard Cornhole board is " + boardSurfaceArea + " square inch(es).\n");
