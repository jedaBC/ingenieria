const db = require("../models");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createEvent = (req, res) => {

    Event.create({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        location: req.body.location,
        cant_personas: req.body.cant_personas,
      })
  
};

exports.logIn = (req, res) => {
  
};