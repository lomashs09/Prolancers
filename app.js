const express = require("express");
const app = express();
const cors = require('cors')
const Request = require("./models/Request");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(`${__dirname}/public`))

// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')

app.post("/enquiry", async (req, res) => {
  try {
    console.log("req :",req.body)

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
    return res.status(200).send({
      success: true,
      message: "Enquiry submitted successfully !",
      code: 201,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Unable to submit Enquiry, please try again later!",
      code: 500,
    });
  }
});

module.exports = app;
