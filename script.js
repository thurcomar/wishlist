document.getElementById('addButton').addEventListener('click', addItem);

function addItem() {
    const input = document.getElementById('itemInput');
    const itemName = input.value.trim();
    
    if (itemName === '') return;

    const li = document.createElement('li');
    li.className = 'wishlist-item';
    li.innerHTML = `
        <span>${itemName}</span>
        <div>
            <button class="complete-button" onclick="completeItem(this)">Concluir</button>
            <button class="remove-button" onclick="removeItem(this)">Remover</button>
        </div>
    `;

    document.getElementById('wishlistItems').appendChild(li);
    setTimeout(() => li.classList.add('visible'), 10);
    input.value = '';
}

function completeItem(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

function removeItem(button) {
    const li = button.parentElement.parentElement;
    li.classList.add('removing');
    setTimeout(() => {
        li.remove();
    }, 400);
}
