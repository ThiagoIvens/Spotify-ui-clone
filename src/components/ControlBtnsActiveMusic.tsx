import { AiFillPauseCircle } from "react-icons/ai";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { FaRandom } from "react-icons/fa";
import { RiRepeat2Fill } from "react-icons/ri";

export default function ControlBtnsActiveMusic() {
	return (
		<>
			<div className="flex gap-4 items-center justify-center">
				<FaRandom className="text-2xl" />
				<CgPushChevronLeft className="text-2xl" />
				<AiFillPauseCircle className="text-5xl text-white" />
				<CgPushChevronRight className="text-2xl" />
				<RiRepeat2Fill className="text-2xl" />
			</div>
			<div className="flex flex-row items-center justify-center p-2">
				<p className="text-sm text-zinc-500 m-0">0:01</p>
				<input id="small-range" type="range" value="0" className="w-full mx-2 h-1 bg-zinc-600 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700 accent-zinc-200" />
				<p className="text-sm text-zinc-500 m-0">4:15</p>
			</div>
		</>
	)
}