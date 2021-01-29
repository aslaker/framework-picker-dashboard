module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Vote', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        choice: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}