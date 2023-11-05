/* eslint-disable react/prop-types */

import { BiChevronDown } from "react-icons/bi";
import {  useState } from 'react'
import { Transition } from '@headlessui/react'



export function Dropdown({dropDownItems, onChange}){ 
  
  const [currentSelected, setCurrentSelected] = useState(null);
  const [showDropdownList, setShowDropdownList] = useState(false);


  const toggleDropdownList = () => {
    if(showDropdownList == false){
      setShowDropdownList(true)
    }else{
      setShowDropdownList(false)
    }
  }


  return(
    <div className="relative min-w-[150px] ">
      <div 
        className="p-3 rounded-md inline-flex items-center bg-white cursor-pointer select-none w-full justify-between" 
        onClick={() => toggleDropdownList()}
      >
        
        {currentSelected ? 
          (
            <>
              {currentSelected} 
            </>
          )
          : (
            <>{dropDownItems[0].name}</>
          )}
          <BiChevronDown className="w-6 h-6" />
      </div>
          <Transition
            className="absolute w-full shadow-md rounded-md overflow-hidden pt-2 bg-white flex flex-col"
            as="ul"
            show={showDropdownList}
            enter="transition-all duration-500"
            enterFrom="opacity-0 -translate-y-6"
            enterTo="opacity-100 translate-y-2"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100 translate-y-2"
            leaveTo="opacity-0 translate-y-2"
          >
              {dropDownItems.map((item) => (
                <li key={item.id} className="p-2 block bg-white cursor-pointer hover:bg-blue-100" data-value={item.value} onClick={() => {setCurrentSelected(item.name); setShowDropdownList(false); onChange(item.value) }}>{item.name}</li>
              ))}
           </Transition>
    </div>
  )
}