import { store } from "@/lib/store";
import { Metadata } from "next";
import { ProfilePage } from "@/lib/components/pages/profile/profile-page";

export function generateMetadata() {
    const { user } = store.getState().auth;
    const metadata: Metadata = {
        title: 'Profile Page',
        description: 'Profile page',
    };
    if (user?.name?.firstname) {
        metadata.title = `${user.name.firstname.toUpperCase()} ${user.name.lastname.toUpperCase()} | Profile Page`;
        metadata.description = `${user.name.firstname} ${user.name.lastname}'s profile`;
    }
    return metadata;
}

export default function Profile() {
    return (
        <>
            <ProfilePage />
        </>
    );
}