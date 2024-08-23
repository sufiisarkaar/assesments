// Function to show the corresponding selection div and hide others
function updateSelection() {
  const allSelections = document.querySelectorAll(".selection");
  const selectedOption = document.querySelector('input[name="bundle"]:checked');

  allSelections.forEach((selection) => {
    selection.style.display = "none"; // Hide all selection divs
  });

  if (selectedOption) {
    const selectionDiv = selectedOption
      .closest(".option")
      .querySelector(".selection");
    selectionDiv.style.display = "block"; // Show the selected option's selection div
  }

  updateTotalPrice(); // Update the total price
}

// Function to update total price based on selected bundle
function updateTotalPrice() {
  const selectedBundle = document.querySelector('input[name="bundle"]:checked');
  const totalPriceElement = document.getElementById("total-price");
  if (selectedBundle) {
    totalPriceElement.textContent = selectedBundle.value + ".00";
  }
}

// Event listeners for radio buttons to update selection and total price
document.querySelectorAll('input[name="bundle"]').forEach((radio) => {
  radio.addEventListener("change", updateSelection);
});

// Initialize selection and total price on page load
window.addEventListener("DOMContentLoaded", updateSelection);
