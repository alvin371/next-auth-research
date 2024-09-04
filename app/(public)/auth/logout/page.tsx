"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // Remove the auth token from localStorage
        localStorage.removeItem("authToken");

        // Optionally, remove the auth token from cookies
        document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        // Redirect to the login page or homepage
        router.push("/auth/login");
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-lg">Logging you out...</p>
        </div>
    );
}
