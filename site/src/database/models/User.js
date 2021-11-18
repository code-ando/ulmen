module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "users",
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull:false,
                autoIncrement: true,
            },
            nombre:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            contraseña:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            DNI:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sexo:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            nacimiento:{
                type: DataTypes.DATE,
                allowNull: false,
            },
            id_categoria:{
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        },
        {
            timestamps: false
        }
    )
    return user
}