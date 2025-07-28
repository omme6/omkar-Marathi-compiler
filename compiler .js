function marathiToJS(marathiCode) {
  let jsCode = marathiCode;

  // मराठी syntax चे JS मध्ये रूपांतर
  jsCode = jsCode.replace(/जर\s*\((.*?)\)\s*तर/g, 'if ($1) {');
  jsCode = jsCode.replace(/नाहीतर/g, '} else {');
  jsCode = jsCode.replace(/दाखव\s*\((.*?)\)/g, 'console.log($1)');
  jsCode = jsCode.replace(/संपले/g, '}');

  return jsCode;
}

function runMarathiCode() {
  const input = document.getElementById('codeInput').value;
  const output = document.getElementById('output');

  try {
    const translatedCode = marathiToJS(input);
    const result = eval(translatedCode);
    output.innerText = result ?? "✅ कोड चालला!";
  } catch (e) {
    output.innerText = "❌ त्रुटी: " + e.message;
  }
}
