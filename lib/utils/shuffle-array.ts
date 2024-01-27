/* Randomize array in-place using Durstenfeld shuffle algorithm */
export const shuffleArray = (array: any) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
	}
	return newArray;
};
