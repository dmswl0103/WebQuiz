document.getElementById('inu-button').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://localhost:3000/web')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('webData', JSON.stringify(data));
            displayData(data);
        })
        .catch(error => console.error('Error', error));
}

function displayData(data) {
    const outDiv = document.getElementById('output');
    outDiv.innerHTML = '';
    data.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `Class: ${item.class}`; 
        outDiv.appendChild(p);
    });
}