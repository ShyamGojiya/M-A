module.exports = (theFunc) => {
  return (req, res, next) =>
    // Promise.resolve(theFunc(req,res,next)).catch(next);
    theFunc(req, res, next).catch(next);
};
