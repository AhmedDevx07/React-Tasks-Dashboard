import { lazy } from "react";

export const TaskComponents = {
  1: lazy(() => import("./RemoveDuplicates")),
  2: lazy(() => import("./ReverseString")),
  3: lazy(() => import("./EvenOddArray")),
  4: lazy(() => import("./FindMax")),
  5: lazy(() => import("./VowelCounter")),
  6: lazy(() => import("./CapitalizeFirst")),
  7: lazy(() => import("./RemoveFalsy")),
  8: lazy(() => import("./ArraySum")),
  9: lazy(() => import("./FindMissing")),
};

export const taskLogics = {
  1: `// Remove Duplicates from Array
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};`,

  2: `// Reverse String from Variable
const reverseString = (str) => {
  return str.split("")
    .reverse()
    .join("");
};`,

  3: `// Even/Odd Numbers from Array
const filterEvenOdd = (arr) => {
  const even = arr.filter(n => n % 2 === 0);
  const odd = arr.filter(n => n % 2 !== 0);
  return { even, odd };
};`,

  4: `// Find Largest Number from Array
const findMax = (arr) => {
  return Math.max(...arr);
};`,

  5: `// Count Vowels in String
const countVowels = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};`,

  6: `// Capitalize First Letter of Each Word
const capitalize = (str) => {
  return str.split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};`,

  7: `// Remove Falsy Values from Array
const cleanArray = (arr) => {
  // Removes: false, null, 0, "", undefined, and NaN
  return arr.filter(Boolean);
};`,

  8: `// Calculate Array Sum
const sumArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};`,

  9: `// Find Missing Numbers in Sequence
const findMissing = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let missing = [];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) missing.push(i);
  }
  return missing;
};`,
};
