const express = require("express");
const knex = require("../../Configs/index");
require("dotenv").config();
const { ERROR_MSGS } = require("../../Configs/Constants");

const CardController = {
  helloWorld: async (req, res) => {
    res.status(200).json({ message: "Hello from Card" });
  },
};

module.exports = CardController;
