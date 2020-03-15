import React from 'react';
import './RandomPlanet.css';

const RandomPlanet = () => {
	return (
		<div className="randomPlanet">
			<div className="planetImg">
				<img />
			</div>
			<div className="planetDescription">
				<h2 className="planetName">PlanetName</h2>
				<div>
					Population <span>324432</span>
				</div>
				<div>
					Rotation Period <span>32</span>
				</div>
				<div>
					Diameter <span>432</span>
				</div>
			</div>
		</div>
	);
};
export default RandomPlanet;
