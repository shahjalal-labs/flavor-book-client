const DashboardStatWithProfileImage = () => {
  return (
    <div className="stat ">
      <div className="stat-figure text-secondary">
        <div className="avatar avatar-online">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
          </div>
        </div>
      </div>
      <div className="stat-value">86%</div>
      <div className="stat-title">Tasks done</div>
      <div className="stat-desc text-secondary">31 tasks remaining</div>
    </div>
  );
};

export default DashboardStatWithProfileImage;
