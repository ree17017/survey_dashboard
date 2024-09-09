import { FiberManualRecord } from "@mui/icons-material";
import { lighten, Chip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { StatusKey } from "../src/app/page";
import { CopyHyperLink } from "../components/CopyHyperLink";

export const labels: Record<StatusKey, string> = {
	success: "Active",
	disabled: "Disabled",
	pending: "Pending",
	deleted: "Deleted",
};

export const statusColor: Record<StatusKey, "success" | "error" | "warning"> = {
	success: "success",
	disabled: "success",
	pending: "success",
	deleted: "success",
};

export const chipColors: Record<StatusKey, string> = {
	success: "#4caf50",
	disabled: "#9e9e9e",
	pending: "#ff9800",
	deleted: "#f44336",
};

export const StatusLabel: React.FC<{ status: StatusKey }> = ({ status }) => {
	const label = labels[status] || "Unknown";
	const color = statusColor[status] || "Unknown";
	const lighterColor = lighten(chipColors[status] || "#ccc", 0.9);

	return (
		<Chip
			sx={{ background: lighterColor, marginLeft: "16px" }}
			label={label}
			icon={<FiberManualRecord fontSize="small" color={color} />}
		/>
	);
};

export const columns: GridColDef[] = [
	{
		field: "status",
		headerName: "Status",
		width: 180,
		renderCell: (params) => (
			<StatusLabel status={params.row.status as StatusKey} />
		),
		headerClassName: "super-app-theme--header",
	},
	{
		field: "title",
		headerName: "Title",
		width: 180,
		headerClassName: "super-app-theme--header",
	},
	{
		field: "startDateFormatted",
		headerName: "Date Created",
		width: 180,
		headerClassName: "super-app-theme--header",
	},
	{
		field: "survey_url",
		headerName: "Hyperlink",
		width: 357,
		headerClassName: "super-app-theme--header",
		renderCell: (params) => <CopyHyperLink hyperlink={params.row.survey_url} />,
	},
];
