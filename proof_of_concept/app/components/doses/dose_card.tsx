export interface DoseProptypes
{
  hormone_name: string;
  dosage:string;
  date:string;
  taken:boolean;
}
export const DoseCard:React.FC<DoseProptypes> = (props)=> 
{
  const was_missed = !props.taken&&props.date == "08/02/2025"
  const taken_dose_styles = "m-4 p-2 rounded-2xl bg-indigo-500 border-2 border-indigo-950"
  const missed_dose_styles = "m-4 p-2 rounded-2xl bg-indigo-500 border-2 border-red-300"
  return (<div className={!was_missed?taken_dose_styles:missed_dose_styles}>
    <div className="flex justify-end">
      <h1 className="text-base mr-auto">{props.hormone_name}</h1>
      <h1 className="text-base">{props.dosage}</h1>
    </div>
    <div className="flex justify-end">
      <h1 className="mr-auto text-base">Due on {props.date}</h1>
      <h1 className="text-base">{props.taken?("Taken"):("Not taken")}</h1>
    </div>
    {was_missed?(<div className="">
      <h1 className="text-sm text-center py-2">You missed a dose but that is ok! Try to keep on top of your doses! you are doing amazing!</h1>
    </div>):(<></>)}
    
  </div>
  )
}
