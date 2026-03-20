const templateGrid = document.getElementById('templateGrid');
const toast = document.getElementById('toast');

async function init() {
  try {
    const response = await fetch('/templates.json');
    if (!response.ok) throw new Error('Failed to load templates.json');
    const templates = await response.json();
    renderTemplates(templates);
  } catch (error) {
    console.error('Initialization error:', error);
    templateGrid.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

function renderTemplates(templates) {
  templateGrid.innerHTML = templates.map(template => `
    <div class="template-card" data-id="${template.id}">
      <div class="template-info">
        <h3>${template.name}</h3>
        <p>Dynamic template in <code>/public/templates/${template.id}</code></p>
      </div>
      <div class="action-group">
        <a href="${template.files.html}" target="_blank" class="action-btn primary">Open HTML</a>
        <a href="/preview.html?template=${template.id}" target="_blank" class="action-btn">Open Markdown</a>
        <button onclick="copyFile('${template.files.html}', 'HTML')" class="action-btn">Copy HTML</button>
        <button onclick="copyFile('${template.files.markdown}', 'Markdown')" class="action-btn">Copy Markdown</button>
        <button onclick="downloadFile('${template.files.html}', '${template.id}.html')" class="action-btn">Download HTML</button>
        <button onclick="downloadFile('${template.files.markdown}', '${template.id}.md')" class="action-btn">Download Markdown</button>
      </div>
    </div>
  `).join('');
}

async function copyFile(url, label) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not fetch ${label}`);
    const text = await response.text();
    await navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard`);
  } catch (error) {
    showToast(`Error: ${error.message}`);
  }
}

async function downloadFile(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Download failed');
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobUrl);
    showToast(`Downloading ${filename}`);
  } catch (error) {
    showToast(`Error: ${error.message}`);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

document.addEventListener('DOMContentLoaded', init);
