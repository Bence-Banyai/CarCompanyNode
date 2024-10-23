const CarCompanyModel = require("../models/carcompany.model");

exports.createCarCompany = (req, res, next) => {
  const carCompany = CarCompanyModel.create(req.body);
  res.status(201).json(carCompany);
};