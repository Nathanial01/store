<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GigApplication extends Model
{
    use HasFactory;

    protected $fillable = ['gig_id', 'freelancer_id', 'application_text', 'proposed_budget', 'status'];

    public function gig() {
        return $this->belongsTo(Gig::class);
    }

    public function freelancer() {
        return $this->belongsTo(User::class, 'freelancer_id');
    }
}
