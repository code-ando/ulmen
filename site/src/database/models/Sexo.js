module.exports = (sequelize, DataTypes) => {
    const sexo = sequelize.define(
        "sexo",
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
    return sexo

}