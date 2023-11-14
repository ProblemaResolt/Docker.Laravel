import * as React from "react";
import dayjs from "dayjs";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";

const date1 = dayjs("2022-04-17T15:30");
const date2 = dayjs("2022-04-21T18:30");

export default function Attendance({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Attendance
                </h2>
            }
        >
            <Head title="Attendance" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Attendance
                            <Stack spacing={2} direction="row">
                                <Button variant="contained">出勤</Button>
                                <Button variant="outlined">退勤</Button>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <SingleInputTimeRangeField
                                        defaultValue={[date1, date2]}
                                    />{" "}
                                </LocalizationProvider>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
