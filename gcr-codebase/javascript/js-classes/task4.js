// q4.js
"use strict";

class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields;
    this.container = document.getElementById(containerId);
    this.render();
  }

  // Builds the form HTML from the fields array and injects it with innerHTML
  render() {
    let html = '<form id="dynamicForm">';
    this.fields.forEach((field, index) => {
      const name = `field_${index}`;
      html += `<label for="${name}">${field.label}</label>`;
      if (field.type === "select") {
        html += `<select id="${name}" name="${field.label}">` +
          field.options.map(o => `<option value="${o}">${o}</option>`).join("") +
          `</select>`;
      } else if (field.type === "textarea") {
        html += `<textarea id="${name}" name="${field.label}"></textarea>`;
      } else {
        html += `<input type="${field.type}" id="${name}" name="${field.label}">`;
      }
    });
    html += '<button type="submit">Submit</button></form>';
    this.container.innerHTML = html;

    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this.getFormData();
      console.log("Form data:", data);
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    });
  }

  // Returns all entered values as { label: value }
  getFormData() {
    const data = {};
    const elements = document.getElementById("dynamicForm").elements;
    for (const el of elements) {
      if (el.name) data[el.name] = el.value;
    }
    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "select", label: "Country", options: ["India", "USA", "UK"] },
  { type: "textarea", label: "Bio" }
];

new FormBuilder(fields, "formContainer");