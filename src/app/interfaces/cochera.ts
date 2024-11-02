import { Estacionamiento } from "./estacionamiento";

export interface Cochera {
    id: number,
    deshabilitada: boolean,
    descripcion: string,
    eliminada: boolean,
    activo: Estacionamiento|null,
}