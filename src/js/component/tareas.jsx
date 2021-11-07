import React from "react";
import PropTypes from "prop-types";

export const Tareas = ({ tarea, eliminarTarea }) => {
	return (
		<div>
			<h2>{tarea.actividad}</h2>
			<button onClick={() => eliminarTarea(tarea.id)}>Eliminiar</button>
		</div>
	);
};

Tareas.propTypes = {
	tarea: PropTypes.object,
	eliminarTarea: PropTypes.any
};

export default Tareas;
