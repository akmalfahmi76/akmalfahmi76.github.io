// Ambil data dari Google Sheets
fetch('https://script.google.com/macros/s/[SCRIPT_ID]/exec')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('sheets-data');
        data.forEach(row => {
            const p = document.createElement('p');
            p.textContent = row.join(', ');
            container.appendChild(p);
        });
    });

// Tampilkan PDF
const pdfViewer = document.getElementById('pdf-viewer');
pdfViewer.src = 'https://drive.google.com/file/d/[PDF_ID]/preview';

// Tampilkan Gambar
const imageViewer = document.getElementById('image-viewer');
imageViewer.src = 'https://drive.google.com/uc?export=view&id=[JPG_ID]';
// Ambil data dari Google Sheets
fetch('https://script.google.com/macros/s/[SCRIPT_ID]/exec')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('sheets-data');
        data.forEach(row => {
            const p = document.createElement('p');
            p.textContent = row.join(', ');
            container.appendChild(p);
        });
    });

// Tampilkan PDF
const pdfViewer = document.getElementById('pdf-viewer');
pdfViewer.src = 'https://drive.google.com/file/d/1gdml-Ell6R0HdrCnAgR6qXDFBFSgsx__/preview';

// Tampilkan Gambar
const imageViewer = document.getElementById('image-viewer');
imageViewer.src = 'https://drive.google.com/uc?export=view&id=1TQIhdd-vsKc8FmMPkJn1MfyOGEY9Kr_Y';
