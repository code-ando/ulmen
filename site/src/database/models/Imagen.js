module.exports = (sequelize, DataTypes) => {

    let alias = "Imagen"
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
        productos_id : {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    }
    let config = {
        tableName: "imagen",
        timestamps : false
    }
    const Categoria = sequelize.define(alias, cols, config)

    Categoria.associate = function (models) {
        Categoria.belongsTo(models.Producto, {
            foreignKey: "productos_id",
            as: "producto"
        })
    }
  
    return Categoria

}
