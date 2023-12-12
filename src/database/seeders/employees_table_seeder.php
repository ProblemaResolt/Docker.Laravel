<?php
// employees_table_seeder.php

use Illuminate\Database\Seeder;
use App\Models\Employee;

class EmployeesTableSeeder extends Seeder
{
    public function run()
    {
        $employees = [
            [
                'first_name' => '田中',
                'last_name' => '一郎',
                'age' => 35,
                'tell' => '080-1234-5678',
                'email' => 'tanaka@example.com',
                'user_id' => 1,
            ],
            [
                'first_name' => 'Lannister',
                'last_name' => 'Cersei',
                'age' => 42,
                'tell' => '080-1234-5678',
                'email' => 'cersei@example.com',
                'user_id' => 2,
            ],
            [
                'first_name' => 'Lannister',
                'last_name' => 'Jaime',
                'age' => 45,
                'tell' => '080-1234-5678',
                'email' => 'jaime@example.com',
                'user_id' => 2,
            ],
            ...
        ];

        Employee::insert($employees);
    }
}