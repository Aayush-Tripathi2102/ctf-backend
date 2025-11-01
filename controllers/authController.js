import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const ADMIN_EMAILS = ["aayushtripathi2102@gmail.com"];

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (await User.findOne({ email }))
      return res.status(400).json({ message: "Email already registered" });

    if (await User.findOne({ username }))
      return res.status(400).json({ message: "Username taken" });

    const role = ADMIN_EMAILS.includes(email) ? "admin" : "member";

    const user = await User.create({ username, email, password, role });
    res.status(201).json({
      success: true,
      token: generateToken(user),
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      success: true,
      token: generateToken(user),
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).populate("team");
  res.json(user);
};
