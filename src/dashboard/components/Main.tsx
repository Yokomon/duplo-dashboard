import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { StatsCard } from "./StatsCard";
import { getStatsCard } from "../utils/getStatsCard";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { BsThreeDotsVertical } from "@react-icons/all-files/bs/BsThreeDotsVertical";
import useStore from "../../hooks/useStore";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 10,
    pv: 40,
    amt: 20,
  },
  {
    name: "Feb",
    uv: 32,
    pv: 24,
    amt: 23,
  },
  {
    name: "Mar",
    uv: 10,
    pv: 45,
    amt: 24,
  },
  {
    name: "Apr",
    uv: 50,
    pv: 23,
    amt: 15,
  },
  {
    name: "May",
    uv: 20,
    pv: 30,
    amt: 10,
  },
  {
    name: "Jun",
    uv: 10,
    pv: 20,
    amt: 44,
  },
  {
    name: "July",
    uv: 34,
    pv: 33,
    amt: 20,
  },
  {
    name: "Aug",
    uv: 10,
    pv: 40,
    amt: 20,
  },
  {
    name: "Sep",
    uv: 20,
    pv: 40,
    amt: 20,
  },
  {
    name: "Oct",
    uv: 50,
    pv: 20,
    amt: 10,
  },
  {
    name: "Nov",
    uv: 10,
    pv: 40,
    amt: 20,
  },
  {
    name: "Dec",
    uv: 10,
    pv: 30,
    amt: 10,
  },
];

