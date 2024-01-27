import Link from "next/link";
import { Metadata } from "next";
import { Logo } from "@/lib/components/shared/logo";
import { LoginForm } from "@/lib/components/pages/login/form";

export const metadata: Metadata = {
	title: 'Login | Fake Store',
	description: 'Login to your account',
};

export default function Login() {
	return (
		<>
			<hr />
			<div
				className="mx-auto my-16 w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-transparent dark:bg-gray-800"
			>
				<div className="px-6 py-4">
					<div className="mx-auto flex justify-center">
						<Logo />
					</div>

					<h3 className="mt-3 text-center text-xl font-medium text-gray-600 dark:text-gray-200">
						Welcome Back
					</h3>

					<p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

					<LoginForm></LoginForm>
				</div>

				<div className="flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700">
					<span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

					<Link
						href="/register"
						className="mx-2 text-sm font-bold text-blue-500 hover:underline dark:text-blue-400">
						Register
					</Link>
				</div>
			</div>
		</>
	)
}