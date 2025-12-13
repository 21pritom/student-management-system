 "use client";
import Image from "next/image";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 70,
    adsent: 30,
  },
  {
    name: 'Tue',
    present: 80,
    adsent: 20,
  },
  {
    name: 'Wed',
    present: 75,
    adsent: 25,
  },
  {
    name: 'Thu',
    present: 10,
    adsent: 90,
  },
  {
    name: 'Fri',
    present: 90,
    adsent: 10,
  },
  {
    name: 'sat',
    present: 0,
    adsent: 100,
  },
  {
    name: 'sun',
    present: 100,
    adsent: 10,
  },

];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg w-full p-4 h-full'>
       <div className="flex justify-between items-center">
         <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
       </div>
       <div>
         <BarChart
           style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
           data={data}
         >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"d1d5db"}} tickLine={false}/>
          <YAxis  axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10",borderColor:"lightgray"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop :"20px", paddingBottom:"40px"}} />
          <Bar dataKey="present" fill="#C3EBFA"
          legendType="circle" radius={[10,10,0,0]}/>
          <Bar dataKey="adsent" fill="#FAE27C"
          legendType="circle" radius={[10,10,0,0]} />
        </BarChart>
       </div>
    </div>

  )
} 
 export default AttendanceChart