export function formatKey(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // add space before capital letters
    .replace(/^./, (s) => s.toUpperCase()); // capitalize first letter
}
