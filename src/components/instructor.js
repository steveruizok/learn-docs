/** @jsx jsx */
import { jsx } from "theme-ui";

export default function({ name, twitter, image }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				margin: "16px 0",
				marginRight: 24
			}}
		>
			<div
				style={{
					height: 32,
					width: 32,
					borderRadius: "100%",
					overflow: "hidden",
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					marginRight: 8
				}}
			/>
			<a
				sx={{
					color: "primary",
					textDecoration: "none",
					"&:visited": {
						color: "primary"
					},
					"&:hover": {
						textDecoration: "underline"
					}
				}}
				href={`https://twitter.com/${twitter}`}
			>
				{name}
			</a>
		</div>
	);
}
