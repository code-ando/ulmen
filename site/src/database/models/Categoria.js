module.exports = (sequelize, DataTypes) => {

    let alias = "categorias"
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
    const categoria = sequelize.define(alias, cols, config)

    categoria.associate = function (models) {
        categoria.hasMany(models.producto, {
            foreignKey: "id_categoria",
            as: "producto"
        })
    }
  
    return categoria

}
