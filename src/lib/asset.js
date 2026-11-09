export function asset(path) {
  const clean = String(path).replace(/^\//, "");
  return `./${clean}`;
}
