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
	que nos crea el metedo filter asi nos devuelve un nuevo array sin el id de la tarea a eliminar*/
	const eliminarTarea = id => {
		const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
		guardarTareas(nuevasTareas);
	};

	//Mensaje condicional, muestra un mensaje dependiendo si hay tareas o no
	const titulo = tareas.length === 0 ? "No hay Tareas" : "Listado de Tareas";

	return (
		<div className="contenido">
			<div className="main">
				<h1>To Do List</h1>

				<Formulario crearTarea={crearTarea} />

				<div className="tareas">
					<h3>{titulo}</h3>
					{tareas.map(tarea => (
						<Tareas
							key={tarea.id}
							tarea={tarea}
							eliminarTarea={eliminarTarea}
						/>
					))}
				</div>
				<p className="footer">
					{tareas.length} &nbsp;Tareas pendientes
				</p>
			</div>
		</div>
	);
};

export default Home;
