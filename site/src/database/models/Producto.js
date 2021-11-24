module.exports = (sequelize, DataTypes) => {

    let alias = "producto";
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
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_colores: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_talles: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_generos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_coleccion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_categroias: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }


    };
    let config =
    {
        timestamps: false
    }

    const producto = sequelize.define(alias, cols, config);

    producto.associate = function (models) {
        producto.belongsTo(models.color, {
            foreignKey: "id_colores",
            as: "color"
        })
    }
    producto.associate = function (models) {
        producto.belongsTo(models.talle, {
            foreignKey: "id_talle",
            as: "talles"
        })
    }
    producto.associate = function (models) {
        producto.belongsTo(models.genero, {
            foreignKey: "id_generos",
            as: "genero"
        })
    }
    producto.associate = function (models) {
        producto.belongsTo(models.coleccion, {
            foreignKey: "id_coleccion",
            as: "coleccion"
        })
    }
    producto.associate = function (models) {
        producto.belongsTo(models.categoria, {
            foreignKey: "id_categorias",
            as: "categoria"
        })
    }


    return producto
}