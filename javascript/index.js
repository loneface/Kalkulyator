const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

const toggleButton = document.getElementById("toggle-btn");

function toggleMode() {
  const currentMode = document.body.classList.contains("dark-mode")
    ? "light"
    : "dark";

  document.body.classList.toggle("dark-mode", currentMode === "dark");
  document.body.classList.toggle("light-mode", currentMode === "light");

  localStorage.setItem("theme", currentMode);
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(
      savedTheme === "dark" ? "dark-mode" : "light-mode"
    );
  } else {
    document.body.classList.add("light-mode");
  }
}

loadTheme();

toggleButton.addEventListener("click", toggleMode);
