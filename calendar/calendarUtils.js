export function renderTableRow(plant) {
    const p = document.createElement('p');
    p.textContent = `${plant.name} - ${plant.size}`;

    p.addEventListener('click', () => {
        p.style.textDecoration = 'line-through';
        
    });
    return p;
}