import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocial = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/christian-montenegro-33408b207/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>

			<a
				href="https://github.com/MontenegroCruzUK"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub />
			</a>

			<a
				href="https://www.instagram.com/montenegro_cruz.uk/"
				target="_blank"
				rel="noreferrer"
			>
				<BsInstagram />
			</a>
		</div>
	);
};

export default HeaderSocial;
