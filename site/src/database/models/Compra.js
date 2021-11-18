module.exports = (sequelize, DataTypes) => {
    const compra = sequelize.define(
        "compras",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            cantidad: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            precio:{
                type: DataTypes.INTEGER,
                allowNull: false,
            }

        },
        {
            timestamps = false
        }
    )
    return compra

}