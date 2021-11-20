module.exports = (sequelize, DataTypes) => {
    const talle = sequelize.define(
        "talle",
        {
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

        },
        {
            timestamps = false
        }
    )
    return talle

}