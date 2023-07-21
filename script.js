let players = [
    { id: 'player1', position: 1 },
    { id: 'player2', position: 2 },
    { id: 'player3', position: 0 },
  ];
  const trackLength = 450;
  
  function movePlayer(player, distance) {
    const playerElement = document.getElementById(player.id);
    playerElement.style.left = distance + 'px';
  }
  
  function startRace() {
    players.forEach(player => {
      player.position = 0;
      movePlayer(player, player.position);
    });
  
    const raceInterval = setInterval(() => {
      players.forEach(player => {
        player.position += Math.floor(Math.random() * 10) + 1;
        if (player.position >= trackLength) {
          clearInterval(raceInterval);
          const winner = players[Math.floor(Math.random() * players.length)];
          alert(`Player ${winner.id.substr(6)} wins!`);
        } else {
          movePlayer(player, player.position);
        }
      });
    }, 100);
  }
  