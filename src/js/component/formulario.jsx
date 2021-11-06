import React, { useState } from "react";

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
			console.log("Error");
			guardarError(true);
			return;
		}
		guardarError(false);
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
				/>
				<button>Agregar Tarea</button>
			</form>
		</div>
	);
};

export default Formulario;
