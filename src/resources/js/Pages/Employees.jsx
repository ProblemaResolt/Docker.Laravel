import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "firstName", headerName: "名字", width: 100 },
    { field: "lastName", headerName: "名前", width: 100 },
    {
        field: "fullName",
        headerName: "フルネーム",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 120,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 50,
    },
    { field: "tell", headerName: "連絡先", width: 130 },
    { field: "email", headerName: "Email", width: 230 },
];

const rows = [
    { id: 1, lastName: "一郎", firstName: "田中", age: 35, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, tell: "080-1234-5678", email: "tanaka@example.com" },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, tell: "080-1234-5678", email: "tanaka@example.com" },
];

export default function Employees({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Employees
                </h2>
            }
        >
            <Head title="Employees" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div style={{ height:"100%", width: "100%" }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                page: 0,
                                                pageSize: 10,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[10, 100]}
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
