import UpgradeRequired from "@/components/common/upgrade-required";
import { hasActivePlan } from "@/utils/user";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {

    const user = await currentUser();
    if (!user) {
        redirect('/sign-in');
    }

    const hasActiveSubscription = hasActivePlan(user.emailAddresses[0].emailAddress);
    if (!hasActiveSubscription) {
        return <UpgradeRequired />
    }
    return <>{children}</>
}