import { Links, type Link } from "~/data/links"

export const Navbar:React.FC = () => {
  return (
    <div className="w-full bg-blue-400 flex justify-center">
      <ul className="flex w-full justify-center h-full">
        {Links.map((item)=> {return (
          <li className="border-l-4 py-4 px-2 h-full border-x-blue-800 last:border-r-4"><img className="invert h-fit" src={item.image} alt={item.name} /></li>
        )})}
      </ul>
    </div>
  )
}
