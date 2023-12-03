//Largeur de l'écran = animation responsive ordi + téléphone
// Obtenez la largeur de l'écran
const largeurEcran = window.innerWidth;

// Définissez les variables en fonction de la largeur de l'écran
const xValeur = largeurEcran >= 768 ? -600 : -300; // Ajustez les valeurs selon vos besoins




//accueil
 gsap.set('.f_enfant', {text: ''})
 const tl = gsap.timeline()

 tl.to('.f_enfant', { 
  text: 'Développeuse web front',
  duration: 1,
  delay: 0.7,
 })

 tl.to('.s_enfant', { 
  text: 'et',
  duration: 0.5,
 })

 tl.to('.t_enfant', { 
  text: 'community manager',
  duration: 1,
 })



 gsap.set('.andrea', { 
  opacity: 0, // Définit l'opacité initiale à 0 pour rendre le texte invisible
  scale: 0.5 // Définit l'échelle initiale à 0.5 pour un effet de départ en taille réduite
});

gsap.to('.andrea', { 
  opacity: 1, // Augmente l'opacité à 1 pour rendre le texte visible
  scale: 1, // Augmente l'échelle à 1 pour un effet de zoom
  duration: 1, // La durée de l'animation en secondes
  ease: 'power2.out' // Utilise une fonction d'ease pour une animation plus naturelle
});

gsap.set('.nav_ul', { 
  opacity: 0,
  scale: 0.5 
});

gsap.to('.nav_ul', { 
  opacity: 1, 
  scale: 1, 
  duration: 1,
  ease: 'bounce.out',
  delay: 2
});

gsap.set('.bouton_gsap', { 
  opacity: 0,
  scale: 0.5,
 
});

gsap.to('.bouton_gsap', { 
  opacity: 1, 
  scale: 1, 
  duration: 1,
  ease: 'bounce.out',
  delay: 2
});


//profil
//pose problème sur télélphone
gsap.from('.img_profil', {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 90%',
      },
    opacity: 0,
    duration: 10,
}) 

gsap.from(".texte_histoire", {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 90%',
      },
  rotation: 10, 
         x: xValeur, 
         duration: 0.5,
        });

gsap.from(".texte_mmi", {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 90%',
      },
  rotation: 10, 
         x: xValeur, 
         duration: 0.5,
        });


//cliquez sur l'image pour voir le projet
// gsap.from('.img_mbsite', {
//     scrollTrigger: {
//         trigger: '.img_mbsite',
//         start: 'top 80%',
//       },
//     opacity: 0,
//     duration: 10,
// }) 


//travaux
  gsap.from('.bloc_interview', {
    scrollTrigger: {
      trigger: '.bloc_interview',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
  });

  gsap.from('.bloc_mbsite', {
    scrollTrigger: {
      trigger: '.bloc_mbsite',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
  });

  gsap.from('.bloc_v2', {
    scrollTrigger: {
      trigger: '.bloc_v2',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
  });

  gsap.from('.bloc_stratedi', {
    scrollTrigger: {
      trigger: '.bloc_stratedi',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
  });

  gsap.from('.bloc_motion', {
    scrollTrigger: {
      trigger: '.bloc_motion',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
  });

  gsap.from('.bloc_v1', {
    scrollTrigger: {
      trigger: '.bloc_v1',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
  });

  gsap.from('.bloc_disney', {
    scrollTrigger: {
      trigger: '.bloc_disney',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
  });

  // gsap.from('.bloc_podcast', {
  //   scrollTrigger: {
  //     trigger: '.bloc_podcast',
  //     start: 'top 80%',
  //   },
  //   opacity: 0,
  //   duration: 2,
  // });