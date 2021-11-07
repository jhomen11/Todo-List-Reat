import React, { useState } from "react";
import Formulario from "./formulario.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Tareas from "./tareas.jsx";

//create your first component
const Home = () => {
	const [tareas, guardarTareas] = useState([]);

	//Funcion que tomas las tareas actuales y agraga nuevas
	const crearTarea = tarea => {
		guardarTareas([...tareas, tarea]);
	};

	/*Funcion que elimina las tareas, le pasamos el id de la tarea a eliminar
	creamos un array nuevo donde vamos filtrar por el id pasado sea diferente al
	qeu nos crea el metedo filter asi nos devuelve un nuevo array sin el id de la tarea a eliminar*/
	const eliminarTarea = id => {
		const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
		guardarTareas(nuevasTareas);
	};

	//Mensaje condicional, muestra un mensaje dependiendo si hay tareas o no
	const titulo = tareas.length === 0 ? "No hay Tareas" : "Listado de Tareas";

	return (
		<div>
			<div className="container">
				<div className="formulario">
					<Formulario crearTarea={crearTarea} />
				</div>
				<div className="tareas"></div>
				<h1>{titulo}</h1>
				{tareas.map(tarea => (
					<Tareas
						key={tarea.id}
						tarea={tarea}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
