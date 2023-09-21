module.exports = (sequelize, DataType) => {

    const alias = 'Generos';

    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {

        },
    }

    const config = {
        tableName: 'generos',
        timestamps: false
    }

    const Generos = sequlize.define(alias, cols, config);

    Generos.associate = models => {
        Generos.belongsTo(models.Canciones, {
            as: 'canciones',
            timestamps: false,
            foreignKey: 'genero_id'
        });
    }

    return Generos;

}