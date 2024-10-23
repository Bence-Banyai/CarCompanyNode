const express = require("express");
const router = express.Router();
const carCompanyModel = require("../models/carcompany.model");
const carCompanyController = require("../controllers/carcompany.controller");
const { log } = require("console");

router.post("/", carCompanyController.createCarCompany);

router.get("", async (req, res) => {
  try {
    const data = await carCompanyModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await carCompanyModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await carCompanyModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await carCompanyModel.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
