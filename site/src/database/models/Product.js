module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
        "products",
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
            color: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            talle:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            genero:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            descripcion:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            coleccion:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            precio:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_estado:{
                type: DataTypes.INTEGER,
                allowNull: false,
            }

            
        },
        {
            timestamps: false
        }

    ), 
    return product
}