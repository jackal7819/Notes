export const createTableHeader = (table, headers) => {
    const thead = table.createTHead();
    const row = thead.insertRow();
    for (const header of headers) {
        const th = document.createElement('th');
        const text = document.createTextNode(header);
        th.appendChild(text);
        row.appendChild(th);
    }
};

export const createTableRow = (table, rowData) => {
    const row = table.insertRow();
    rowData.forEach((data) => {
        const cell = row.insertCell();
        if (typeof data === 'string' && data.startsWith('<button')) {
            cell.innerHTML = data;
        } else {
            cell.textContent = data;
        }
    });
};
