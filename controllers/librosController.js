const librosService = require('../services/librosService');

const librosController = {
	getHome: (req, res) => {
		return res.render('home/index', { title: 'Home' });
	},
	getLibros: async (req, res) => {
		try {
			const page = req.query.page || 1;
			const resp = await librosService.getDataLibros(page)

			if (!resp.msg) {
				return res.render('boocks/libros', { title: 'Gestion de libros', libros: resp.data, paginacion: resp.pagination });
			}
			return res.render('Error404', { title: 'GetHome', error: resp.msg });
		} catch (error) {
			return res.render('Error404', { titulo: 'Error', error: resp.msg });
		}
	},

	getFormLibro: async (req, res) => {
		return res.render('boocks/formLibro', { title: 'Agregar libro', libro: null });
	},
	getFormLibroEditar: async (req, res) => {
		try {
			const resp = await librosService.getLibroById(req.params.id);
			if (resp.msg) {
				return res.render('Error404', { title: 'Error', error: resp.msg });
			}
			return res.render('boocks/formLibro', { title: 'Editar libro', libro: resp.data });
		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error.message });
		}
	},

	addLibro: async (req, res) => {
		try {
			const { titulo, autor, año_publicacion, genero } = req.body;
			const resp = await librosService.addLibro({ titulo, autor, año_publicacion, genero });
			if (!resp.msg) {
				return res.redirect('/libros');
			}
			return res.render('Error404', { title: 'Error', error: resp.msg });
		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error.message });
		}
	},
	updateLibro: async (req, res) => {
		try {
			const { titulo, autor, año_publicacion, genero } = req.body;
			const resp = await librosService.updateLibro(req.params.id, { titulo, autor, año_publicacion, genero });
			if (!resp.msg) {
				return res.redirect('/libros');
			}
			return res.render('Error404', { title: 'Error', error: resp.msg });
		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error.message });
		}
	},
	deleteLibro: async (req, res) => {
		try {
			const resp = await librosService.deleteLibro(req.params.id);
			if (!resp.msg) {
				return res.redirect('/libros');
			}
			return res.render('Error404', { title: 'Error', error: resp.msg });
		} catch (error) {
			return res.render('Error404', { title: 'Error', error: error.message });
		}
	},
}

module.exports = librosController;