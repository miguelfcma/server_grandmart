import { ImagenUsuario } from "../../models/usuariosModel/ImagenesUsuarios.js";
import fs from "fs/promises";
// Create

export const createImagenUsuario = async (req, res) => {
  const { titulo, ruta, extension } = req.body;
  res.json(titulo, ruta, extension);
  try {
    const imagenBuffer = await fs.readFile(ruta);
    const imagen = await ImagenUsuario.create({
      titulo: titulo,
      contenido: imagenBuffer,
      extension: extension,
    });
    res.status(201).json(imagen);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// Read
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

export async function getAllImagenUsuarios() {
  try {
    const imagenes = await ImagenUsuario.findAll();
    return imagenes;
  } catch (error) {
    console.error(error);
  }
}

// Update
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

// Delete
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
