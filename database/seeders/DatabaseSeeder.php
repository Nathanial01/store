<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Call individual seeders here
        $this->call([
            UserSeeder::class, // If you have a UserSeeder to create users
            GigSeeder::class,  // Seeder to populate the gigs table
        ]);
    }
}
