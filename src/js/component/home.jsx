import React, { useState } from "react";
import Formulario from "./formulario.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Tareas from "./tareas.jsx";

//create your first component
const Home = () => {
	const [tareas, guardarTareas] = useState([]);

	//Funcion que tomas las tareas actuales y agraga nuevas
	const crearTarea = ((tarea)=>{
		
	})

	return (
		<div>
			<div className="container">
				<div className="formulario">
					<Formulario crearTarea={crearTarea} />
					<Tareas />
				</div>
				<div className="tareas"></div>
			</div>
		</div>
	);
};

export default Home;
