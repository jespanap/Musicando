module.exports = (sequelize, DataType) => {

    const alias = 'Albumes';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {

        },
        duracion: {

        }
    }

    const config = {
        tableName: 'albumes',
        timestamps: false
    }

    const Albumes = sequlize.define(alias, cols, config);

    Albumes.associate = models => {
        Albumes.belongsTo(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'album_id'
        });
    }

    return Albumes;

}