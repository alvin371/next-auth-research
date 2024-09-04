"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const setCookie = (name: string, value: string, days: number) => {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    };

    const handleLogin = async () => {
        // Check credentials
        if (email === "admin@admin.com" && password === "admin123!") {
            // Simulate token generation
            const token = "unique-admin-token";


            setCookie("authToken", token, 1);
            toast.success("Logged in successfully!");

            // Redirect to dashboard
            router.push("/dashboard");
        } else {
            toast.error("Invalid credentials!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-4"
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full mb-4"
                    placeholder="Password"
                />
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white p-2 w-full rounded"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
