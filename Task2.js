// 2️⃣ FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.innerText = "All fields are required!";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    msg.style.color = "red";
    msg.innerText = "Invalid Email!";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Form submitted successfully!";
});

// 4️⃣ TODO LIST
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  let btn = document.createElement("button");
  btn.textContent = "X";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}