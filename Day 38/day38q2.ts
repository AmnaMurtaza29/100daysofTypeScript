//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkAndLogCapital(countryMap: Map<string, string>): void {
    if (countryMap.has("Canada")) {
        const canadaCapital: string | undefined = countryMap.get("Canada");
        if (canadaCapital !== undefined) {
            console.log(`The capital of Canada is ${canadaCapital}`);
        } else {
            console.log("Canada is in the map, but its capital is not defined.");
        }
    } else {
        console.log("The map does not contain a key for Canada.");
    }
}
// Test the function with a sample Map
const sampleMap: Map<string, string> = new Map();
sampleMap.set("USA", "Washington D.C.");
sampleMap.set("Canada", "Ottawa");
sampleMap.set("France", "Paris");
checkAndLogCapital(sampleMap);
