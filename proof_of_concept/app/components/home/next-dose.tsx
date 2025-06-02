export const NextDose:React.FC = ( /* this will have props from global state */) => {
  return (
    <div className="m-4 p-2 rounded-2xl bg-indigo-500 border-2 border-indigo-950"> 
      <h1 className="font-bold text-center">Your next dose is due in 2 days</h1> {/* icon next to this text whether that is a needle or a pill or gel */}
      <h2 className="px-2">Your dose is 0.02ml Estradiol Valerate into Subcut fat</h2>
      {/* grayed out dose taken button */}
    </div>
  );
}
