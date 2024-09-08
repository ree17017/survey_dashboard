"use client";
import {
	Box,
	Button,
	Chip,
	Divider,
	Grid2,
	Typography,
	lighten,
} from "@mui/material";
import { Header } from "../../components/Header";
import {
	AddOutlined,
	FiberManualRecord,
	FileDownloadOutlined,
} from "@mui/icons-material";
import { SurveyTable } from "../../modules/survey_library/SurveyTable";
import { GridColDef } from "@mui/x-data-grid";
import { useSurveyData } from "../../modules/survey_library/useSurveyData";
import { CopyHyperLink } from "../../components/CopyHyperLink";

type StatusKey = "success" | "disabled" | "pending" | "deleted";

export default function Home() {
	const { rows, loading, error } = useSurveyData();
	const labels: Record<StatusKey, string> = {
		success: "Active",
		disabled: "Disabled",
		pending: "Pending",
		deleted: "Deleted",
	};

	const statusColor: Record<StatusKey, "success" | "error" | "warning"> = {
		success: "success",
		disabled: "success",
		pending: "success",
		deleted: "success",
	};

	const chipColors: Record<StatusKey, string> = {
		success: "#4caf50", // Green for success
		disabled: "#9e9e9e", // Gray for disabled
		pending: "#ff9800", // Orange for pending
		deleted: "#f44336", // Red for deleted
	};

	const StatusLabel: React.FC<{ status: StatusKey }> = ({ status }) => {
		const label = labels[status] || "Unknown";
		const color = statusColor[status] || "Unknown";
		const lighterColor = lighten(chipColors[status] || "#ccc", 0.9);

		return (
			<Chip
				sx={{ background: lighterColor }}
				label={label}
				icon={<FiberManualRecord fontSize="small" color={color} />}
			/>
		);
	};
	const columns: GridColDef[] = [
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
			field: "start_timestamp",
			headerName: "Date Created",
			width: 180,
			headerClassName: "super-app-theme--header",
		},
		{
			field: "survey_url",
			headerName: "Hyperlink",
			width: 357,
			headerClassName: "super-app-theme--header",
			renderCell: (params) => (
				<CopyHyperLink hyperlink={params.row.survey_url} />
			),
		},
	];

	return (
		<>
			<Box mt="120px" ml="32px" mr="32px">
				<Grid2>
					<Header
						title="Survey Dashboard"
						description="All your survey activity displayed in one convenient place."
					/>
					<Button variant="outlined" sx={{ marginTop: "16px" }}>
						<FileDownloadOutlined /> EXPORT
					</Button>
					<Button
						variant="contained"
						sx={{ marginTop: "16px", marginLeft: "8px" }}
					>
						<AddOutlined /> NEW SURVEY
					</Button>
				</Grid2>
			</Box>
			<Divider variant="fullWidth" sx={{ marginTop: "16px" }} />
			<Box ml="32px" mr="32px">
				<Typography sx={{ margin: "16px 0 16px 0" }}>
					Search and date
				</Typography>
				<Grid2 sx={{ borderRadius: "16px", maxWidth: "900px" }}>
					{rows && (
						<SurveyTable
							columns={columns}
							rows={rows}
							loading={loading}
							error={error}
						/>
					)}
				</Grid2>
			</Box>
		</>
	);
}
