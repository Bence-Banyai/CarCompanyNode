const mongoose = require("mongoose");

const carCompanySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  founded: {
    type: Date,
  },
  headquarters: {
    type: {
      city: String,
      state: String,
      country: String,
    },
  },
  models: [
    {
      name: String,
      year: Number,
    },
  ],
});

module.exports = mongoose.model("CarCompany", carCompanySchema);
