module.exports = (sequelize, DataTypes) => {
    const color = sequelize.define(
        "color",
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
    return color

}