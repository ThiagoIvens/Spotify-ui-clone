import Image from "next/image";
import DeepHouse from "../../public/playlists/deephouse.jpeg"
import FarOut from "../../public/playlists/farOutPinkFloyd.jpeg"
import FooFighters from "../../public/playlists/foofighters.jpg"
import LivingThings from "../../public/playlists/LivingThings.jpeg"
import Nirvana from "../../public/playlists/nirvana.jpeg"
import PinkFloyd from "../../public/playlists/pinkFloyd.jpeg"

interface PlaylistCardProps {
	aside: boolean;
}

export default function PlaylistCard(props: PlaylistCardProps) {
	const images = [
		{ path: FarOut, name: 'Far Out', actor: "Pink Floyd" },
		{ path: DeepHouse, name: 'Deep House', actor: "Magic Records" },
		{ path: FooFighters, name: 'Wasting Light', actor: "Foo Fighters" },
		{ path: LivingThings, name: 'Living Things', actor: "Linkin Park" },
		{ path: PinkFloyd, name: 'The Dark Side of the Moon', actor: "Pink Floyd" },
		{ path: Nirvana, name: 'Nirvana', actor: "Random Rock" },
	];

	return (
		<>
			{images.map((image, index) => (
				<div className="flex gap-2" key={index}>
					<Image width={props.aside ? 50 : 100} height={props.aside ? 50 : 100} src={image.path} alt={image.name} className="rounded-md" />
					<div className="flex flex-col gap-1 items-start justify-evenly">
						<h1 className="text-md text-zinc-200">
							{image.name}
						</h1>
						<strong className="text-zinc-500 text-sm">
							Playlist - {image.actor}
						</strong>
					</div>
				</div>
			))}
		</>
	);
}