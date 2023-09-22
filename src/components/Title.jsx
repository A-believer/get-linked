
export default function Title({text1, text2}) {
  return (
    <div className="flex flex-col font-clash font-bold lg:text-4xl text-xl whitespace-nowrap">
        <h3 className="text-[#FFF]">{text1}</h3>
        <h3 className="text-purII">{text2}</h3>
    </div>
  )
}
