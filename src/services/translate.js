module.exports.translate = async (word) => {
  const words = {
    casado: "married",
    married: "married",
  };
  return words[word];
};
