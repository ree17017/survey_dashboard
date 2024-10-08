import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Survey } from "./useSurveyData";

interface TableProps {
	columns: GridColDef[];
	rows?: Survey[];
	loading: boolean;
	error: Error | null;
}

const SurveyLayout = ({ children }: { children: React.ReactElement }) => {
	return (
		<Box
			borderTop="1px solid #EBEBEB"
			borderRadius="12px"
			borderLeft="1px solid #EBEBEB"
			borderRight="1px solid #EBEBEB"
		>
			<Typography m="16px 0 16px 24px" fontWeight={550}>
				Your Surveys
			</Typography>
			{children}
		</Box>
	);
};

export function SurveyTable({ columns, rows, loading, error }: TableProps) {
	if (error || (!rows && !loading)) {
		return (
			<SurveyLayout>
				<>Error</>
			</SurveyLayout>
		);
	}

	return (
		<SurveyLayout>
			<DataGrid
				sx={{
					borderRadius: 0,
					"& .super-app-theme--header": {
						background: "#F7F8FA",
					},
					"& .MuiDataGrid-filler": {
						background: "#F7F8FA",
					},
				}}
				columns={columns}
				rows={rows}
				loading={loading}
				rowHeight={100}
				initialState={{
					pagination: { paginationModel: { pageSize: 5 } },
				}}
				pageSizeOptions={[5, 10, 25]}
				slotProps={{
					loadingOverlay: {
						variant: "circular-progress",
						noRowsVariant: "circular-progress",
					},
				}}
			/>
		</SurveyLayout>
	);
}
