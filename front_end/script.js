document.addEventListener('DOMContentLoaded', function() {
    console.log('hello world')
    fetch('./result.json')
        .then(response => response.json())
        .then(data => {
            console.log('data is here',data)
            const resultsTable = document.getElementById('results-table');

            data.forEach(student => {
                let tableHtml = `<h2>${student.name} - ${student.USN}</h2>`;
                tableHtml += `<table><tr><th>Subject Code</th><th>Subject Name</th><th>IA</th><th>EA</th><th>Total</th><th>Result</th></tr>`;

                student.results.forEach(result => {
                    tableHtml += `<tr><td>${result.subjectCode}</td><td>${result.subjectName}</td><td>${result.ia}</td><td>${result.ea}</td><td>${result.total}</td><td>${result.result}</td></tr>`;
                });

                tableHtml += '</table>';
                resultsTable.innerHTML += tableHtml;
            });
        })
        .catch(error => console.error('Error fetching results:', error));
});
