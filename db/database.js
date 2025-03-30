const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('biblioteca', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate()
	.then(() => {
		console.log('Conectado.');
	})
	.catch(err => {
		console.error('Error:', err);
	});

module.exports = sequelize;