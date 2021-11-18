module.exports = (sequelize, DataTypes) => {
    const estado = sequelize.define(
        "estados",
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
    return estado

}