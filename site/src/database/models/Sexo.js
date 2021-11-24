module.exports = (sequelize, DataTypes) => {

    let alias = "sexo"
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
    const sexo = sequelize.define(alias, cols, config)

    sexo.associate = function (models) {
        sexo.hasMany(models.usuario, {
            foreignKey: "id_sexo",
            as: "usuario"
        })
    }
    return sexo

}