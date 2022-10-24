import express, { application } from 'express'
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/BlogController.js'

const router = express.Router()

//ruta para probar que el despliegie es correcto 
application.get('/ping', (req, res)=> res.send('pong'));

// ruta para mostrar tosdos los registros
router.get('/', getAllBlogs)

// ruta para mostrar un registro
router.get('/:id', getBlog)

// ruta para crear un registro

router.post('/', createBlog)

//actualizar un registro 
router.put('/:id', updateBlog)

//eliminar un registro
router.delete('/:id', deleteBlog)

export default router