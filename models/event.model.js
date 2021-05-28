module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("events", {
      nombre: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      cant_personas: {
        type: Sequelize.INTEGER
      }
    });
  
    return Event;
  };