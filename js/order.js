// Order Page JS

const BASE_PRICE = 148.00;
const SHIPPING = 10.00;

function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
  updateTotal();
}

function updateTotal() {
  const qty = parseInt(document.getElementById('qtyInput').value) || 1;
  const checkboxes = document.querySelectorAll('.addon-label input[type="checkbox"]');
  let addons = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) addons += parseFloat(cb.dataset.price);
  });
  const subtotal = BASE_PRICE * qty;
  const grand = subtotal + addons + SHIPPING;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('addons-total').textContent = `$${addons.toFixed(2)}`;
  document.getElementById('grand-total').textContent = `$${grand.toFixed(2)}`;
}

function placeOrder() {
  const name = document.querySelector('input[placeholder="Enter your full name"]').value;
  const email = document.querySelector('input[placeholder="Enter your email"]').value;
  if (!name || !email) {
    alert('Please fill in your name and email before placing an order.');
    return;
  }
  document.getElementById('successModal').classList.add('active');
}

function closeModal() {
  document.getElementById('successModal').classList.remove('active');
  window.location.href = 'product.html';
}

// Qty input change
document.addEventListener('DOMContentLoaded', () => {
  const qtyInput = document.getElementById('qtyInput');
  if (qtyInput) {
    qtyInput.addEventListener('change', updateTotal);
  }

  // Product select → update subtotal
  const productSelect = document.querySelector('select');
  if (productSelect) {
    productSelect.addEventListener('change', function() {
      const match = this.value.match(/\$(\d+\.\d+)/);
      if (match) {
        window.selectedPrice = parseFloat(match[1]);
        updateTotal();
      }
    });
  }
});
