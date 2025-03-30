const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database');

class Libros extends Model { }

Libros.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		titulo: {
			type: DataTypes.STRING,
		},
		autor: {
			type: DataTypes.STRING,
		},
		año_publicacion: {
			type: DataTypes.STRING,
		},
		genero: {
			type: DataTypes.STRING,
		},

	},
	{
		sequelize,
		modelName: 'Libros',
		tableName: 'libros',
		timestamps: false
	}
);

module.exports = Libros;