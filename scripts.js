function openSideMenu() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeSideMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
}

function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const dropArea = document.getElementById('dropArea');

    if (fileInput.files.length > 0) {
        dropArea.innerHTML = `<p>File selected: ${fileInput.files[0].name}</p>`;
    }
}

function dropHandler(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
}

function dragOverHandler(event) {
    event.preventDefault();
}

function compressImage() {
    // Add image compression logic here
    // For simplicity, let's assume image compression is handled on the server side
    // and return a compressed image link for download
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.style.display = 'block';
    downloadLink.href = 'path_to_compressed_image.jpg';
}
