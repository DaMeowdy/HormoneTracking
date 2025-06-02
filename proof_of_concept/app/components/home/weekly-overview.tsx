export const WeeklyOverview: React.FC = () => {
  const date = [
    false,
    true,
    false,
    false,
    false,
    false,
    false
  ];
  const days = [
    "M",
    "T",
    "W",
    "Th",
    "F",
    "S",
    "Su"
  ]

  return (
  // update this to use grid
  <div className="m-4 p-2 rounded-2xl bg-indigo-500 border-indigo-950">
    <h1 className="font-bold text-center">Weekly Calender</h1>
      <ul className="flex justify-center">
        {days.map((day)=>(<div className="p-2 text-lg border-indigo-950">{day}</div>))}
      </ul>
      <ul className="flex justify-center">
        {date.map((result)=>result?(<li>
          <div className="p-4 bg-pink-300 border-2 border-indigo-950"></div>
        </li>):(<li>
          <div className="p-4 border-2 border-indigo-950"></div>
        </li>))}
      </ul>
      <div className="py-4">
        <h1 className="font-bold text-center">Next Bloods Due in 14 days</h1>
        <div className="px-2 ">
          <h2>When would you like us to prompt you for results?</h2>
          <input type="date" name="" id="" />
        </div>
      </div>
    </div>
  );
}
