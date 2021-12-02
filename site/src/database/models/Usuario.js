module.exports = (sequelize, DataTypes) => {

    let alias = "Usuario"
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
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DNI: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        nacimiento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_sexo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_rol: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },


    }
    let config = {
        timestamps : false
    }
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Sexo, {
            foreignKey: "id_sexo",
            as: "sexo"
        })
        Usuario.belongsTo(models.Rol, {
            foreignKey: "id_rol",
            as: "rol"
        })
    }
    
   



    return Usuario
}