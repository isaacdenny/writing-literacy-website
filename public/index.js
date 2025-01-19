var currentField = 0;

document.getElementById("story-form").addEventListener("submit", function (e) {
  e.preventDefault();
  nextChat(); // show submitted chat
  setTimeout(() => {
    // show ai chat in a second
    // may want to do a little "thinking..." thing
    nextChat();
  }, 1000);
});

const msgs = Array.from(document.getElementsByClassName("chat-msg"));
console.log(msgs);

/**
 * shows the field at fields[n] with animation
 */
function nextChat() {
  if (currentField >= msgs.length) return;
  msgs[currentField].classList.add("visible");
  currentField++;
}
