import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Formulario = () => {
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

export default Formulario;
