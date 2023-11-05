/* eslint-disable react/prop-types */

import { HiOutlineTrash } from "react-icons/hi2";


export function HistoryItem({name, type}){
  return (
    <div className="flex items-center justify-between w-full text-white py-2 rounded-md">
      <div>
      <p className="hover:underline cursor-pointer" >{name}</p>
      <p className="text-xs">Type: {type}</p>
      </div>
      <div className="p-1.5 bg-red-700 rounded-sm hover:bg-red-600 transition cursor-pointer">
        <HiOutlineTrash />
      </div>
    </div>
  )
}