import { useState } from "react";
import "./cabecera.css";

const Cabecera = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);

	return (
		<header className='Cabecera'>
			<h1 className='Cabecera-h1'>
				<cabecera className='Cabecera-a'>Menu</cabecera>
			</h1>
			<button onClick={toggleMenu} className='Cabecera-button'>
				<svg
					className='Cabecera-svg'
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					viewBox='0 0 16 16'>
					<path d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
				</svg>
			</button>
			<nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
				<ul className='Cabecera-ul'>
					<li className='Cabecera-li'>
						<a href='#'>item 1</a>
					</li>
					<li className='Cabecera-li'>
						<a href='#'>item 2</a>
					</li>
					<li className='Cabecera-li'>
						<a href='#'>item 3</a>
					</li>
					<li className='Cabecera-li'>
						<a href='#'>item 4</a>
					</li>
					<li className='Cabecera-li'>
						<a href='#'>item 5</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Cabecera;
