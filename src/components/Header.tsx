import resumeImg from '../images/Resume.png';
import linkedinImg from '../images/Linkeden.png';
import '../App.css';

interface HeaderProps {
	email: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
	return (
		<div className="text-center" style={{ marginTop: '25px' }}>
			<img
				className="profile-pic"
				width={300}
				src="https://avatars0.githubusercontent.com/u/31748422?v&#x3D;4"
				alt="Profile"
			/>
			<div style={{ marginTop: '15px' }}>
				<h1>Justin Stephenson</h1>
				<h3>Toronto, Canada</h3>
				<h5>Currently working at Univeris as a software developer</h5>
			</div>

			<div className="text-center">
				<a href={`mailto:${props.email}`} target="blank">
					{props.email}
				</a>
			</div>

			<div className="row text-center name">
				<div className="col-xs-12">
					<a
						className="image-hover"
						href="https://github.com/JustinStephenson"
						target="blank"
					>
						<i className="devicon-github-plain colored"></i>
					</a>
					<a
						className="image-hover"
						href="Justin Stephenson Resume.pdf"
						target="blank"
					>
						<img src={resumeImg} alt="Resume" />
					</a>
					<a
						className="image-hover"
						href="https://www.linkedin.com/in/justin-stephenson-940572b0"
						target="blank"
					>
						<img src={linkedinImg} alt="Linkedin" />
					</a>
				</div>
			</div>
		</div>
	);
};
