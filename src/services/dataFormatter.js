module.exports.formatPhoneNumber = (number) => {
  const regexPhoneNumber = /(\d{2})(\d{1})?(\d{4})(\d{4})/;
  const groups = number.match(regexPhoneNumber);

  if (groups) {
    let phoneFormatted = `(${groups[1]})`;
    if (groups[2]) {
      phoneFormatted += ` ${groups[2]}`;
    }
    phoneFormatted += ` ${groups[3]} ${groups[4]}`;

    return phoneFormatted;
  } else {
    return "Número de telefone inválido";
  }
};
