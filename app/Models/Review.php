<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['reviewer_id', 'reviewed_id', 'gig_id', 'rating', 'review_text'];

    public function reviewer() {
        return $this->belongsTo(User::class, 'reviewer_id');
    }

    public function reviewed() {
        return $this->belongsTo(User::class, 'reviewed_id');
    }

    public function gig() {
        return $this->belongsTo(Gig::class);
    }
}
