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

gsap.from(".texte_mmi", {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 90%',
      },
  rotation: 10, 
         x: xValeur, 
         duration: 0.5,
         ease: 'power2.out'
        });



//travaux
  gsap.from('.bloc_interview', {
    scrollTrigger: {
      trigger: '.bloc_interview',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.from('.bloc_mbsite', {
    scrollTrigger: {
      trigger: '.bloc_mbsite',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.from('.bloc_v2', {
    scrollTrigger: {
      trigger: '.bloc_v2',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.from('.bloc_stratedi', {
    scrollTrigger: {
      trigger: '.bloc_stratedi',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.from('.bloc_motion', {
    scrollTrigger: {
      trigger: '.bloc_motion',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.from('.bloc_v1', {
    scrollTrigger: {
      trigger: '.bloc_v1',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.from('.bloc_disney', {
    scrollTrigger: {
      trigger: '.bloc_disney',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
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





//SLIDER vidéo courte
// document.addEventListener("DOMContentLoaded", function() {
//   var photosWrapper = document.querySelector('.js-photos');
//   var sliderGlobalContainer =  document.querySelector('.js-slider');
//   var photoWidth = sliderGlobalContainer.offsetWidth;

//   var allReelPhotosArray = document.querySelectorAll('.js-photo.reel-slide'); 

//   var mouvement = 1; 
//   var minMouvement = 0;
//   var maxMouvement = allReelPhotosArray.length + 1;

//   function decaleGauche () {
//     mouvement = mouvement + 1;

//     if (mouvement == maxMouvement) {
//       retourDebut();
//     } else {
//       photosWrapper.style.left = mouvement * -photoWidth  + "px";
//     }
//   }
  
//   function retourDebut () {
//     mouvement = minMouvement;
//     photosWrapper.classList.add('no-anime'); 

//     photosWrapper.style.left = "0px";

//     setTimeout( function () {
//       mouvement = minMouvement + 1;
//       photosWrapper.classList.remove('no-anime'); 
//       photosWrapper.style.left = mouvement * -photoWidth  + "px";
//     }, 20)
//   }

  
//   function decaleDroite () {
//     mouvement = mouvement - 1;

//     if (mouvement == minMouvement) { 
//       retourFin();
//     } else {
//       photosWrapper.style.left = mouvement * -photoWidth  + "px";
//     }
//   }
  
//   function retourFin () {
//     mouvement = maxMouvement;
//     photosWrapper.classList.add('no-anime');
//     photosWrapper.style.left = mouvement * -photoWidth  + "px";

//     setTimeout( function () {
//       mouvement = maxMouvement - 1;
//       photosWrapper.classList.remove('no-anime'); 
//       photosWrapper.style.left = mouvement * -photoWidth  + "px";
//     }, 20)
//   }


//   var btnDecaleGauche = document.querySelector('.js-btn-decale-gauche');
//   var btnDecaleDroite = document.querySelector('.js-btn-decale-droite');

//   btnDecaleGauche.addEventListener('click', function() {
//     decaleGauche();
//   });

//   btnDecaleDroite.addEventListener('click', function() {
//     decaleDroite();
//   });
// })


  


// document.addEventListener("DOMContentLoaded", function () {
//   var photosWrapper = document.querySelector('.js-photos');
//   var allReelPhotosArray = document.querySelectorAll('.js-photo.reel-slide');
 


//   // Utiliser la largeur d'une photo individuelle + gap
//   var photoWidth = allReelPhotosArray[0].offsetWidth + parseInt(getComputedStyle(photosWrapper).gap, 10);

//   var mouvement = 1;
//   var minMouvement = 0;
//   var maxMouvement = allReelPhotosArray.length + 1;

//   function decaleGauche() {
//     mouvement = mouvement + 1;

//     if (mouvement == maxMouvement) {
//       retourDebut();
//     } else {
//       photosWrapper.style.left = mouvement * -photoWidth + "px";
//     }
//   }

//   function retourDebut() {
//     mouvement = minMouvement;
//     photosWrapper.classList.add('no-anime');
//     photosWrapper.style.left = "0px";

//     setTimeout(function () {
//       mouvement = minMouvement + 1;
//       photosWrapper.classList.remove('no-anime');
//       photosWrapper.style.left = mouvement * -photoWidth + "px";
//     }, 20);
//   }

//   function decaleDroite() {
//     mouvement = mouvement - 1;

//     if (mouvement == minMouvement) {
//       retourFin();
//     } else {
//       photosWrapper.style.left = mouvement * -photoWidth + "px";
//     }
//   }

//   function retourFin() {
//     mouvement = maxMouvement;
//     photosWrapper.classList.add('no-anime');
//     photosWrapper.style.left = mouvement * -photoWidth + "px";

//     setTimeout(function () {
//       mouvement = maxMouvement - 1;
//       photosWrapper.classList.remove('no-anime');
//       photosWrapper.style.left = mouvement * -photoWidth + "px";
//     }, 20);
//   }

//   var btnDecaleGauche = document.querySelector('.js-btn-decale-gauche');
//   var btnDecaleDroite = document.querySelector('.js-btn-decale-droite');

//   btnDecaleGauche.addEventListener('click', function () {
//     decaleGauche();
//   });

//   btnDecaleDroite.addEventListener('click', function () {
//     decaleDroite();
//   });
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const photosContainer = document.querySelector('.js-photos');
//   const slides = document.querySelectorAll('.js-photo');
//   const btnRight = document.querySelector('.js-btn-decale-droite');
//   const btnLeft = document.querySelector('.js-btn-decale-gauche');

//   const slideWidth = slides[0].clientWidth; // Largeur d'une slide
//   let currentIndex = 1; // Index de départ (après le clone initial)

//   // Initialiser la position pour afficher la première slide réelle
//   photosContainer.style.left = `-${currentIndex * slideWidth}px`;

//   // Fonction pour déplacer le slider
//   const moveSlider = (direction) => {
//     if (direction === 'right') {
//       currentIndex++;
//     } else if (direction === 'left') {
//       currentIndex--;
//     }

//     photosContainer.style.transition = 'left 0.6s ease-out';
//     photosContainer.style.left = `-${currentIndex * slideWidth}px`;

//     // Réinitialiser la position après la transition si on atteint un clone
//     photosContainer.addEventListener('transitionend', () => {
//       if (slides[currentIndex].classList.contains('clone')) {
//         photosContainer.style.transition = 'none'; // Supprime l'animation temporairement
//         if (direction === 'right') {
//           currentIndex = 1; // Revenir au premier élément réel
//         } else if (direction === 'left') {
//           currentIndex = slides.length - 2; // Revenir au dernier élément réel
//         }
//         photosContainer.style.left = `-${currentIndex * slideWidth}px`;
//       }
//     });
//   };

//   // Gestion des boutons
//   btnRight.addEventListener('click', () => moveSlider('right'));
//   btnLeft.addEventListener('click', () => moveSlider('left'));

//   // Optionnel : défilement automatique
//   let autoSlide = setInterval(() => moveSlider('right'), 5000);

//   // Pause au survol
//   const slider = document.querySelector('.js-slider');
//   slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
//   slider.addEventListener('mouseleave', () => {
//     autoSlide = setInterval(() => moveSlider('right'), 5000);
//   });
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const photos = document.querySelector('.js-photos');
//   const btnRight = document.querySelector('.js-btn-decale-droite');
//   const btnLeft = document.querySelector('.js-btn-decale-gauche');

//   const slides = document.querySelectorAll('.js-photo');
//   const slideWidth = slides[0].clientWidth; // Largeur d'une slide
//   let index = 1; // Position de départ après le premier clone

//   // Position initiale pour afficher la première slide réelle
//   photos.style.left = `-${index * slideWidth}px`;

//   // Fonction pour déplacer le slider
//   function move(direction) {
//     if (direction === 'right') {
//       index--; // Passer à la slide précédente pour aller à droite
//     } else if (direction === 'left') {
//       index++; // Passer à la slide suivante pour aller à gauche
//     }

//     photos.style.transition = 'left 0.6s ease-out';
//     photos.style.left = `-${index * slideWidth}px`;

//     photos.addEventListener('transitionend', () => {
//       if (slides[index].classList.contains('clone')) {
//         photos.style.transition = 'none'; // Supprimer l'animation
//         if (direction === 'right') {
//           index = slides.length - 2; // Revenir à la dernière vraie slide
//         } else if (direction === 'left') {
//           index = 1; // Revenir à la première vraie slide
//         }
//         photos.style.left = `-${index * slideWidth}px`;
//       }
//     });
//   }

//   // Gestion des clics sur les boutons
//   btnRight.addEventListener('click', () => move('right'));
//   btnLeft.addEventListener('click', () => move('left'));
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const photos = document.querySelector('.js-photos');
//   const btnRight = document.querySelector('.js-btn-decale-droite');
//   const btnLeft = document.querySelector('.js-btn-decale-gauche');

//   const slides = document.querySelectorAll('.js-photo');
//   const slideWidth = slides[0].clientWidth; // Largeur d'une slide sans le gap
//   const gap = 90; // Le même gap que dans votre CSS
//   const totalSlideWidth = slideWidth + gap; // Largeur totale d'une slide avec gap
//   let index = 1; // Position de départ après le premier clone

//   // Position initiale pour afficher la première slide réelle
//   photos.style.left = `-${index * totalSlideWidth}px`;

//   // Fonction pour déplacer le slider
//   function move(direction) {
//     if (direction === 'right') {
//       index--;
//     } else if (direction === 'left') {
//       index++;
//     }

//     photos.style.transition = 'left 0.6s ease-out';
//     photos.style.left = `-${index * totalSlideWidth}px`;

//     photos.addEventListener('transitionend', () => {
//       if (slides[index].classList.contains('clone')) {
//         photos.style.transition = 'none'; // Supprimer l'animation
//         if (direction === 'right') {
//           index = slides.length - 2; // Revenir à la dernière vraie slide
//         } else if (direction === 'left') {
//           index = 1; // Revenir à la première vraie slide
//         }
//         photos.style.left = `-${index * totalSlideWidth}px`;
//       }
//     });
//   }

//   // Gestion des clics sur les boutons
//   btnRight.addEventListener('click', () => move('right'));
//   btnLeft.addEventListener('click', () => move('left'));
// });


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

