const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please all the valid Data!");
  }
  // Check user
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }
  // Hash password

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create User

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      img: user.img,
      profession: user.profession,
      token: getToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not created please try again later!");
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(500);
    throw new Error("Provide all require field!");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      img: user.img,
      profession: user.profession,
      token: getToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Credential doesn't match!");
  }
});

module.exports = {
  createUser,
  loginUser,
};
