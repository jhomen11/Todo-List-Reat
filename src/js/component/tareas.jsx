import React from "react";
import PropTypes from "prop-types";

export const Tareas = ({ tarea, eliminarTarea }) => {
	return (
		<div className="contenido_tarea">
			<p>{tarea.actividad}</p>
			<button
				onClick={() => eliminarTarea(tarea.id)}
				className="eliminar">
				<i className="far fa-trash-alt"></i>
			</button>
		</div>
	);
};

Tareas.propTypes = {
	tarea: PropTypes.object,
	eliminarTarea: PropTypes.any
};

export default Tareas;
