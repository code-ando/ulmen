module.exports = (sequelize, DataTypes) => {

    let alias = "Sexo"
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
    const Sexo = sequelize.define(alias, cols, config)

    Sexo.associate = function (models) {
        Sexo.hasMany(models.Usuario, {
            foreignKey: "id_sexo",
            as: "usuario"
        })
    }
    return Sexo

}