<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gig extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'budget', 'business_id', 'category', 'location', 'status'];

    public function business() {
        return $this->belongsTo(User::class, 'business_id');
    }

    public function applications() {
        return $this->hasMany(GigApplication::class);
    }

    public function contract() {
        return $this->hasOne(Contract::class);
    }
}
