document.addEventListener('DOMContentLoaded', function() {
    const requests = [
        { date: '2024-09-15 10:00', name: 'Pedro Roiter', description: 'Impressora HP LaserJet', status: 'ABERTA' },
        { date: '2024-09-14 09:30', name: 'Leila Xen', description: 'Notebook Dell Inspiron', status: 'ABERTA' },
        { date: '2024-09-13 08:45', name: 'Maria das Dores', description: 'Monitor Samsung', status: 'REJEITADA' },
        { date: '2024-09-12 11:15', name: "Joana D'Arc", description: 'Teclado Logitech', status: 'ARRUMADA' },
        { date: '2024-09-11 14:00', name: 'Fulano de Tal', description: 'Mouse Microsoft', status: 'ABERTA' },
        { date: '2024-09-15 10:00', name: 'Mariana Liu', description: 'Impressora HP LaserJet', status: 'ABERTA' },
        { date: '2024-09-15 10:00', name: 'Gilgamesh', description: 'Impressora HP LaserJet', status: 'ABERTA' }
    ];

    const tableBody = document.querySelector('#requestsTable tbody');

    requests.forEach(request => {
        if (request.status === 'ABERTA'){
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = request.date;
        row.appendChild(dateCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = request.name;
        row.appendChild(nameCell);
        
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = request.description.substring(0, 30);
        row.appendChild(descriptionCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = request.status;
        row.appendChild(statusCell);

        const actionCell = document.createElement('td');
            const approveButton = document.createElement('button');
            approveButton.textContent = 'Efetuar Orçamento';
            approveButton.classList.add('aprovar');
            approveButton.addEventListener('click', function() {
                // Redireciona para a RF012
                window.location.href = '../RF012/rf012.html';
            });
            actionCell.appendChild(approveButton);

        row.appendChild(actionCell);
        tableBody.appendChild(row);
        }
    });
});
