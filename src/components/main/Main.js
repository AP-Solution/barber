import React from 'react';
import './Main.css';
import Hamburger from '../hamburger/Hamburger';

function Main() {
	return (
		<main>
			<h1 className="welcome-header">Санта Барбер</h1>
			<div className="promo">Твоя шикарна зачiска<br/>
				<img src="https://img.icons8.com/ios/50/000000/hand-scissors--v1.png"/>
				<img src="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-hairstylist-male-occupation-avatar-itim2101-lineal-itim2101.png"/>
				<br/>моя улюблена турбота</div>
			<Hamburger/>
		</main>
	)
}

export default Main;