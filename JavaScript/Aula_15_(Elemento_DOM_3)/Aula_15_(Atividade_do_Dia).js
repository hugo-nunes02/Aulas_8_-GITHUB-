$(document).ready(function() {
    let items = [];

    $('#itemForm').on('submit', function(e) {
        e.preventDefault();

        const itemName = $('#item').val();
        const quantity = parseInt($('#quantity').val());
        const price = parseFloat($('#price').val());

        const item = {
            name: itemName,
            quantity: quantity,
            price: price
        };

        items.push(item);
        updateItemList();
        updateSummaryList();
        updateTotal();

        $('#itemForm')[0].reset();
    });

    function updateItemList() {
        $('#itemList').empty();
        items.forEach((item, index) => {
            $('#itemList').append(`
                <li class="list-group-item list-item">
                    <span>${item.name} - R$${item.price.toFixed(2)}</span>
                    <span>
                        <button class="btn btn-success btn-sm" onclick="changeQuantity(${index}, 1)">+</button>
                        <button class="btn btn-warning btn-sm" onclick="changeQuantity(${index}, -1)">-</button>
                        <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">X</button>
                    </span>
                </li>
            `);
        });
    }

    function updateSummaryList() {
        $('#summaryList').empty();
        items.forEach(item => {
            $('#summaryList').append(`
                <li class="list-group-item list-item">
                    <span>${item.quantity} ${item.name} - R$${(item.quantity * item.price).toFixed(2)}</span>
                </li>
            `);
        });
    }

    function updateTotal() {
        let total = 0;
        items.forEach(item => {
            total += item.quantity * item.price;
        });
        $('#total').text('Total Geral: R$${total.toFixed(2)}');
    }

    window.changeQuantity = function(index, change) {
        items[index].quantity += change;
        if (items[index].quantity <= 0) {
            removeItem(index);
        } else {
            updateItemList();
            updateSummaryList();
            updateTotal();
        }
    };

    window.removeItem = function(index) {
        items.splice(index, 1);
        updateItemList();
        updateSummaryList();
        updateTotal();
    };
    
});
