import { DataTypes } from "sequelize";
import { sequelizeDB } from "../../database/db.js";

export const PreguntaProducto = sequelizeDB.define(
  "preguntasproductos",
  {
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pregunta: {
      type: DataTypes.STRING(1500),
      allowNull: false,
    },
    respuesta: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
  },
  { timestamps: true }
);
