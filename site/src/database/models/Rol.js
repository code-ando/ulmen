module.exports = (sequelize, DataTypes) => {

    let alias = "rol"
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
    const rol = sequelize.define(alias, cols, config)

    rol.associate = function (models) {
        rol.belongsTo(models.usuario, {
            foreignKey: "id_rol",
            as: "usuario"
        })
    }


    return rol

}