export function capitalize(str) {
  const firstLetterCap = str.charAt(0).toUpperCase();

  const remainingLetters = str.slice(1);

  return firstLetterCap + remainingLetters;
}
