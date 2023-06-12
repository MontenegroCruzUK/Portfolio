import React from 'react';
//Importar los componentes con su respectiva ruta
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			{/* Renderiza Todos lso componentes */}
			<Header />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
