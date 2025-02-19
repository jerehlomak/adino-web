import { MdOutlineArrowRightAlt } from "react-icons/md";

const Button = ({ text, styles }: { text: string, styles: string }) => {
  return (
    <button className='flex items-center gap-4 py-1.5 text-sm px-4 bg-[#166636] text-white rounded-full hover:bg-[#B8860B] transition-all duration-1000'>
        {text}
        <span className={`${styles} rounded-full p-1`}>
            <MdOutlineArrowRightAlt size={24} className="group-hover:text-[#B8860B] transition-colors duration-1000" />
        </span>
    </button>
  )
}

export default Button