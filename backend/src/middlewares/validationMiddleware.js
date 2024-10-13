import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

const signinSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(4, "Password must be at least 4 character long"),
});

export const validateSignup = (req, res, next) => {
  try {
    signupSchema.parse(req.body);
    next();
  } catch (error) {
    res
      .status(400)
      .json({ msg: error.errors.map((err) => err.message).join(", ") });
  }
};

export const validateSignin = (req, res, next) => {
  try {
    signinSchema.parse(req.body);
    next();
  } catch (error) {
    res
      .status(400)
      .json({ msg: error.errors.map((err) => err.message).join(", ") });
  }
};
