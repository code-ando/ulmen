module.exports = (sequelize, DataTypes) => {

    let alias = "genero"
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
    const genero = sequelize.define(alias, cols, config)

    genero.associate = function (models) {
        genero.hasMany(models.producto, {
            foreignKey: "id_generos",
            as: "producto"
        })
    }


    return genero

}