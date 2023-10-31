/* eslint-disable react/prop-types */

export function WordLoader({ width }){
  return (
    <p className="bg-gray-200 py-4 px-4 capitalize rounded-md cursor-wait">
      <span className={`animate-pulse h-2 rounded-md block bg-slate-500 ${width}`}></span>
    </p>
  )
}