//Largeur de l'écran = animation responsive ordi + téléphone
// Obtenir la largeur de l'écran
const largeurEcran = window.innerWidth;

// variables en fonction de la largeur de l'écran
const xValeur = largeurEcran >= 768 ? -600 : -300; // Ajuste les valeurs selon vos besoins


//accueil
 gsap.set('.andrea', {text: ''})
 const tl = gsap.timeline()

 tl.to('.andrea', { 
  text: 'Andréa Laizeau',
  duration: 1,
 })


 gsap.set('.titre p', { 
  opacity: 0, // Définit l'opacité initiale 
  scale: 0.5 // Définit l'échelle initiale
});

gsap.to('.titre p', { 
  opacity: 1, // Augmente l'opacité 
  scale: 1, // Augmente l'échelle = effet de zoom
  duration: 3, // La durée de l'animation en secondes
  ease: 'power2.out', // Utilise une fonction d'ease pour une animation plus naturelle
  delay: 1
});

gsap.set('.nav_ul', { 
  opacity: 0,
  scale: 0.5 
});

gsap.to('.nav_ul', { 
  opacity: 1, 
  scale: 1, 
  duration: 3,
  ease: 'power2.out',
  delay: 1
});


//profil
gsap.from('.img_profil', {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 90%',
      },
    opacity: 0,
    duration: 5,
    ease: 'power2.out'
}) 

gsap.from(".texte_histoire", {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 90%',
      },
  rotation: 10, 
         x: xValeur, 
         duration: 0.5,
         ease: 'power2.out'
        });

gsap.from(".mmi_experience", {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 90%',
      },
  rotation: 10, 
         x: xValeur, 
         duration: 0.5,
         ease: 'power2.out'
        });


//FILTRE TRAVAUX
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // Retirer la classe 'active' des boutons
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Obtenir la catégorie sélectionnée
        const category = button.getAttribute("data-category");
  
        // Afficher/Masquer les projets
        projects.forEach(project => {
          if (category === "all" || project.getAttribute("data-category") === category) {
            project.style.display = "block"; // Afficher les projets correspondants
          } else {
            project.style.display = "none"; // Masquer complètement les projets non correspondants
          }
        });
      });
    });
  });



document.addEventListener('DOMContentLoaded', () => {
  const photos = document.querySelector('.js-photos');
  const btnRight = document.querySelector('.js-btn-decale-droite');
  const btnLeft = document.querySelector('.js-btn-decale-gauche');

  const videos = document.querySelectorAll('.taille_video_slider'); // Cible uniquement les vidéos
  const gap = 90; // Espace entre les vidéos
  let index = 0;

  // Fonction pour calculer la largeur totale d'une vidéo avec le gap
  function calculateSlideWidth(video) {
    return video.offsetWidth + gap;
  }

  // Position initiale
  photos.style.left = `0px`;

  // Déplacement (avec inversion des directions)
  function move(direction) {
    const slideWidth = calculateSlideWidth(videos[index]);
    if (direction === 'right' && index > 0) { // Flèche droite recule
      index--;
    } else if (direction === 'left' && index < videos.length - 1) { // Flèche gauche avance
      index++;
    }

    photos.style.transition = 'left 0.6s ease-out';
    photos.style.left = `-${index * slideWidth}px`;

    // Désactiver les boutons si nécessaire
    btnRight.disabled = index === 0;
    btnLeft.disabled = index === videos.length - 1;
  }

  // Gestion des clics
  btnRight.addEventListener('click', () => move('right'));
  btnLeft.addEventListener('click', () => move('left'));

  // Initialisation des boutons
  btnRight.disabled = true; // Désactiver la flèche droite au départ
  btnLeft.disabled = videos.length <= 1; // Désactiver la flèche gauche si une seule vidéo
});

