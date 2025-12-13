import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceCart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";


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
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px] ">
            <AttendanceChart/>
          </div>
        </div>

        {/* Bottom CHART */}
        <div className="w-full h-[500px] ">
          {/* এখানে Bottom chart / Table দিবে */}
          <FinanceCart/>
        </div>

      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
