export const CircleAndCount = ({bgColor,count}) => {
  return (
    <div style={{background:bgColor}} className="cursor-default ml-auto px-3 py-1  text-white  flex items-center justify-center font-semibold text-sm  rounded-xl">{count}</div>
  )
}