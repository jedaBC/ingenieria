const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.getProveedores = (req, res) =>{

    Role.findByPk(3).then(role => {
      role.getUsers().then(users => {
        res.status(200).send(users);
        return;
      })
    })
    
    return;
  };

  exports.getUsers = (req, res) =>{

    Role.findByPk(1).then(role => {
      role.getUsers().then(users => {
        res.status(200).send(users);
        return;
      })
    })
    
    return;
  };