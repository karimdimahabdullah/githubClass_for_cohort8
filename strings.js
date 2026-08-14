const herName = "EsTheR";

console.log(herName.toLowerCase()); // Output: "esther"
console.log(herName.toUpperCase()); // Output: "ESTHER"


function lowerMe (value) {
    return value.toLowerCase();
}

console.log(lowerMe(herName)); // Output: "esther"


const trimExample = "   Hello, World!   ";
console.log(trimExample.trim()); // Output: "Hello, World!"
console.log(trimExample.trimStart()); // Output: "Hello, World!   "
console.log(trimExample.trimEnd()); // Output: "   Hello, World!"

let filename = "report_final_2024.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.startsWith("draft"));  // false
console.log(filename.endsWith(".pdf"));     // true
console.log(filename.endsWith(".docx"));    // false

const extractExample = "Esther";
console.log(extractExample.slice(0, 3)); // Output: "Est"
console.log(extractExample.slice(3)); // Output: "her"
console.log(extractExample.slice(-3)); // Output: "her"
console.log(extractExample.substring(0, 3)); // Output: "Est"
console.log(extractExample.substring(3)); // Output: "her"
console.log(extractExample.substring(-3)); // Output: "Esther" (negative index treated as 0)




