import React from 'react';
import '../App.css';

interface Link {
	title: string;
	href: string;
}

export interface Icon {
	isImg: boolean;
	location: string;
	hoverMsg: string;
}

export interface ProjectBlockProps {
	mainImg: string;
	title: string;
	description: string;
	links: Link[];
	icons: Icon[];
}

export const ProjectBlock = (props: ProjectBlockProps): JSX.Element => {
	const renderLinks = (links: Link[]): JSX.Element[] => {
		return links.map((link) => {
			return (
				<div key={link.title}>
					<br />
					<a className="btn btn-launch" href={link.href} target="blank">
						{link.title}
					</a>
				</div>
			);
		});
	};

	const renderIcons = (icons: Icon[]): JSX.Element[] => {
		return icons.map((icon) => {
			return (
				<React.Fragment key={icon.location}>
					<div className="icon-container">
						<p className="icon-hover">{icon.hoverMsg}</p>
						{icon.isImg ? (
							<img
								src={icon.location}
								alt="location"
								style={{ paddingLeft: 15, paddingRight: 15 }}
							/>
						) : (
							<i className={icon.location}></i>
						)}
					</div>
				</React.Fragment>
			);
		});
	};

	return (
		<div className="row repo-row">
			<div className="col-sm-8 col-sm-offset-2">
				<div className="row vertical-align">
					<div className="col-xs-12 col-md-8">
						<img src={props.mainImg} alt="main" />
					</div>
					<div className="col-xs-12 col-md-4 descriptions">
						<h2>{props.title}</h2>
						<p>{props.description}</p>
						{renderLinks(props.links)}
					</div>
				</div>
				<div className="row text-center techUsed">
					<div className="col-xs-12">
						<div className="horizontal-list media-list">
							{renderIcons(props.icons)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
