import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";

const Dashboard = () => {
    const { user } = useUser();

    return (
      <div className="p-4">
        <h1>Welcome, {user?.fullName}</h1>
        <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        <UserButton afterSignOutUrl="/"/>
      </div>
    );
}

export default Dashboard
