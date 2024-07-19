document.getElementById('dataForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = {
        lastName: document.getElementById('lastName').value,
        firstName: document.getElementById('firstName').value,
        middleName: document.getElementById('middleName').value,
        birthdate: document.getElementById('birthdate').value,
        age: document.getElementById('age').value,
        street: document.getElementById('street').value,
        barangay: document.getElementById('barangay').value,
        municipality: document.getElementById('municipality').value,
        dateEntered: new Date().toISOString()
    };

    await fetch('https://your-vercel-app-url/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    alert('Data submitted successfully!');
});

document.getElementById('searchButton').addEventListener('click', async function () {
    const query = prompt('Enter last name, first name, middle name, or barangay:');
    const response = await fetch(`https://your-vercel-app-url/api/search?query=${query}`);
    const results = await response.json();
    const searchResultsDiv = document.getElementById('searchResults');

    searchResultsDiv.innerHTML = results.map(result => `
        <div>
            <p>${result.firstName} ${result.middleName} ${result.lastName} - ${result.barangay}</p>
            <button onclick="editData('${result.id}')">Edit</button>
        </div>
    `).join('');
});

async function editData(id) {
    const response = await fetch(`https://your-vercel-app-url/api/data/${id}`);
    const data = await response.json();
    // Populate form with data and handle the update logic
}
