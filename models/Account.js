module.exports = function(sequelize, DataTypes) {
    let account = sequelize.define("account", {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    //account.associate = function(models) {
        //account.hasMany(models.trip, {});
    //};
    
    return account;
};
