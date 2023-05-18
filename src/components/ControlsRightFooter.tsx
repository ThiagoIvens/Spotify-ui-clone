import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { BsPcDisplay } from "react-icons/bs";
import { BiVolumeLow } from "react-icons/bi";
import { AiOutlineExpandAlt } from "react-icons/ai";
import RangeSlider from "./RangeSlider";

export default function ControlsRightFooter() {
	return (
		<div className="flex gap-2 h-full w-full items-center justify-evenly">
			<TbMicrophone2 className="text-lg"/>
			<HiOutlineQueueList  className="text-lg"/>
			<BsPcDisplay className="text-lg"/>
			<BiVolumeLow className="text-lg"/>
			<RangeSlider />
			<AiOutlineExpandAlt className="text-lg"/>
		</div>
	)
}