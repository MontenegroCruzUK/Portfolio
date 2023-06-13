/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a
				href="#"
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<AiOutlineHome /> {/* Icono para el enlace de inicio */}
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser /> {/* Icono para el enlace Acerca de */}
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<BiBook /> {/* Icono para el enlace Experiencia */}
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<RiServiceLine /> {/* Icono para el enlace Servicios */}
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<BiMessageSquareDetail /> {/* Icono para el enlace Contacto */}
			</a>
		</nav>
	);
};

export default Nav;
