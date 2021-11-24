module.exports = (sequelize, DataTypes) => {

    let alias = "coleccion"
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
    const coleccion = sequelize.define(alias, cols, config)

    coleccion.associate = function (models) {
        coleccion.hasMany(models.producto, {
            foreignKey: "id_coleccion",
            as: "producto"
        })
    }
    return coleccion

}