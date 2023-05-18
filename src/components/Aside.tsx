import { RiHome5Fill } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { BiLibrary } from "react-icons/bi"
import { IoAdd } from "react-icons/io5"
import { FiArrowRight } from "react-icons/fi"
import { VscChevronDown } from "react-icons/vsc"
import PlaylistCard from "./PlaylistCard"

export default function Aside() {
	return (
		<div className="w-80 flex flex-col gap-2 py-2">
			<div className="bg-zinc-800 rounded-lg w-full p-4 flex flex-col gap-4" >
				<div className="flex gap-3 items-center justify-start">
					<RiHome5Fill className="text-2xl text-white" />
					<h1 className=" text-white">Início</h1>
				</div>
				<div className="flex gap-3 items-center justify-start">
					<FiSearch className="text-2xl" />
					<h1>Buscar</h1>
				</div>
			</div>
			<div className="bg-zinc-800 rounded-lg w-full p-4" >
				<div className="flex items-center justify-between">
					<div className="flex gap-3 items-center justify-start">
						<BiLibrary className="text-2xl" />
						<h1>Sua Biblioteca</h1>
					</div>
					<div className="flex gap-3 items-center justify-start">
						<IoAdd className="text-2xl" />
						<FiArrowRight className="text-2xl" />
					</div>
				</div>
				<div className="my-4">
					<p className="px-4 py-2 bg-zinc-700 text-zinc-200 text-xs rounded-full w-fit">Playlists</p>
				</div>
				<div className="flex items-center justify-between">
					<FiSearch />
					<div className="flex gap-2 items-center">
						<p className="text-sm">Recentes</p>
						<VscChevronDown />
					</div>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<PlaylistCard aside={true}/>
				</div>
			</div>
		</div>
	)
}