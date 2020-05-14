const express = require("express");
const app = express();
const Request = require("./models/Request");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(`${__dirname}/public`))

// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')

app.post("/enquiry", async (req, res) => {
  try {
    let requestDetails = {
      name: req.body["name"],
      email: req.body["email"],
      subject: req.body["subject"],
      message: req.body["message"],
    };
    let newRequest = new Request({
      ...requestDetails,
    });
    await newRequest.save();
    res.send({
      success: true,
      message: "Enquiry submitted successfully !",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "Unable to submit Enquiry, please try again later!",
      code: 500,
    });
  }
});

module.exports = app;
