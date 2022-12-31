import { ProjectBlock, ProjectBlockProps } from './ProjectBlock';
import pokemonDashboardImg from '../images/PokemonDashboard.png';
import rpsReactImg from '../images/RpsReact.png';
import cropShopImg from '../images/CropShopPhone.png';
import primDefenseImg from '../images/PrimeDefensePhone.png';
import aerialInvasionImg from '../images/AreialInvasionPhone.png';
import React from 'react';
import { icon } from '../utils/icons';

const pokemonDashboard: ProjectBlockProps = {
	mainImg: pokemonDashboardImg,
	title: 'Pokemon Dashboard',
	description:
		'Search for your favorite pokemon and be presented with pokemon information ' +
		'such as: base stats, type(s), height, weight, and even hidden abilities. Check out their ' +
		'special forms and evolutions all in one spot.',
	links: [
		{
			title: 'Website Link',
			href: 'https://justinstephenson.github.io/Pokemon_Dashboard',
		},
		{
			title: 'Github Link',
			href: 'https://github.com/JustinStephenson/Pokemon_Dashboard',
		},
	],
	icons: [
		icon['React'],
		icon['Redux'],
		icon['Typescript'],
		icon['Html'],
		icon['Sass'],
		icon['Css'],
	],
};

const rpsReact: ProjectBlockProps = {
	mainImg: rpsReactImg,
	title: 'Rock Paper Scissors',
	description:
		'A simple rock paper scissors game against a computer opponent. ' +
		'Utilizes gitlab to leverage CI/CD, configured to run black box tests and deploy ' +
		'on every successful merge.',
	links: [
		{
			title: 'Website Link',
			href: 'https://justinstephenson.github.io/Rock-Paper-Scissors-React',
		},
		{
			title: 'Github Link',
			href: 'https://github.com/JustinStephenson/Rock-Paper-Scissors-React',
		},
		{
			title: 'Gitlab Link',
			href: 'https://gitlab.com/justinstephenson/Rock-Paper-Scissors-React',
		},
	],
	icons: [
		icon['React'],
		icon['Gitlab'],
		icon['Typescript'],
		icon['Jest'],
		icon['Html'],
		icon['Sass'],
	],
};

const cropShop: ProjectBlockProps = {
	mainImg: cropShopImg,
	title: 'Crop Shop',
	description:
		'Plow dirt, plant crops, fill out the order list before time runs out, ' +
		'while defending your crops from animals and the elements.',
	links: [
		{
			title: 'Github Link',
			href: 'https://github.com/JustinStephenson/Crop_Shop',
		},
	],
	icons: [icon['Csharp'], icon['Unity']],
};

const primeDefense: ProjectBlockProps = {
	mainImg: primDefenseImg,
	title: 'Prime Defense',
	description:
		'Shoot candies falling from the skies with your cannon. ' +
		'Get the highest score on the leader boards and show off your skills.',
	links: [
		{
			title: 'Google Play Link',
			href: 'https://play.google.com/store/apps/details?id=com.JBoneStudios.primedefensecandyedition&hl=en',
		},
		{
			title: 'Github Link',
			href: 'https://github.com/JustinStephenson/Prime_Defence',
		},
	],
	icons: [icon['Csharp'], icon['Unity']],
};

const aerialInvasion: ProjectBlockProps = {
	mainImg: aerialInvasionImg,
	title: 'Aerial Invasion',
	description:
		'Prepare to fight off hordes of balloons and blimps by gunning them down ' +
		'in this super fun endless flyer, all the while trying to best your high-score.',
	links: [
		{
			title: 'Google Play Link',
			href: 'https://play.google.com/store/apps/details?id=com.JBoneStudios.AerialInvasion&hl=en',
		},
		{
			title: 'Github Link',
			href: 'https://github.com/JustinStephenson/Aerial_Invasion',
		},
	],
	icons: [icon['Csharp'], icon['Unity']],
};

export const Projects = (): JSX.Element => {
	return (
		<React.Fragment>
			<ProjectBlock {...pokemonDashboard} />
			<ProjectBlock {...rpsReact} />
			<ProjectBlock {...cropShop} />
			<ProjectBlock {...primeDefense} />
			<ProjectBlock {...aerialInvasion} />
		</React.Fragment>
	);
};
