import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8");

const parseInput = (input) => {
	let inputLines = input.split("\n");

	let res = inputLines.map((line) => {
		let [a, b] = line.split("   ");

		return [a, b];
	});

	let array_a = res.map((a) => a[0]);
	let array_b = res.map((b) => b[1].replace("\r", ""));

	return [array_a, array_b];
};

let parsed = parseInput(input);
console.log(parsed);

let res = 0;

function count(arr, target) {
	return arr.reduce((a, b) => {
		if (b == target) {
			return a + 1;
		} else {
			return a;
		}
	}, 0);
}

for (let i = 0; i < parsed[0].length; i++) {
	let value = parseInt(parsed[0][i]);
	res += count(parsed[1], value) * value;
}

console.log(res);
