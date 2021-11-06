import React, { useState } from "react";
import Formulario from "./formulario.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Tareas from "./tareas.jsx";

//create your first component
const Home = () => {
	const [tarea, guardarTarea] = useState({ tarea: "" });
	return (
		<div>
			<div className="container">
				<div className="formulario">
					<Formulario />
				</div>
				<div className="tareas"></div>
			</div>
		</div>
	);
};

export default Home;
