console.log("Hello world!")

interface DinosaurData {
	dinosaur: string;
	legs: number;
}

// const data: Array<DinosaurData> = [
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


interface Safe<T> {
	code: number;
	data: T;
}

let safeNumber: Safe<number> = { data: 42, code: 123 }
let safeString: Safe<string> = { data: 'hello', code: 321 }
