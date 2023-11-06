module.exports.translate = async (word) => {
  const words = {
    casado: "married",
    married: "married",
    solteiro: "single",
    single: "single",
    divorciado: "divorced",
    divorced: "divorced",
    viuvo: "widowed",
    widowed: "widowed",
    separado: "separated",
    separated: "separated",
  };
  return words[word];
};
