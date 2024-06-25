document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('meuAudio');
    let isPlaying = false;

    document.body.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(error => {
                console.log('Audio play was prevented:', error);
            });
        }
        isPlaying = !isPlaying;
    });
});
