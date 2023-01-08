// Menyimpan elemen dengan ID "team1" dan "team2" ke dalam variabel
const team1Btn = document.getElementById('team1');
const team2Btn = document.getElementById('team2');

// Menambahkan event listener untuk event "mousewheel" pada elemen "team1"
team1Btn.addEventListener('mousewheel', function(event) {
  // Mendapatkan nilai skor saat ini dari elemen "team1"
  let currentScore = parseInt(team1Btn.textContent, 10);

  // Mencek arah scroll mouse
  if (event.wheelDelta > 0) {
    // Jika scroll ke atas, tambahkan 1 ke skor saat ini
    currentScore += 1;
  } else {
    // Jika scroll ke bawah, kurangi 1 dari skor saat ini
    currentScore -= 1;
  }

  // Pastikan skor tidak melebihi batas maksimal (25) atau minimal (0)
  currentScore = Math.min(Math.max(currentScore, 0), 25);

  // Update skor pada elemen "team1"
  team1Btn.textContent = currentScore;
});

// Menambahkan event listener untuk event "mousewheel" pada elemen "team2"
team2Btn.addEventListener('mousewheel', function(event) {
  // Mendapatkan nilai skor saat ini dari elemen "team2"
  let currentScore = parseInt(team2Btn.textContent, 10);

  // Mencek arah scroll mouse
  if (event.wheelDelta > 0) {
    // Jika scroll ke atas, tambahkan 1 ke skor saat ini
    currentScore += 1;
  } else {
    // Jika scroll ke bawah, kurangi 1 dari skor saat ini
    currentScore -= 1;
  }

  // Pastikan skor tidak melebihi batas maksimal (25) atau minimal (0)
  currentScore = Math.min(Math.max(currentScore, 0), 25);

  // Update skor pada elemen "team2"
  team2Btn.textContent = currentScore;
});
