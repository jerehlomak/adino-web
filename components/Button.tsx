import { MdOutlineArrowRightAlt } from "react-icons/md";

const Button = ({ text, styles }: { text: string, styles: string }) => {
  return (
    <button className='group font-lato flex items-center gap-2 py-2 text-sm px-4 bg-[#166636] text-white rounded-full hover:bg-[#ad9056] transition-colors duration-300'>
  {text}
  <span className={`${styles} rounded-full p-1 group-hover:text-[#ad9056] transition-colors duration-300`}>
    <MdOutlineArrowRightAlt size={20} /> 
  </span>
</button>

  )
}

export default Button