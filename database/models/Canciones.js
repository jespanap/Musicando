module.exports = (sequelize, DataType) => {

    const alias = 'Canciones';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataType.VARCHAR(45),
            allowNull: false
        },
        duracion: {
            type: DataType.INTEGER(11),
            allowNull : false
        },
        genero_id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        album_id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        artista_id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }

    const config = {
        tableName: 'canciones',
        timestamps: false
    }

    const Canciones = sequlize.define(alias, cols, config);

    Canciones.associate = models => {
        Canciones.hasMany(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'artista_id'
        }),
        Canciones.hasMany(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'album_id'
        }),
        Canciones.hasMany(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'generos_id'
        });
    }
    return Canciones;

}