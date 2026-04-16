const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

function showError(form, message) {
	let errEl = form.querySelector(".form-error");
	if (!errEl) {
		errEl = document.createElement("p");
		errEl.className = "form-error";
		errEl.style.color = "red";
		errEl.style.fontSize = "12px";
		errEl.style.marginTop = "5px";
		form.appendChild(errEl);
	}
	errEl.textContent = message;
}

function clearError(form) {
	const errEl = form.querySelector(".form-error");
	if (errEl) errEl.textContent = "";
}

function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
	return password.length >= 6;
}

fistForm.addEventListener("submit", (e) => {
	e.preventDefault();
	clearError(fistForm);
	const inputs = fistForm.querySelectorAll(".input");
	const user = inputs[0] ? inputs[0].value.trim() : "";
	const email = inputs[1] ? inputs[1].value.trim() : "";
	const password = inputs[2] ? inputs[2].value.trim() : "";

	if (!user) {
		showError(fistForm, "Please enter a username.");
		return;
	}
	if (!email || !validateEmail(email)) {
		showError(fistForm, "Please enter a valid email address.");
		return;
	}
	if (!password || !validatePassword(password)) {
		showError(fistForm, "Password must be at least 6 characters.");
		return;
	}
	alert("Sign up successful!");
});

secondForm.addEventListener("submit", (e) => {
	e.preventDefault();
	clearError(secondForm);
	const inputs = secondForm.querySelectorAll(".input");
	const email = inputs[0] ? inputs[0].value.trim() : "";
	const password = inputs[1] ? inputs[1].value.trim() : "";

	if (!email || !validateEmail(email)) {
		showError(secondForm, "Please enter a valid email address.");
		return;
	}
	if (!password || !validatePassword(password)) {
		showError(secondForm, "Password must be at least 6 characters.");
		return;
	}
	alert("Sign in successful!");
});
