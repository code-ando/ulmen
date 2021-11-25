module.exports = (sequelize, DataTypes) => {

    let alias = "color"
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
        timestamps : false
    }
    const color = sequelize.define(alias, cols, config)

    color.associate = function (models) {
        color.hasMany(models.producto, {
            foreignKey: "id_colores",
            as: "producto"
        })
    }
    return color

}