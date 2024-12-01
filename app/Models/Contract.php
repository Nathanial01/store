<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    protected $fillable = ['gig_id', 'freelancer_id', 'business_id', 'start_date', 'end_date', 'status', 'agreed_budget'];

    public function gig() {
        return $this->belongsTo(Gig::class);
    }

    public function freelancer() {
        return $this->belongsTo(User::class, 'freelancer_id');
    }

    public function business() {
        return $this->belongsTo(User::class, 'business_id');
    }
}
