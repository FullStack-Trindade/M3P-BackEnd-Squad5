module.exports.throwError = (msg, errorStatus=500) => {
  const err = new Error(msg);
  err.status = errorStatus;
  throw err;
}