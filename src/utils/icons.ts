import { Icon } from '../components/ProjectBlock';
import reduxImg from '../images/Redux.png';
import unityImg from '../images/Unity.png';

export const icon: { [key: string]: Icon } = {
	Gitlab: {
		isImg: false,
		location: 'devicon-gitlab-plain-wordmark colored',
		hoverMsg: 'Gitlab',
	},
	Html: {
		isImg: false,
		location: 'devicon-html5-plain-wordmark colored',
		hoverMsg: 'HTML5',
	},
	Jest: {
		isImg: false,
		location: 'devicon-jest-plain colored',
		hoverMsg: 'Jest',
	},
	React: {
		isImg: false,
		location: 'devicon-react-original colored',
		hoverMsg: 'React',
	},
	Redux: {
		isImg: true,
		location: reduxImg,
		hoverMsg: 'Redux',
	},
	Typescript: {
		isImg: false,
		location: 'devicon-typescript-plain colored',
		hoverMsg: 'Typescript',
	},
	Sass: {
		isImg: false,
		location: 'devicon-sass-original colored colored',
		hoverMsg: 'Sass',
	},
	Css: {
		isImg: false,
		location: 'devicon-css3-plain-wordmark colored',
		hoverMsg: 'CSS',
	},
	Csharp: {
		isImg: false,
		location: 'devicon-csharp-plain-wordmark colored',
		hoverMsg: 'C Sharp',
	},
	Unity: {
		isImg: true,
		location: unityImg,
		hoverMsg: 'Unity',
	},
};
