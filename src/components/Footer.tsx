interface FooterProps {
	email: string;
}

export const Footer = (props: FooterProps): JSX.Element => {
	return (
		<div className="row row-footer text-center">
			<div className="col">
				<div style={{ margin: '50px' }}>
					<h3 style={{ margin: '50px 0 15px' }}>
						I'm available for work, get in touch
					</h3>
					<a
						style={{ fontSize: '15px' }}
						href={`mailto:${props.email}`}
						target="blank"
					>
						{props.email}
					</a>
				</div>
			</div>
		</div>
	);
};
