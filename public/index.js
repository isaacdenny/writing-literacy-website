var currentField = 0;

document.getElementById("story-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");
});

const fields = Array.from(document.getElementsByClassName("form-field"));
console.log(fields);

fields.map((inp) => {
  const width = inp.attributes["width"];
  if (!width) return;
  inp.style.width = width.value;
});

/**
 * shows the field at fields[n] with animation
 */
function showField(n) {
  if (n < 0 || n > fields.length) return;
  fields[n].className = "form-field visible";
}
/**
 * hides the field at fields[n] with animation
 */
function hideField(n) {
  if (n < 0 || n > fields.length) return;
  fields[n].className = "form-field";
}

document.getElementById("next-btn")?.addEventListener("click", function (e) {
  e.preventDefault();
  currentField++;
  showField(currentField);
});

showField(currentField);