export const Main = () => {
  const { profile } = useStore();
  return (
    <main className="pl-[20rem] w-full pr-[25rem] pb-12 h-full overflow-scroll">
      <div className="flex items-center flex-wrap gap-3 justify-between py-4">
        <div>
          <h2 className="text-2xl font-medium my-2">Dashboard</h2>
          <h5 className="text-gray-500 text-base font-medium tracking-wider">
            Hello, {profile?.name}. Welcome to PanelTest
          </h5>
        </div>
        <div className="relative">
          <button className="h-12 bg-blue-500 w-12 rounded-e-xl flex items-center justify-center absolute right-0">
            <FiSearch size={25} className="text-white" />
          </button>
          <input
            type="text"
            placeholder="Search by anything"
            className="border-none rounded-lg focus:ring-0 h-12 placeholder-gray-300 tracking-wider text-sm p-1 px-4 w-64 2xl:w-96 form-input"
          />
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-12 my-4">
        {getStatsCard().map(
          ({ icon, iconColor, bgColor, title, amount, svgColor }) => (
            <StatsCard
              key={title}
              icon={icon}
              title={title}
              amount={amount}
              iconColor={iconColor}
              bgColor={bgColor}
              svgColor={svgColor}
            />
          )
        )}
      </div>

      {/* Second chart */}
      <div className="bg-gray-50 h-[30rem] text-sm font-medium text-gray-400 3xl:w-[72rem] my-8 rounded-md p-8">
        <h3 className="text-lg text-gray-600 font-jost tracking-wider">
          Statistics of active Applications
        </h3>
        <div className="p-5 h-full w-full">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart
              width={500}
              height={300}
              data={data}
              barSize={13}
              barGap={30}
              barCategoryGap={16}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              style={{
                stroke: "rgb(249 250 251 / 1)",
                strokeWidth: 5,
              }}
            >
              <XAxis dataKey="name" dy={13} strokeWidth={0} />
              <YAxis
                dx={-15}
                tickFormatter={(tick) => {
                  return `${tick}%`;
                }}
                strokeWidth={0}
              />
              <Bar dataKey="pv" stackId="a" fill="#56CCF2" radius={10} />
              <Bar
                dataKey="amt"
                stackId="a"
                fill="#FFA600"
                radius={10}
                spacing={100}
              />
              <Bar dataKey="uv" stackId="a" fill="#FF5630" radius={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex items-center gap-10 flex-wrap">
        <div className="bg-gray-50 rounded-md p-5 w-[40rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-gray-800 tracking-wider">
              Activity Feed
            </h1>

            <div className="border rounded-lg cursor-pointer hover:shadow-sm duration-300 p-2 px-4 text-gray-500 flex items-center space-x-2">
              <h5 className=" tracking-wider text-xs font-medium">
                All Activity
              </h5>
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>

          <div className="space-y-8 my-8">
            <div className="flex items-center space-x-3">
              <img src="/images/Avatar-4.png" alt="user-img" className="w-9" />

              <div className="text-gray-400 text-sm tracking-wide flex-1">
                <b className="text-gray-700 ">Marvin McKinney</b> applied for
                the job <b className="text-gray-700 ">Product Designer</b>
                <p className="text-xs text-gray-400 my-1">10 mins ago</p>
              </div>
              <button className="p-2 px-4 duration-500 hover:shadow-sm bg-blue-100 text-blue-400 text-xs rounded-lg">
                <span>Applying</span>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/images/Avatar-5.png" alt="user-img" className="w-9" />

              <div className="text-gray-400 text-sm tracking-wide flex-1">
                <b className="text-gray-700 ">Jane Copper</b> Created new
                Account as a <b className="text-gray-700 ">Job Hunt</b>
                <p className="text-xs text-gray-400 my-1">4 hours ago</p>
              </div>
              <button className="p-2 px-4 duration-500 hover:shadow-sm bg-green-100 text-green-400 text-xs rounded-lg">
                <span>Sign up</span>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/images/Avatar-6.png" alt="user-img" className="w-9" />

              <div className="text-gray-400 text-sm tracking-wide flex-1">
                <b className="text-gray-700 ">Jenny Wilson</b> applied for the
                job <b className="text-gray-700 ">Frontend Engineer</b>
                <p className="text-xs text-gray-400 my-1">10 mins ago</p>
              </div>
              <button className="p-2 px-4 duration-500 hover:shadow-sm bg-blue-100 text-blue-400 text-xs rounded-lg">
                <span>Applying</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-md p-5 w-[29.5rem]">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-gray-800 tracking-wider">
              Meetings
            </h1>

            <div className="border rounded-lg cursor-pointer hover:shadow-sm duration-300 p-2 px-4 text-gray-500 flex items-center space-x-2">
              <h5 className=" tracking-wider text-xs font-medium">
                Create new
              </h5>
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
          <div className="space-y-5 my-8">
            <div className="flex items-center space-x-5">
              <div className="bg-white rounded-md p-2 flex flex-col items-center">
                <h3 className="text-yellow-500 text-sm">Mon</h3>
                <p className="text-xs">10</p>
              </div>

              <div className="text-gray-700 text-sm tracking-wide flex-1">
                <b>Interview</b>
                <p className="text-xs text-gray-400 my-1">9:00am - 11:30am</p>
              </div>
              <button className="p-1.5 text-gray-500 duration-500 hover:shadow-sm bg-gray-200 rounded-md">
                <BsThreeDotsVertical size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-5">
              <div className="bg-white rounded-md p-2 flex flex-col items-center">
                <h3 className="text-yellow-500 text-sm">Thu</h3>
                <p className="text-xs">08</p>
              </div>
              <div className="text-gray-700 text-sm tracking-wide flex-1">
                <b>Organizational meeting</b>
                <p className="text-xs text-gray-400 my-1">9:00am - 11:30am</p>
              </div>
              <button className="p-1.5 text-gray-500 duration-500 hover:shadow-sm bg-gray-200 rounded-md">
                <BsThreeDotsVertical size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-5">
              <div className="bg-white rounded-md p-3 flex flex-col items-center">
                <h3 className="text-yellow-500 text-sm">Fri</h3>
                <p className="text-xs">11</p>
              </div>
              <div className="text-gray-700 text-sm tracking-wide flex-1">
                <b>Meeting with the manager</b>
                <p className="text-xs text-gray-400 my-1">9:00am - 11:30am</p>
              </div>
              <button className="p-1.5 text-gray-500 duration-500 hover:shadow-sm bg-gray-200 rounded-md">
                <BsThreeDotsVertical size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
