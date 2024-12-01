<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id(); // Creates an auto-incrementing primary key
            $table->foreignId('contract_id') // Creates a foreign key
                ->constrained('contracts')
                ->onDelete('cascade');
            $table->decimal('amount', 10, 2); // Payment amount
            $table->timestamp('payment_date'); // Payment date
            $table->enum('payment_status', ['pending', 'completed', 'failed']) // Payment status
                ->default('pending');
            $table->timestamps(); // Adds `created_at` and `updated_at`
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
