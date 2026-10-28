const textInput = document.getElementById("text");
const qrCodeDiv = document.getElementById("qr-code");

function generateQRCode() {
    const text = textInput.value.trim();
    qrCodeDiv.replaceChildren();

    if (!text) {
        qrCodeDiv.textContent = "Enter text or a URL to generate a QR code.";
        textInput.focus();
        return;
    }

    if (typeof QRCode === "undefined") {
        qrCodeDiv.textContent = "QR code generation is unavailable. Check your internet connection and reload the page.";
        return;
    }

    try {
        new QRCode(qrCodeDiv, {
            text,
            width: 200,
            height: 200,
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (error) {
        qrCodeDiv.textContent = "Could not generate a QR code for this input.";
        console.error("QR code generation failed:", error);
    }
}

document.getElementById("generate").addEventListener("click", generateQRCode);
textInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        generateQRCode();
    }
});
