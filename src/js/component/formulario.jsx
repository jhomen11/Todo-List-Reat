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
		<div>
			<form onSubmit={submitTarea}>
				{error ? <p>El campo Tarea es obligatorio</p> : null}
				<label htmlFor="">Tarea:</label>
				<input
					type="text"
					name="actividad"
					placeholder="Ingrese la Tarea"
					onChange={actualizarTarea}
					value={tarea.actividad}
				/>
				<button>Agregar Tarea</button>
			</form>
		</div>
	);
};

Formulario.propTypes = {
	crearTarea: PropTypes.any
};

export default Formulario;
