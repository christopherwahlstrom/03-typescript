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

printDinos(data)

function printDinos(dinos: DinosaurData[]): void {
	dinos.forEach(dino => {
		console.log(dino.dinosaur)
	})
}