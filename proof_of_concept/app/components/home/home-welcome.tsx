// all of this will be dynamically generated bar username. I should probably set up some form of context or global state lmao

export const HomeWelcome: React.FC = () =>
{

  const greeting = "Hey hey";
  return (
    <div className="m-4 p-2 rounded-2xl bg-indigo-500 border-indigo-950">
      <h1 className="text-center">{greeting} Madison</h1>
      {/* add image in line with message and everything */}
      <h2 className="px-2">You've been going great this month! 4/4 doses taken! Keep up the great work girly! this is an improvement of 25% from last month</h2>
    </div>

  );
}
