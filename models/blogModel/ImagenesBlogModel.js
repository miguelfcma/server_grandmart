import { DataTypes } from "sequelize";
import { sequelizeDB } from "../../database/db.js";

export const ImagenBlog = sequelizeDB.define(
  "imagenesblogs",

  {
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tipo_archivo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tamano_archivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_publicacionBlog: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      autoIncrement: false,
      allowNull: false,
    },
  },
  { timestamps: true }
);


