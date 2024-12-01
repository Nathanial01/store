<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    public function run()
    {
        Role::create(['name' => 'admin', 'description' => 'System administrator with full access']);
        Role::create(['name' => 'business', 'description' => 'Business users can post gigs']);
        Role::create(['name' => 'freelancer', 'description' => 'Freelancers can apply to gigs']);
    }
}
