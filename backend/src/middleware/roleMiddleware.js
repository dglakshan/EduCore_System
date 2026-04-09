export const redirectTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(STATUS_CODES.FORBIDDEN).json({
        success: false,
        message: "You do not have permission to perform this action",
      });
    }
    next();
  };
};
