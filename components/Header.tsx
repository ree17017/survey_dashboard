import { Grid2, Typography } from "@mui/material";

export function Header({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<Grid2>
			<Typography variant="h6" mb="6px">
				{title}
			</Typography>
			<Typography variant="subtitle2">{description}</Typography>
		</Grid2>
	);
}
