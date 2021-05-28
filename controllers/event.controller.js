const db = require("../models");
const Event = db.event;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createEvent = (req, res) => {

    Event.create({
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        cant_personas: req.body.cant_personas,
        user_id: req.body.user_id,
      })
  
};

