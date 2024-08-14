document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const clearIcon = document.getElementById("clear-icon");

  searchInput.addEventListener("input", function () {
    if (searchInput.value.length > 0) {
      clearIcon.style.display = "block";
    } else {
      clearIcon.style.display = "none";
    }
  });

  clearIcon.addEventListener("click", function () {
    searchInput.value = "";
    clearIcon.style.display = "none";
    searchInput.focus();
  });
});
