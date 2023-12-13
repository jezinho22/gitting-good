export function impOne(moi) {
	const h1 = document.querySelector("h1");
	const para = document.createElement("p");
	para.textContent = "Help me, " + moi + "! You're my only hope";
	h1.appendChild(para)
}

