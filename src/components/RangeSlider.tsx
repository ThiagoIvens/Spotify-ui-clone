export default function RangeSlider() {
	const options = [];

	for (let i = 0; i < 100; i++) {
		options.push(<option value={i} key={i}></option>);
	}

	return (
		<>
			<input type="range" list="tickmarks" value="50" min="0" max="100" className="w-full max-w-[100px] h-1 bg-zinc-600 rounded-lg cursor-pointer dark:bg-gray-700 accent-zinc-200 range-slider" />
			<datalist className="bg-transparent" id="tickmarks">
				{options}
			</datalist>
		</>
	)
}