const { deleteLibro } = require('../controllers/librosController');
const Libros = require('../models/libros');

const librosService = {
	getDataLibros: async (page = 1, pageSize = 12) => {
		try {
			const currentPage = parseInt(page);
			const limit = parseInt(pageSize);
			const offset = (currentPage - 1) * limit;

			const { count, rows } = await Libros.findAndCountAll({
				limit,
				offset,
			});

			return {
				msg: null,
				data: rows,
				pagination: {
					totalPages: Math.ceil(count / limit),
					currentPage: currentPage,
					pageSize: limit,
					hasPrevious: currentPage > 1,
					hasNext: currentPage < count / limit
				}
			};
		} catch (error) {
			return {
				msg: error.message,
				data: [],
				pagination: {
					totalPages: 0,
					currentPage: 1,
					pageSize: 12,
					hasPrevious: false,
					hasNext: false
				}
			};
		}
	},
	addLibro: async (data) => {
		try {

			const libro = await Libros.create(data);

			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: null };
		}
	},
	getLibroById: async (id) => {
		try {
			const libro = await Libros.findByPk(id);

			if (!libro) {
				return { msg: 'Libro no encontrado', data: null };
			}

			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: null };
		}
	},
	updateLibro: async (id, data) => {
		try {
			const libro = await Libros.findByPk(id);

			if (!libro) {
				return { msg: 'Libro no encontrado', data: null };
			}

			await libro.update(data);

			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: null };
		}
	},
	deleteLibro: async (id) => {
		try {
			const libro = await Libros.findByPk(id);

			if (!libro) {
				return { msg: 'Libro no encontrado', data: null };
			}

			await libro.destroy();

			return { msg: null, data: libro };
		} catch (error) {
			return { msg: error.message, data: null };
		}
	}
}

module.exports = librosService;