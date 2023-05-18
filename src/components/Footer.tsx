import PlayingMusic from "./PlayingMusic";
import ControlBtnsActiveMusic from "./ControlBtnsActiveMusic";
import ControlsRightFooter from "./ControlsRightFooter";


export default function Footer() {
	return (
		<div className="bg-zinc-900 fixed bottom-0 w-full min-h-[100px] p-2">
			<div className="w-full h-full flex">
				<div className="w-80">
					<PlayingMusic />
				</div>
				<div className="flex-1">
					<div className="grid grid-cols-7">
						<div className="col-span-5">
							<ControlBtnsActiveMusic />
						</div>
						<div className="col-span-2 h-full">
							<ControlsRightFooter />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}