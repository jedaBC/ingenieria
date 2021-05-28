const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

const Op = db.Sequelize.Op;

checkDuplicateEmail = (req, res, next) => {
        // Email
        console.log(typeof req.body.email)
    User.findOne({
        where: {
          email:  req.body.email,
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Email is already in use!"
            });
            return;
        }
        next();
    }).catch(err => {
      res.status(400).send({
        message: "Failed! Can't run email query!"+err
    });
    })
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {

      if (!ROLES.includes(req.body.roles)) {
        //res.status(400).send({
         // message: "Failed! Role does not exist = " + req.body.roles
        //});
        return;
      }
    
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;