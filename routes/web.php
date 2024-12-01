<?php
use App\Http\Controllers\GigController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\CookieController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/chatbot-blade', function () {
    return view('vendor.cyrox.chatbot.chatbot');
});

Route::get('/cookie-consent-html', function () {
    return view('vendor.cookie-consent.dialogContents');
});

Route::middleware(['role:admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);
});

Route::middleware(['role:business'])->group(function () {
    Route::get('/business/dashboard', [BusinessController::class, 'dashboard']);
});

Route::middleware(['role:freelancer'])->group(function () {
    Route::get('/freelancer/dashboard', [FreelancerController::class, 'dashboard']);
});


Route::get('/gigs', [GigController::class, 'index']); // Fetch all gigs
Route::get('/gigs/{id}', [GigController::class, 'show']); // Fetch a single gig
Route::post('/gigs', [GigController::class, 'store']); // Create a new gig


require __DIR__.'/auth.php';
