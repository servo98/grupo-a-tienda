// De dónde sacamos el schema
const validateBody = (schema) => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);

    req.body = value;
    next();
  } catch (err) {
    return res.status(400).json({
      meesage: "Invalid Body",
      error: err,
    });
  }
};

export default validateBody;
