//librerias
import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';

// Componente de encabezado
const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5> {/* Saludo */}
				<h1>Cristian Montenegro</h1> {/* Nombre */}
				<h5 className="text-light">Junior Developer</h5>{' '}
				{/* Descripción del cargo */}
				<CTA /> {/* Componente de llamado a la acción */}
				<HeaderSocial /> {/* Componente de iconos sociales del encabezado */}
				<div className="me">
					<img src={ME} alt="Me" /> {/* Imagen personal */}
				</div>
				<a href="#contact" className="scroll__dow">
					Scroll Dow {/* Enlace para desplazarse hacia abajo */}
				</a>
			</div>
		</header>
	);
};

export default Header;
