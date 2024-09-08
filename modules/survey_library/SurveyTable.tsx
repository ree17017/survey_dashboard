import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Survey } from "./useSurveyData";

interface TableProps {
	columns: GridColDef[];
	rows: Survey[];
	loading: boolean;
	error: Error | null;
}

export function SurveyTable({ columns, rows, loading }: TableProps) {
	return (
		<Box
			borderTop="1px solid #EBEBEB"
			borderRadius="12px"
			borderLeft="1px solid #EBEBEB"
			borderRight="1px solid #EBEBEB"
		>
			<Typography m="16px 0 16px 16px">Your Surveys</Typography>
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
						variant: "skeleton",
						noRowsVariant: "skeleton",
					},
				}}
			/>
		</Box>
	);
}
