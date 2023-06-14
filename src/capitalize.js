const capitalize = (text) => {
  const firstSymbol = text[0] || ''; // Get the first symbol of the text
  const restSymbols = text.slice(1); // Get the rest of the symbols
  return `${firstSymbol.toUpperCase()}${restSymbols}`;
};

export default capitalize;
