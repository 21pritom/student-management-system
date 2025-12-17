import { redirect } from "next/navigation";
import { role } from "@/lib/data";

const Homepage = () => {
  // If admin, redirect immediately
  if (role === "admin") {
    redirect("/admin");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Homepage</h1>
    </div>
  );
};

export default Homepage;
