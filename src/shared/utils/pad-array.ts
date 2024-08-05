export function padArrayWithAnother<T>(source: T[], padding: T[]) {
  return padding.map((value, index) => {
    console.log("?", index, source[index], value);
    if (source[index]) return source[index];
    return value;
  });
}
