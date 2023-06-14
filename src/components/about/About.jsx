import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className=" container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						{/* 1 */}
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>3+ Years Working</small>
						</article>
						{/* 2 */}
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>400+ Worldwide</small>
						</article>
						{/* 3 */}
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>90+ Completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						in laboriosam asperiores a eaque nulla odio maxime corporis totam
						velit. Tenetur et molestiae soluta. Ut similique est, dicta eius
						doloribus provident aspernatur ipsa corrupti voluptas a cum quisquam
						vero voluptates saepe optio ullam? Placeat quibusdam nisi non minima
						ipsum deleniti.
					</p>
					<a href="#contac" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
