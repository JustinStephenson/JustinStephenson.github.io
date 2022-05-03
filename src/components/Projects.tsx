import { ProjectBlock, ProjectBlockProps } from './ProjectBlock';
import cropShopImg from '../images/CropShopPhone.png';
import primDefenseImg from '../images/PrimeDefensePhone.png';
import aerialInvastionImg from '../images/AreialInvasionPhone.png';
import unityImg from '../images/Unity.png';
import React from 'react';

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

const primeDefence: ProjectBlockProps = {
	mainImg: primDefenseImg,
	title: 'Prime Defence',
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
	mainImg: aerialInvastionImg,
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
			<ProjectBlock {...cropShop} />
			<ProjectBlock {...primeDefence} />
			<ProjectBlock {...aerialInvasion} />
		</React.Fragment>
	);
};
