module.exports = (sequelize, DataTypes) => {
    const genero = sequelize.define(
        "genero",
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
    return genero

}