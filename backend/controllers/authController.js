const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Email = require("../util/email");
const { v4: uuidv4 } = require("uuid");

const JWT_SECRET = process.env.JWT_SECRET;

exports.login = (req, res, next) => {
  res.render("login");
};

exports.loginUser = (req, res, next) => {
    const enteredLoginData = req.body;
    const email = enteredLoginData.email;
    const password = enteredLoginData.password;

  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        return res.status(401).send("Invalid email or password");
      }
      bcrypt
        .compare(password, user.password)
        .then((match) => {
          if (!match) {
            return res.status(401).send("Invalid email or password");
          }
          const token = jwt.sign({ userId: user.id }, JWT_SECRET);
          // res.setHeader('Set-Cookie', `jwt=${token}; HttpOnly`);
          res.cookie("jwt", token, { httpOnly: true });
          res.status(200).json({ message: "Login successful" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ message: "Internal Server Error" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

exports.signup = (req, res, next) => {
  res.render("signup");
};
// modify this code to be used as api in nextjs:
// modify the following nextjs file to use the above nodejs file:
// Do i have to do any modifications to the API endpoint file?
exports.signupUser = (req, res, next) => {
  const enteredSignupData = req.body;
  const name = enteredSignupData.name;
  const email = enteredSignupData.email;
  const password = enteredSignupData.password;
  const id = uuidv4();

  console.log("Trial", name, email, password);
  
  bcrypt.genSalt(12, (err, salt) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    bcrypt.hash(password, salt, (err, hashedPassword) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'An error occurred' });
      }

      User.create({
        id: id,
        name: name,
        email: email,
        password: hashedPassword,
      })
        .then(() => res.status(201).json({ message: 'User created successfully' }))
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: 'Failed to create user' });
        });
    });
  });
};

exports.resetPassword = (req, res, next) => {
  res.render("reset-password");
};

exports.resetPasswordSubmit = (req, res, next) => {
  const { email } = req.body;

  User.findOne({ where: { email: email } })
    .then((user) => {
      if (user) {
        Email.sendResetPasswordEmail(email);
        res.status(200).json({ message: 'Reset password email sent successfully.' });
      } else {
        res.status(404).json({ message: 'No account with that email address exists.' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'An error occurred.' });
    });
};

exports.updatePassword = (req, res, next) => {
  const token = req.params.token;

  User.findOne({ where: { token: token } })
    .then((user) => {
      res.render("update-password", { user: user.toJSON() });
    })
    .catch((error) => console.log(error));
};

exports.updatePasswordSubmit = (req, res, next) => {
  const password = req.body.password;
  const token = req.params.token;

  User.findOne({ where: { token: token } })
    .then((user) => {
      bcrypt.hash(password, 12, (err, hashedPassword) => {
        user
          .update({
            password: hashedPassword,
            token: null,
          })
          .then(() => {
            console.log("Your password has been reset!");
            res.redirect("/login");
          })
          .catch(() => {
            console.log("Error updating password.");
            res.redirect("/reset-password");
          });
      });
    })
    .catch((error) => console.log(error));
};
