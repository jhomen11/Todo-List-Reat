import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const Formulario = ({ crearTarea }) => {
	//state que guarda o actualiza las tareas
	const [tarea, guardarTarea] = useState({ actividad: "" });

	const [error, guardarError] = useState(false);

	const actualizarTarea = evento => {
		guardarTarea({
			[evento.target.name]: evento.target.value
		});
	};

	const submitTarea = e => {
		e.preventDefault();

		//Validacion del formulario
		if (tarea.actividad === "") {
			guardarError(true);
			return;
		}
		guardarError(false);

		//asignar id a la tarea
		tarea.id = uuidv4();

		/*Funcion mediante la cual se pasa la tarea al componente principal 
        /para a su vez pasarla al componente donde se van a mostrar*/
		crearTarea(tarea);

		//Reseteo del formulario
		guardarTarea({ actividad: "" });
	};

	return (
		<>
			{error ? (
				<p className="error">El campo Tarea es obligatorio</p>
			) : null}
			<form onSubmit={submitTarea}>
				<div className="contenido_formulario">
					<input
						type="text"
						name="actividad"
						placeholder="Tarea"
						onChange={actualizarTarea}
						value={tarea.actividad}
					/>
					<button className="agregar">
						<i className="fas fa-plus"></i>
					</button>
				</div>
			</form>
		</>
	);
};

Formulario.propTypes = {
	crearTarea: PropTypes.any
};

export default Formulario;
