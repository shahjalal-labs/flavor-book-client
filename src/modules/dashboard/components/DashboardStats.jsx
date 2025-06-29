import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const statsObject = [
  {
    title: "Total Likes",
    value: "25.6K",
    desc: "21% more than last month",
    color: "primary",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Page Views",
    value: "2.6M",
    desc: "21% more than last month",
    color: "secondary",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];
const DashboardStats = () => {
  const { user } = useContext(AuthContext);

  const statsData = [
    ...statsObject,
    {
      title: "Tasks Done",
      value: "86%",
      desc: "31 tasks remaining",
      color: "accent",
      icon: (
        <div className="avatar avatar-online">
          <div className="w-16 rounded-full">
            <img
              src={user?.photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="rounded-full w-16 h-16 object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="stats shadow flex flex-wrap justify-center">
      {statsData.map((stat, index) => (
        <div className="stat" key={index}>
          <div className={`stat-figure text-${stat.color}`}>{stat.icon}</div>
          <div className="stat-title">{stat.title}</div>
          <div className={`stat-value text-${stat.color}`}>{stat.value}</div>
          <div className="stat-desc">{stat.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
