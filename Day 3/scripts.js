function changeGradient() {
    let c1 = document.getElementById("color1").value;
    let c2 = document.getElementById("color2").value;

    document.body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;

    document.getElementById("cssCode").textContent = `background: linear-gradient(to right, ${c1}, ${c2});`;
}

document.getElementById("color1").addEventListener("input", changeGradient);
document.getElementById("color2").addEventListener("input", changeGradient);

window.onload = changeGradient;
