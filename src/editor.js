
function initializeCodeEditor() {
  // Initialize Ace Editor
  const editor = ace.edit('editor');
  editor.setTheme('ace/theme/monokai');
  editor.session.setMode('ace/mode/javascript');
  // Array of supported languages
  const supportedLanguages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "golang", label: "Go" },
    { value: "ruby", label: "Ruby" },
    { value: "c_cpp", label: "C/C++" },
    { value: "csharp", label: "C#" },
    { value: "php", label: "PHP" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "typescript", label: "TypeScript" },
    { value: "swift", label: "Swift" },
    { value: "markdown", label: "Markdown" },
    { value: "json", label: "JSON" },
    { value: "xml", label: "XML" },
    { value: "sql", label: "SQL" },
    { value: "yaml", label: "YAML" },
    { value: "kotlin", label: "Kotlin" },
    { value: "dart", label: "Dart" },
  ];

  // Array of supported themes
  const supportedThemes = [
    { value: 'monokai', label: 'Monokai' },
    { value: 'github', label: 'GitHub' },
    { value: 'dracula', label: 'Dracula' },
  ];

  // Function to populate dropdowns
  function populateDropdown(elementId, options) {
    const dropdown = document.getElementById(elementId);
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      dropdown.appendChild(optionElement);
    });
  }

  // Populate language dropdown
  populateDropdown('language-dropdown', supportedLanguages);

  // Populate theme dropdown
  populateDropdown('theme-dropdown', supportedThemes);

  // Handle language selection
  document.getElementById('language-dropdown').addEventListener('change', function(event) {
    const selectedLanguage = event.target.value;
    // Handle language change
    // You can use ipcRenderer.send() to communicate with the main process if needed
  });

  // Handle theme selection
  document.getElementById('theme-dropdown').addEventListener('change', function(event) {
    const selectedTheme = event.target.value;
    // Handle theme change
  });
}

// Call the initializeCodeEditor function when DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeCodeEditor);

module.exports = {
  initializeCodeEditor,
  populateDropdown
};
