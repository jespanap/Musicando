module.exports = (sequelize, DataType) => {

    const alias = 'Canciones';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataType.STRING,
            allowNull: false
        },
        duracion: {
            type: DataType.INTEGER,
            allowNull: false
        },
        genero_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        album_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        artista_id: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }

    const config = {
        tableName: 'canciones',
        timestamps: false
    }

    const Canciones = sequelize.define(alias, cols, config);

    Canciones.associate = models => {
        Canciones.belongsTo(models.Artistas, {
            as: 'artista',
            timestamps: false,
            foreignKey: 'artista_id'
        }),
            Canciones.belongsTo(models.Albumes, {
                as: 'album',
                timestamps: false,
                foreignKey: 'album_id'
            }),
            Canciones.belongsTo(models.Generos, {
                as: 'genero',
                timestamps: false,
                foreignKey: 'genero_id'
            });
    }
    return Canciones;

}