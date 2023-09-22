module.exports = (sequelize, DataType) => {

    const alias = 'Artistas';

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
        apellido: {
            type: DataType.VARCHAR(45),
            allowNull: false
        }
    }

    const config = {
        tableName: 'artistas',
        timestamps: false
    }

    const Artistas = sequlize.define(alias, cols, config);

    Artistas.associate = models => {
        Artistas.belongsTo(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'artista_id'
        });
    }

    return Artistas;

}