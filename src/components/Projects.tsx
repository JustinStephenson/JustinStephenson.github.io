import { ProjectBlock, ProjectBlockProps } from './ProjectBlock';
import steamAppImg from '../images/StreamApp.png';
import cropShopImg from '../images/CropShopPhone.png';
import primDefenseImg from '../images/PrimeDefensePhone.png';
import aerialInvasionImg from '../images/AreialInvasionPhone.png';
import reduxImg from '../images/Redux.png';
import unityImg from '../images/Unity.png';
import React from 'react';

const streamApp: ProjectBlockProps = {
	mainImg: steamAppImg,
	title: 'Streaming App',
	description: 'Stream any application to this streaming service easily',
	links: [
		{
			title: 'Github Link',
			href: 'https://github.com/JustinStephenson/Streaming_App',
		},
	],
	icons: [
		{
			isImg: false,
			location: 'devicon-react-original colored',
		},
		{
			isImg: true,
			location: reduxImg,
		},
		{
			isImg: false,
			location: 'devicon-javascript-plain colored',
		},
		{
			isImg: false,
			location: 'devicon-html5-plain-wordmark colored',
		},
		{
			isImg: false,
			location: 'devicon-css3-plain-wordmark colored',
		},
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
	icons: [
		{
			isImg: false,
			location: 'devicon-csharp-plain-wordmark colored',
		},
		{
			isImg: true,
			location: unityImg,
		},
	],
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
	icons: [
		{
			isImg: false,
			location: 'devicon-csharp-plain-wordmark colored',
		},
		{
			isImg: true,
			location: unityImg,
		},
	],
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
	icons: [
		{
			isImg: false,
			location: 'devicon-csharp-plain-wordmark colored',
		},
		{
			isImg: true,
			location: unityImg,
		},
	],
};

export const Projects = (): JSX.Element => {
	return (
		<React.Fragment>
			<ProjectBlock {...streamApp} />
			<ProjectBlock {...cropShop} />
			<ProjectBlock {...primeDefense} />
			<ProjectBlock {...aerialInvasion} />
		</React.Fragment>
	);
};
