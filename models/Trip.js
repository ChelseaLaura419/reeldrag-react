module.exports = function(sequelize, DataTypes) {
    let Trip = sequelize.define("Trip", {
      tripLocation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      tripDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      boat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      numPeople: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      tripCost: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    // trip.associate = function(models) {
    //   trip.belongsTo(models.account, {
    //     onDelete: "CASCADE",
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };
  
    return Trip;
  };
  