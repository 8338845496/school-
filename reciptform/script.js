let items = [];

function addItem() {
  const studentName = document.getElementById('studentName').value;
  const feeParticular = document.getElementById('feeParticular').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (studentName && feeParticular && amount) {
    items.push({ studentName, feeParticular, amount });
    displayItems();
  } else {
    alert('Please fill all fields');
  }
}

function displayItems() {
  let itemsHtml = '';
  let total = 0;

  items.forEach(item => {
    itemsHtml += `<div>${item.studentName} - ${item.feeParticular} - $${item.amount}</div>`;
    total += item.amount;
  });

  document.getElementById('items').innerHTML = itemsHtml;
  document.getElementById('total').innerHTML = `Total Amount: $${total.toFixed(2)}`;
}

function generateReceipt() {
  if (items.length === 0) {
    alert('No items added');
    return;
  }

  // Here you can implement the logic to generate and print the receipt
  console.log('Receipt Generated');
}
