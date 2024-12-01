<?php

namespace App\Http\Controllers;

use App\Models\Gig;

class GigController extends Controller
{
    public function index()
    {
        return Gig::all(); // Returns all gigs as JSON
    }

    /**
     * Fetch a single gig by ID.
     */
    public function show($id)
    {
        return Gig::findOrFail($id); // Returns a gig or 404 if not found
    }

    /**
     * Store a new gig.
     */
    public function store(Request $request)
    {
        // Validate incoming request
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'budget' => 'required|numeric|min:0',
            'business_id' => 'required|exists:users,id', // Ensure the business exists
            'category' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
            'status' => 'nullable|in:open,in progress,completed,canceled', // Enum validation
        ]);

        // Create the gig
        $gig = Gig::create($validatedData);

        return response()->json($gig, 201); // Return the created gig
    }
}
