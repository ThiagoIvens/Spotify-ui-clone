import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import PlayingSoundImage from "../../public/playlists/foofighters.jpg";

export default function PlayingMusic() {
	return (
		<div className="grid grid-cols-3 w-full h-full">
			<div className="col-span-1 flex items-center justify-center">
				<Image src={PlayingSoundImage} width={62} height={62} alt="Foo Figthers" />
			</div>
			<div className="col-span-1 flex flex-col items-start justify-center">
				<h1 className="text-lg text-white">Walk</h1>
				<p className="text-sm text-zinc-500">Foo Figthers</p>
			</div>
			<div className="col-span-1 flex items-center justify-center">
				<AiOutlineHeart className="text-lg" />
			</div>
		</div>
	)
}