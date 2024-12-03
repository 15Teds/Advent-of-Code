import fs from "node:fs";

const input = fs.readFileSync("input.txt", "utf8");

const parseInput = (input) => {
	return input
		.split("\n")
		.map((i) => i.split(" ").map((i) => parseInt(i.replace("\r", ""))));
};

const parsed = parseInput(input);

let res = 0;

for (let i = 0; i < parsed.length; i++) {
	let safe = true;
	let increasing = parsed[i][0] < parsed[i][1];

	for (let j = 1; j < parsed[i].length; j++) {
		if (increasing !== parsed[i][j - 1] < parsed[i][j]) {
			safe = false;
		}

		if (
			Math.abs(parsed[i][j - 1] - parsed[i][j]) > 3 ||
			Math.abs(parsed[i][j - 1] - parsed[i][j]) < 1
		) {
			safe = false;
		}
	}

	if (safe) res++;
}

console.log(res);
