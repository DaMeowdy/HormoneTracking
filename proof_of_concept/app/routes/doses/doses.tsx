import { DoseCard, type DoseProptypes } from "~/components/doses/dose_card";

export default function Doses() {
  const doses:DoseProptypes[] = [
    {
      hormone_name: "Estradiol Valerate (in oil)",
      dosage: "0.02ml",
      date: "01/02/2025",
      taken: true,
    },
    {
      hormone_name: "Estradiol Valerate (in oil)",
      dosage: "0.02ml",
      date: "08/02/2025",
      taken: false,
    },
    {
      hormone_name: "Estradiol Valerate (in oil)",
      dosage: "0.02ml",
      date: "15/02/2025",
      taken: true,
    },
    {
      hormone_name: "Estradiol Valerate (in oil)",
      dosage: "0.02ml",
      date: "22/02/2025",
      taken: true,
    }
  ]
  return(<div className="">
    {doses.map((item)=> (<DoseCard hormone_name={item.hormone_name} dosage={item.dosage} date={item.date} taken={item.taken}/>))}
  </div>)
}
