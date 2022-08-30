console.log("Hello world!")

interface DinosaurData {
	dinosaur: string;
	legs: number;
}

const data: DinosaurData[] = [
	{
		dinosaur: 'Triceratops',
		legs: 4
	},
	{
		dinosaur: 'Tyrannosaurus',
		legs: 2
	}
]

data.forEach(dino => {
	console.log(dino.dinosaur)
})