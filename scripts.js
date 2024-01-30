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
    const preview = document.getElementById('preview');
    const previewImage = document.getElementById('previewImage');

    if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];

        // Display the preview
        preview.style.display = 'block';
        previewImage.src = URL.createObjectURL(selectedFile);

        dropArea.innerHTML = `<p>File selected: ${selectedFile.name}</p>`;
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
    // For simplicity, let's simulate a delay and update the progress bar
    showProgress();

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        updateProgressBar(progress);

        if (progress === 100) {
            clearInterval(interval);
            const compressedImageUrl = 'path_to_compressed_image.jpg';
            showPreview(compressedImageUrl);

            // Display the download link
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = compressedImageUrl;
            downloadLink.style.display = 'block';
        }
    }, 500);
}

function showPreview(url) {
    const previewImage = document.getElementById('previewImage');
    previewImage.src = url;
    document.getElementById('preview').style.display = 'block';
}

function showProgress() {
    document.getElementById('progressContainer').style.display = 'block';
}

function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = percentage + '%';
}
