module.exports = (sequelize, DataType) => {

    const alias = 'Albumes';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
           type: DataType.STRING,
           allowNull: false

        },
        duracion: {
           type: DataType.INTEGER,
           allowNull : false
        }
    }

    const config = {
        tableName: 'albumes',
        timestamps: false
    }

    const Albumes = sequelize.define(alias, cols, config);

    Albumes.associate = models => {
        Albumes.hasMany(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'album_id'
        });
    }

    return Albumes;

}