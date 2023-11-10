// Define an array of song URLs
const songs = [];
for (let i = 1; i <= 50; i++) {
    songs.push(`http://localhost:8000/music/song${i}.mp3`);
}

let currentSongIndex = 0;
let isShuffle = false;

const audioPlayer = document.getElementById('audio-player');
const volumeSlider = document.getElementById('volume-slider');

function playSong(songURL) {
    audioPlayer.src = songURL;
    audioPlayer.load();
    audioPlayer.play();
}

function playNext() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    playSong(songs[currentSongIndex]);
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(songs[currentSongIndex]);
}

function setVolume() {
    audioPlayer.volume = volumeSlider.value;
}

function toggleShuffle() {
    isShuffle = !isShuffle;
}

// Function to toggle the Songs dropdown
function toggleSongs() {
    const dropdown = document.getElementById('songs-dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Add event listeners to close the dropdown when clicking outside of it
window.addEventListener('click', function (event) {
    const dropdown = document.getElementById('songs-dropdown');
    const songsButton = document.getElementById('songs-button');
    if (event.target !== songsButton && event.target !== dropdown) {
        dropdown.style.display = 'none';
    }
});

// Dynamically create song buttons in the dropdown
const songsDropdown = document.getElementById('songs-dropdown');
songs.forEach((songURL, index) => {
    const button = document.createElement('button');
    button.textContent = `Song ${index + 1}`;
    button.onclick = () => playSong(songURL);
    songsDropdown.appendChild(button);
});

