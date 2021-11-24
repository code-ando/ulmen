module.exports = (sequelize, DataTypes) => {

    let alias = "talle"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
    let config = {
        timestamps = false
    }
    const talle = sequelize.define(alias, cols, config)

    talle.associate = function (models) {
        talle.hasMany(models.producto, {
            foreignKey: "id_talles",
            as: "producto"
        })
    }
    
    return talle

}