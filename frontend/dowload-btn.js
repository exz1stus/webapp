function downloadImage() {
    fetch('https://batko.alwaysdata.net/download') // Request the image from the backend
        .then(response => response.blob()) // Convert response to a Blob (binary data)
        .then(blob => {
            const url = window.URL.createObjectURL(blob); // Create a temporary URL
            const a = document.createElement('a');
            a.href = url;
            a.download = 'batko.jpg'; // Set filename
            document.body.appendChild(a);
            a.click(); // Trigger the download
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url); // Clean up
        })
        .catch(error => console.error('Download error:', error));
}