import { VscChevronLeft } from "react-icons/vsc"
import { VscChevronRight } from "react-icons/vsc"
import { IoIosPeople } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { BsArrowDownCircle, BsPlayFill } from "react-icons/bs"


import Image from "next/image"
import WastingLight from "../../public/playlists/foofighters.jpg"
import { AiOutlineHeart } from "react-icons/ai"
import { FiMoreHorizontal } from "react-icons/fi"

interface IMusicProps {
	id: number;
	name: string;
	actor: string;
	reprodutions: string;
	duration: string;
}

export default function Main() {

	const musics = [
		{ id: 1, name: "Bridge Burning", actor: "Foo Fighters", reprodutions: "48.816.369", duration: "4:46" },
		{ id: 2, name: "Rope", actor: "Foo Fighters", reprodutions: "72.670.653", duration: "4:19" },
		{ id: 3, name: "Dear Rosemary", actor: "Foo Fighters", reprodutions: "35.520.192", duration: "4:26" },
		{ id: 4, name: "White Limo", actor: "Foo Fighters", reprodutions: "24.429.565", duration: "3:22" },
	]

	return (
		<div className="flex flex-col flex-1 items-start bg-gradient-to-b from-pink-700 to-zinc-800 rounded-lg my-2">
			<div className="flex items-center justify-between w-full px-4 py-2">
				<div className="flex gap-2">
					<VscChevronLeft className="bg-zinc-900/60 text-white rounded-full p-1 text-2xl" />
					<VscChevronRight className="bg-zinc-900/60 rounded-full p-1 text-2xl" />
				</div>
				<div className="flex gap-2">
					<IoIosPeople className="bg-zinc-900/60 text-white rounded-full p-1 text-3xl" />
					<FaUserCircle className="bg-zinc-900/60 rounded-full p-1 text-3xl" />
				</div>
			</div>
			<div className="w-full flex gap-2 px-4 pb-3 pt-1 ">
				<Image src={WastingLight} width={200} height={200} alt="Wasting Light - Foo Fighters" className=" shadow-2xl" />
				<div className="flex flex-col gap-2 items-start justify-end">
					<strong className="text-xs text-white">Albúm</strong>
					<strong className="text-8xl text-white">Wasting Light</strong>
					<div className="flex gap-2 mt-2">
						<div className="w-6 h-6 bg-gradient-radial from-gray-400 to-white rounded-full"></div>
						<h1 className="text-white text-sm">
							Foo Fighters ● 2011 ● 11 músicas,
							<span className="text-zinc-300"> 47min 52 s</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="w-full bg-gradient-to-b from-black/30 to-black p-4 ">
				<div className="flex items-center justify-start gap-4 mb-3">
					<BsPlayFill className="text-5xl bg-green-500 p-2 rounded-full text-black text-center" />
					<AiOutlineHeart className="text-2xl"/>
					<BsArrowDownCircle className="text-2xl"/>
					<FiMoreHorizontal className="text-2xl"/>

				</div>
				<table className="w-full bg-transparent">
					<thead>
						<tr className="border-b border-gray-500">
							<th className="text-center">
								#
							</th>
							<th className="text-start">
								Title
							</th>
							<th className="text-start">
								Reproduções
							</th>
							<th className="text-start">
								<BiTime />
							</th>
						</tr>
					</thead>
					<tbody>
						{musics.map((music: IMusicProps, index: number) => (
							<tr key={"music"+music.id}>
								<td className="text-center text-sm">
								{music.id}
								</td>
								<td className="flex flex-col gap-1 mt-2">
									<h1 className="text-white text-sm [0 2px 4px var(#FFF)]">{music.name}</h1>
									<h1>{music.actor}</h1>
								</td>
								<td>
									<strong className="text-sm">{music.reprodutions}</strong>
								</td>
								<td>
									<strong className="text-sm">{music.duration}</strong>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}