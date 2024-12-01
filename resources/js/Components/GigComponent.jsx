import React, { useEffect, useState } from "react";

const GigComponent = () => {
    const [gigs, setGigs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch gigs from API
    useEffect(() => {
        const fetchGigs = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/gigs"); // Adjust URL if necessary
                if (!response.ok) {
                    console.error(`HTTP Error: ${response.status} ${response.statusText}`);
                    throw new Error("Failed to fetch gigs.");
                }
                const data = await response.json();
                setGigs(data); // Set the gigs data
                setLoading(false);
            } catch (err) {
                console.error("Error fetching gigs:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGigs(); // Call the fetchGigs function
    }, []); // Runs only once on component mount

    // Loading State
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-lg text-gray-600">Loading gigs...</p>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-lg text-red-500">{error}</p>
            </div>
        );
    }

    // Main Component
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <div className="mb-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Available Gigs</h1>
                <p className="text-gray-600">Explore and apply for the latest opportunities.</p>
            </div>

            {/* Gig List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gigs.length > 0 ? (
                    gigs.map((gig) => (
                        <div
                            key={gig.id}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{gig.title}</h2>
                                <p className="text-gray-600 mt-2 text-sm">{gig.description}</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                    <strong>Budget:</strong> ${gig.budget}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <strong>Category:</strong> {gig.category}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <strong>Location:</strong> {gig.location || "Remote"}
                                </p>
                            </div>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                                Apply Now
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-full">
                        No gigs available at the moment.
                    </p>
                )}
            </div>
        </div>
    );
};

export default GigComponent;
