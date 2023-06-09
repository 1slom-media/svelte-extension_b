import model from "./model.js";
import jwt from "../../lib/jwt.js";
import { AuthorizationError,ValidationError } from "../../utils/errors.js";

const LOGIN = async (req, res, next) => {
  try {
    const user = await model.LOGINMODEL(req.body);
    if (user) {
      res.status(200).json({
        status: 200,
        message: "Successfully Login",
        token: jwt.sign({ userId: user.user_id }),
      });
      next();
    } else {
      res.status(401).json({
        status: 401,
        message: "wrong username or  password",
        token: null,
      });
    }
  } catch (error) {
    return next(new AuthorizationError(401,error.message));
  }
};

const REGISTER = async (req, res, next) => {
  try {
    const user = await model.REGISTERMODEL(req.body);
    if (user) {
      res.status(201).json({
        status: 201,
        message: "Successfully Register",
        token: jwt.sign({ userId: user.user_id }),
      });
      next();
    } else {
      res.status(401).json({
        status: 401,
        message: "Already exists",
        token: null,
      });
    }
  } catch (error) {
    return next(new ValidationError(401,error.message));
  }
};

export default {
  LOGIN,
  REGISTER,
};
