let arr = [1, 4, 6, "ahmed", "omar"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        result.push(arr[i]);
    }
}

document.getElementById("result").textContent = `"${result.join('", "')}"`;
