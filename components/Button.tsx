import { MdOutlineArrowRightAlt } from "react-icons/md";

const Button = ({ text, styles }: { text: string, styles: string }) => {
  return (
    <button className='flex items-center gap-4 py-1.5 text-sm px-4 bg-[#166636] text-white rounded-full'>
        {text}
        <span className={`${styles} rounded-full p-1`}>
            <MdOutlineArrowRightAlt size={24} />
        </span>
    </button>
  )
}

export default Button