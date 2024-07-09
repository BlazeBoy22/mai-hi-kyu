const fs = require('fs');
const path = require('path');

// Load your JSON data
const jsonData = require('../result13.json');

// Extract required fields
const { USN, name, Batch, Sem, results } = jsonData;

// Prepare CSV header and rows
let csvContent = "usn,student_name,batch,sem,subcode,ia,ea,total\n";

results.forEach(result => {
    const { subjectCode, ia, ea, total } = result;
    csvContent += `${USN},${name},${Batch},${Sem},${subjectCode},${ia},${ea},${total}\n`;
});

// Write CSV to file
const csvFilePath = path.join(__dirname, '../csvfiles/2021_batch_5thsem.csv');
fs.writeFileSync(csvFilePath, csvContent);

console.log(`CSV file saved: ${csvFilePath}`);
