import fs from "fs";

const input = fs.readFileSync("input_demo.txt", "utf8");

const parseInput = (input) => {
	let inputLines = input.split("\n");

	let res = inputLines.map((line) => {
		let [a, b] = line.split("   ");

		return [a, b];
	});

	let array_a = res.map((a) => a[0]).sort((a, b) => a - b);
	let array_b = res.map((b) => b[1].replace("\r", "")).sort((a, b) => a - b);

	return [array_a, array_b];
};

let parsed = parseInput(input);

let res = 0;

for (let i = 0; i < parsed[0].length; i++) {
	res +=
		parsed[0][i] > parsed[1][i]
			? parseInt(parsed[0][i]) - parseInt(parsed[1][i])
			: parseInt(parsed[1][i]) - parseInt(parsed[0][i]);
}

console.log(res);
