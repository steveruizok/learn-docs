/** @jsx jsx */
import { jsx } from "theme-ui";
import { MdFileDownload } from "react-icons/md";

function Download({ title = "Project.framerx", url = "" }) {
	return (
		<div
			sx={{
				width: ["auto", "fit-content"],
				py: 3,
				px: 4,
				mb: 4,
				borderRadius: 8,
				bg: "primary",
				color: "#FFF",
				h3: {
					marginTop: 0,
					marginBottom: 0,
					lineHeight: 1
				},
				a: {
					color: "#FFF",
					textDecoration: "none"
				}
			}}
		>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={url}
				sx={{
					textDecoration: "none",
					display: "flex",
					flexDirection: "row",
					placeItems: "center",
					placeContent: "center"
				}}
			>
				<MdFileDownload size="1.5em" />
				<h3 sx={{ ml: 2, display: "inline-block" }}>{title}</h3>
			</a>
		</div>
	);
}

export default Download;
