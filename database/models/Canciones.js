module.exports = (sequelize, DataType) => {

    const alias = 'Canciones';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {

        },
        apellido: {

        }
    }

    const config = {
        tableName: 'canciones',
        timestamps: false
    }

    const Canciones = sequlize.define(alias, cols, config);

    Canciones.associate = models => {
        Canciones.belongsTo(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'artista_id'
        });
    }

    return Canciones;

}