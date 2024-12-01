import React, { useEffect, useState } from "react";
import axios from "axios";

const CookieConsent = () => {
    const [cookieHtml, setCookieHtml] = useState("");

    useEffect(() => {
        // Fetch cookie banner HTML from the backend
        axios.get("/cookie-consent-html")
            .then((response) => {
                setCookieHtml(response.data);

                // Add interactivity once HTML is rendered
                setTimeout(() => {
                    const acceptButton = document.getElementById("cookie-accept-all");
                    const rejectButton = document.getElementById("cookie-reject-all");
                    const settingsButton = document.getElementById("cookie-settings");
                    const saveSettingsButton = document.getElementById("save-settings");
                    const closeSettingsButton = document.getElementById("close-settings");

                    const analyticsCheckbox = document.getElementById("analytics-cookies");
                    const marketingCheckbox = document.getElementById("marketing-cookies");

                    // Function to hide the banner
                    const hideBanner = () => {
                        const banner = document.getElementById("cookie-banner");
                        if (banner) banner.style.display = "none";
                    };

                    // Function to show the settings modal
                    const showSettingsModal = () => {
                        const modal = document.getElementById("cookie-settings-modal");
                        if (modal) modal.classList.remove("hidden");
                    };

                    // Function to hide the settings modal
                    const hideSettingsModal = () => {
                        const modal = document.getElementById("cookie-settings-modal");
                        if (modal) modal.classList.add("hidden");
                    };

                    // Function to set a cookie
                    const setCookie = (name, value, days) => {
                        const date = new Date();
                        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
                    };

                    // Accept all cookies
                    if (acceptButton) {
                        acceptButton.addEventListener("click", () => {
                            setCookie("cookie_consent", "accepted", 365);
                            setCookie("analytics_cookies", true, 365);
                            setCookie("marketing_cookies", true, 365);
                            hideBanner();
                        });
                    }

                    // Reject all cookies
                    if (rejectButton) {
                        rejectButton.addEventListener("click", () => {
                            setCookie("cookie_consent", "rejected", 365);
                            setCookie("analytics_cookies", false, 365);
                            setCookie("marketing_cookies", false, 365);
                            hideBanner();
                        });
                    }

                    // Open settings modal
                    if (settingsButton) {
                        settingsButton.addEventListener("click", () => {
                            showSettingsModal();
                        });
                    }

                    // Save settings preferences
                    if (saveSettingsButton) {
                        saveSettingsButton.addEventListener("click", () => {
                            const analyticsEnabled = analyticsCheckbox?.checked || false;
                            const marketingEnabled = marketingCheckbox?.checked || false;

                            setCookie("cookie_consent", "custom", 365);
                            setCookie("analytics_cookies", analyticsEnabled, 365);
                            setCookie("marketing_cookies", marketingEnabled, 365);

                          //  alert("Preferences saved!");
                            hideSettingsModal();
                            hideBanner();
                        });
                    }

                    // Close settings modal
                    if (closeSettingsButton) {
                        closeSettingsButton.addEventListener("click", () => {
                            hideSettingsModal();
                        });
                    }
                }, 0);
            })
            .catch((error) => {
                console.error("Error fetching cookie consent HTML:", error);
            });
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: cookieHtml }}></div>
        </div>
    );
};

export default CookieConsent;
