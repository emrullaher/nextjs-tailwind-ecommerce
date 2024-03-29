'use client'
import { IAlert } from '@/lib/definitions'
import { useEffect } from 'react';
import { clearAlert } from '@/lib/features/alert/alertSlice'
import { useDispatch,useSelector} from "react-redux";
import { RootState } from '@/lib/store';

export const Alert = () => {

	const status = {
		success: {
			bg: 'bg-emerald-500',
			text: 'text-emerald-500 dark:text-emerald-400'
		},
		error: {
			bg: 'bg-red-500',
			text: 'text-red-500 dark:text-red-400'
		},
		info: {
			bg: 'bg-blue-500',
			text: 'text-blue-500 dark:text-blue-400'
		},
		warning: {
			bg: 'bg-yellow-500',
			text: 'text-yellow-500 dark:text-yellow-400'
		}
	};


	const dispatch = useDispatch();
	const alert:IAlert = useSelector((state: RootState) => state.alert.alert);

	useEffect(() => {
		if (alert && alert.message) {
			const timeoutId = setTimeout(() => {
				dispatch(clearAlert());
			}, 3000);

			return () => clearTimeout(timeoutId);
		}
	}, [alert]);

	return alert && alert.message && (
		<div className="fixed left-[50%] top-5 z-[99999] -translate-x-1/2">
			<div
				className="flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
			>
				<div className={`flex w-12 items-center justify-center ${status[alert.type].bg}`}>
					{alert.type === 'success' && (
						<svg
							className="h-6 w-6 fill-current text-white"
							viewBox="0 0 40 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
							/>
						</svg>
					)}

					{alert.type === 'info' || alert.type === 'warning' && (<svg
						className="h-6 w-6 fill-current text-white"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
						/>
					</svg>)}

					{alert.type === 'error' && (
						<svg
							className="h-6 w-6 fill-current text-white"
							viewBox="0 0 40 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
							/>
						</svg>
					)}
				</div>

				<div className="-mx-3 px-4 py-2">
					<div className="mx-3">
						<span className={`font-semibold ${status[alert.type].text}`}>{alert.title}</span>
						<p className="text-sm text-gray-600 dark:text-gray-200">{alert.message}</p>
					</div>
				</div>
			</div>
		</div>
	)
}



