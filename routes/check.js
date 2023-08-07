const express = require("express");
const path = require("path");
module.exports = (app, path) => {
  // static route for serving the HTML/CSS/JS files
  app.use("/", express.static(path.join(__dirname, "../www")));

  // Home route: Serving the login form
  app.get("/", (req, res) => {
    let filepath = path.resolve("./www/login.html");
    res.sendFile(filepath);
  });

  // Account route: Serving the account info page
  app.get("/account", (req, res) => {
    let filepath = path.resolve("./www/account.html");
    res.sendFile(filepath);
  });

  // Hardcoded user credentials
  const users = [
    { email: "user1@example.com", password: "123" },
    { email: "user2@example.com", password: "123" },
    { email: "user3@example.com", password: "123" },
  ];

  // POST route for checking user credentials
  app.post("/login", (req, res) => {
    let { email, password } = req.body;
    let validUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (validUser) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  });
};
