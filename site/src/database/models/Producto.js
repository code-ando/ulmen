module.exports = (sequelize, DataTypes) => {
    const producto = sequelize.define(
        "producto",
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
            descripcion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            precio:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_colores:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            id_talles:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_generos:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_coleccion:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_categroias:{
                type: DataTypes.INTEGER,
                allowNull: false,
            }

            
        },
        {
            timestamps: false
        }

    ), 
    return producto
}