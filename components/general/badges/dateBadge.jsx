import { MdOutlineDateRange } from "react-icons/md";

export default function DateBadge({title}) {
  return (
	<p className="flex items-center gap-2 text-sm border rounded-md p-1 capitalize">
	<MdOutlineDateRange/>   
    {title}
	</p>
  )
}
