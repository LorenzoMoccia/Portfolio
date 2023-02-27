"use strict";

function hamburgerClick() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Imposta il nome utente GitHub
const username = 'LorenzoMoccia';

// Recupera i dati del profilo tramite l'API di GitHub
fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    // Aggiorna l'immagine del profilo
    const profileImage = document.querySelector('.card img');
    profileImage.src = data.avatar_url;

    // Aggiorna il nome utente
    const usernameHeading = document.querySelector('.card h2');
    usernameHeading.textContent = data.login;

    // Aggiorna l'URL del profilo
    const profileUrl = document.querySelector('.card a');
    profileUrl.href = data.html_url;

    // Aggiorna il numero di follower, seguaci e repository
    const followersCount = document.querySelector('.followers');
    followersCount.textContent = data.followers;

    const followingCount = document.querySelector('.following');
    followingCount.textContent = data.following;

    const repositoriesCount = document.querySelector('.repositories');
    repositoriesCount.textContent = data.public_repos;
  })
  .catch(error => {
    console.error(error);
  });