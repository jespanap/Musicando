module.exports = (sequelize, DataType) => {

    const alias = 'Artistas';

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
        apellido: {
            type: DataType.STRING,
            allowNull: false
        }
    }

    const config = {
        tableName: 'artistas',
        timestamps: false
    }

    const Artistas = sequelize.define(alias, cols, config);

    Artistas.associate = models => {
        Artistas.hasMany(models.Canciones, {
            foreignKey: 'artista_id'
        });
    }

    return Artistas;

}