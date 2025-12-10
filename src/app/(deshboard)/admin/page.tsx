import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          
          {/* CountChart */}
          <div className="w-full lg:w-1/3 h-[450px] bg-white rounded-xl shadow">
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px] bg-white rounded-xl shadow">
            {/* এখানে AttendanceChart কম্পোনেন্ট দিলে হবে */}
          </div>
        </div>

        {/* Bottom CHART */}
        <div className="w-full h-[300px] bg-white rounded-xl shadow">
          {/* এখানে Bottom chart / Table দিবে */}
        </div>

      </div>

      {/* right */}
      <div className="w-full lg:w-1/3">
        r
      </div>
    </div>
  );
};

export default AdminPage;
