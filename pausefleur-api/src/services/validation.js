export default schema => ({ body }, res, next) => {
  const { error } = schema.validate(body);
  if (error) {
    next(error);
  } else {
    next();
  }
};
