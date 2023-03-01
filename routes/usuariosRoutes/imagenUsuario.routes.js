import { Router } from "express";
import multer from "multer";
import path from "path";

import { createImagenUsuario } from "../../controllers/usuariosControllers/imagenesUsuario.controllers.js";

const router = Router();

// Configuración de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/"); // Directorio donde se almacenarán las imágenes
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Nombre de archivo único
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)); // Nombre final del archivo
  },
});

const upload = multer({ storage: storage });

router.post("/imagenes", upload.single("imagen"), createImagenUsuario);

export default router;
