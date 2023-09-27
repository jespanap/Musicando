module.exports = (sequelize, DataType) => {

    const alias = 'Generos';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
    }

    const config = {
        tableName: 'generos',
        timestamps: false
    }

    const Generos = sequelize.define(alias, cols, config);

    Generos.associate = models => {
        Generos.hasMany(models.Canciones, {
            foreignKey: 'genero_id'
        });
    }

    return Generos;

}