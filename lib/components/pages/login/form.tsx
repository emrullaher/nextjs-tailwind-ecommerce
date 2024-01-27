'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "@/lib/features/alert/alertSlice";
import { login, setToken } from "@/lib/features/auth/authSlice";
import { AppDispatch } from "@/lib/store";


export const LoginForm = () => {

    const [username, setUsername] = useState('jimmie_k');
    const [password, setPassword] = useState('klein*#%*');

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const valid = form.checkValidity();
        if (!valid || !data.get('username') || !data.get('password')) {
            dispatch(setAlert({
                type: 'error',
                title: 'Error',
                message: 'Please fill all the fields'
            }));
        } else {
            try {
                await dispatch(login({ username, password })).unwrap()
                    .then((token) => {
                        dispatch(setToken(token));
                        window.location.href = '/profile';
                    });
            } catch (error) {
                // console.error('Login failed:', error);
                router.push('/');
            }
        }
    }
    return (<>
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mt-4 w-full">
                <input
                    className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300"
                    placeholder="Username"
                    aria-label="Username"
                    name="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="mt-4 w-full">
                <input
                    className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mt-4 flex items-center justify-between">
                <Link
                    href="/forget-password"
                    className="text-sm text-gray-600 hover:text-gray-500 dark:text-gray-200"
                >
                    Forget Password?
                </Link>

                <button
                    className="transform rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400"
                    type="submit"
                >
                    Login
                </button>
            </div>
        </form>
    </>)
}