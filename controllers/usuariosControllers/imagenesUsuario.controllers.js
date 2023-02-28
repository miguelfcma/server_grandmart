/*import { ImagenUsuario } from "../../models/usuariosModel/ImagenesUsuarios.js";
import fs from "fs/promises";
import multer from "multer";
import path from "path";

// Configurar multer para guardar las imágenes en el directorio 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

// Crear una nueva imagen de usuario
export const createImagenUsuario = async (req, res) => {
  try {
    // La imagen se encuentra en el campo 'image' del objeto FormData
    const imagen = await ImagenUsuario.create({
      titulo: req.body.titulo,
      contenido: req.file.buffer, // El archivo se encuentra en 'req.file.buffer'
      extension: path.extname(req.file.originalname),
    });
    res.status(201).json(imagen);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// Leer una imagen de usuario por su ID
export async function getImagenUsuarioById(id) {
  try {
    const imagen = await ImagenUsuario.findByPk(id);
    if (!imagen) {
      throw new Error("Imagen no encontrada");
    }
    return imagen;
  } catch (error) {
    console.error(error);
  }
}

// Leer todas las imágenes de usuario
export async function getAllImagenUsuarios() {
  try {
    const imagenes = await ImagenUsuario.findAll();
    return imagenes;
  } catch (error) {
    console.error(error);
  }
}

// Actualizar una imagen de usuario por su ID
export async function updateImagenUsuario(id, titulo, contenido, extension) {
  try {
    const imagen = await ImagenUsuario.findByPk(id);
    if (!imagen) {
      throw new Error("Imagen no encontrada");
    }
    imagen.titulo = titulo;
    imagen.contenido = contenido;
    imagen.extension = extension;
    await imagen.save();
    return imagen;
  } catch (error) {
    console.error(error);
  }
}

// Eliminar una imagen de usuario por su ID
export async function deleteImagenUsuario(id) {
  try {
    const imagen = await ImagenUsuario.findByPk(id);
    if (!imagen) {
      throw new Error("Imagen no encontrada");
    }
    await imagen.destroy();
    return imagen;
  } catch (error) {
    console.error(error);
  }
}
*/