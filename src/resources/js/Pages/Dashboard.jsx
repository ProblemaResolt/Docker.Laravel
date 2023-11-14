import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { DataGrid } from "@mui/x-data-grid";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    borderRadius: '0.5em',
    bgcolor: 'background.paper',
    border: '0.1em solid #efefef',
    boxShadow: 24,
    p: 4,
};

const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "monthDay", headerName: "日付", width: 100 },
    { field: "attendance", headerName: "出勤時間", width: 100 },
    { field: "leavingTime", headerName: "退勤時間", width: 100 },
    {
        field: "workTime",
        headerName: "労働時間",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 150,
        valueGetter: (params) =>
            `${params.row.attendance || ""} ${"-"} ${
                params.row.leavingTime || ""
            }`,
    },
    {
        field: "breakTime",
        headerName: "休憩時間",
        width: 100,
    },
];

const rows = [
    {
        id: 6,
        monthDay: "10月31日",
        attendance: "09:00",
        leavingTime: "18:00",
        breakTime: "01:00",
    },
    {
        id: 5,
        monthDay: "10月30日",
        attendance: "有給",
        leavingTime: "",
        breakTime: "",
    },
    {
        id: 4,
        monthDay: "10月29日",
        attendance: "09:00",
        leavingTime: "18:00",
        breakTime: "01:00",
    },
    {
        id: 3,
        monthDay: "10月28日",
        attendance: "09:00",
        leavingTime: "18:00",
        breakTime: "01:00",
    },
    {
        id: 2,
        monthDay: "10月27日",
        attendance: "09:00",
        leavingTime: "18:00",
        breakTime: "01:00",
    },
    {
        id: 1,
        monthDay: "10月26日",
        attendance: "09:00",
        leavingTime: "18:00",
        breakTime: "01:00",
    },
];

export default function Dashboard({ auth }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div style={{ height: "100%", width: "100%" }}>
                                <h3 style={{ margin: "0.5rem 0" }}>
                                    <Stack spacing={2} direction="row">
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker />
                                        </LocalizationProvider>
                                        <Button variant="contained">
                                            日付検索
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={handleOpen}
                                        >
                                            各種申請
                                        </Button>

                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography
                                                    id="modal-modal-title"
                                                    variant="h6"
                                                    component="h2"
                                                >
                                                    各種申請
                                                </Typography>
                                                <Typography
                                                    id="modal-modal-description"
                                                    sx={{ mt: 2 }}
                                                >
                                                    <Button variant="contained">申請する</Button>
                                                    
                                                </Typography>
                                            </Box>
                                        </Modal>
                                    </Stack>
                                </h3>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                page: 10,
                                                pageSize: 30,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[10, 20, 30]}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
