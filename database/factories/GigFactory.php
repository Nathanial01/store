<?php

namespace Database\Factories;

use App\Models\User; // Correct reference to User model
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gig>
 */
class GigFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'budget' => $this->faker->randomFloat(2, 100, 1000), // Budget between 100 and 1000
            'business_id' => User::factory()->create(['user_type' => 'business'])->id, // Create a business user
            'category' => $this->faker->word(),
            'location' => $this->faker->city(),
            'status' => 'open', // Default status
        ];
    }
}
