module.exports = (sequelize, DataType) => {

    const alias = 'Albumes';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
           type: DataType.VARCHAR(45),
           allowNull: false

        },
        duracion: {
           type: DataType.INTEGER(11),
           allowNull : false
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