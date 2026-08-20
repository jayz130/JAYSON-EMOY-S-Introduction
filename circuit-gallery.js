// Circuit Design Gallery Logic
        const circuitImages = [
            { src: 'circuit.jpg', title: 'Schematic & Pinout Notes' },
            { src: 'circuit (1).jpg', title: 'LCD Display Setup' },
            { src: 'circuit (2).jpg', title: '7-Segment Display & Breadboard Circuit' }
        ];
        let currentImageIndex = 0;

        function openCircuitGallery() {
            currentImageIndex = 0;
            updateGalleryImage();
            document.getElementById('imageModal').style.display = 'flex';
        }

        // Backward compatibility if other things call openImageModal
        function openImageModal(imageFile) {
            circuitImages[0].src = imageFile;
            currentImageIndex = 0;
            updateGalleryImage();
            document.getElementById('imageModal').style.display = 'flex';
        }

        function updateGalleryImage() {
            const image = document.getElementById('demoImage');
            const title = document.getElementById('gallery-title');
            const counter = document.getElementById('image-counter');
            
            image.src = circuitImages[currentImageIndex].src;
            title.textContent = circuitImages[currentImageIndex].title;
            counter.textContent = `${currentImageIndex + 1} / ${circuitImages.length}`;
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % circuitImages.length;
            updateGalleryImage();
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + circuitImages.length) % circuitImages.length;
            updateGalleryImage();
        }

        function closeImageModal(event) {
            const modal = document.getElementById('imageModal');
            if (event.target === modal || event.target.classList.contains('close-btn')) {
                modal.style.display = 'none';
            }
        }