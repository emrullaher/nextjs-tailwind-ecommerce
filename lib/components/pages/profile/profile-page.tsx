'use client'
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export const ProfilePage = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    return (
        <>
            {user && (<div className="container py-16">
                <div
                    className="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
                >
                    <img
                        className="h-56 w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                    />

                    <div className="px-6 py-4">
                        <h1 className="text-xl font-semibold capitalize text-gray-800 dark:text-white">
                            {user?.name?.firstname}
                            {user?.name?.lastname}
                        </h1>

                        <p className="py-2 text-gray-700 dark:text-gray-400">
                            Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.
                        </p>

                        <div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
                            <svg
                                fill="currentColor"
                                height="24"
                                viewBox="0 0 16 16"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 fill-current"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                <path
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                    fillRule="evenodd"
                                ></path>
                            </svg>

                            <h1 className="px-2 text-sm">{user?.username}</h1>
                        </div>

                        <div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
                            <svg
                                aria-label="location pin icon"
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                                /><path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                                />
                            </svg>

                            <h1 className="px-2 text-sm capitalize">{user?.address?.city}</h1>
                        </div>

                        <div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
                            <svg
                                aria-label="email icon"
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                />
                            </svg>

                            <h1 className="px-2 text-sm">{user?.email}</h1>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}