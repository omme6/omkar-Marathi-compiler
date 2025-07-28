function runCode() {
  const code = document.getElementById('code').value;
  const output = document.getElementById('output');

  try {
    if (code.includes("दाखवा")) {
      const line = code.split("दाखवा")[1].trim();
      output.textContent = line.replace(/['"]+/g, '');
    } else {
      output.textContent = "ओळखीचा सिंटॅक्स नाही";
    }
  } catch (err) {
    output.textContent = "त्रुटी: " + err.message;
  }
}
