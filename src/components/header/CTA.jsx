import React from 'react'; // Importa la biblioteca React
import CV from '../../assets/cv.pdf'; // Importa el archivo CV en formato PDF desde la ruta relativa

// Componente funcional CTA (Call to Action)
const CTA = () => {
	return (
		<div className="cta">			
			{/* Inicio del elemento div con la clase "cta" */}
			<a href={CV} download className="btn">				
				{/* Enlace para descargar el CV con la clase "btn" */}
				Download CV {/* Texto del enlace */}
			</a>
			<a href="#contact" className="btn btn-primary">				
				{/* Enlace a la sección de contacto con las clases "btn" y "btn-primary" */}
				Let's Talk {/* Texto del enlace */}
			</a>
		</div>
	);
};

export default CTA; // Exporta el componente CTA como predeterminado
