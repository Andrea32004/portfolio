//Largeur de l'écran = animation responsive ordi + téléphone
// Obtenez la largeur de l'écran
const largeurEcran = window.innerWidth;

// Définissez les variables en fonction de la largeur de l'écran
const xValeur = largeurEcran >= 768 ? -600 : -300; // Ajustez les valeurs selon vos besoins




//accueil
// gsap.set('.profession', {text: ''})
// const tl = gsap.timeline()

// tl.to('.profession', { 
//     text : 'Développeuse web front et community manager',
//     duration: 4.3
// })


//profil
//pose problème sur télélphone
gsap.from('.img_profil', {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 80%',
      },
    opacity: 0,
    duration: 10,
}) 

gsap.from(".texte_histoire", {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 80%',
        debug: true,
      },
  rotation: 10, 
         x: xValeur, 
         duration: 1,
        });

gsap.from(".texte_mmi", {
    scrollTrigger: {
        trigger: '.texte_profil',
        start: 'top 80%',
      },
  rotation: 10, 
         x: xValeur, 
         duration: 1,
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
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });

  gsap.from('.bloc_mbsite', {
    scrollTrigger: {
      trigger: '.bloc_mbsite',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });

  gsap.from('.bloc_v2', {
    scrollTrigger: {
      trigger: '.bloc_v2',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });

  gsap.from('.bloc_stratedi', {
    scrollTrigger: {
      trigger: '.bloc_stratedi',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });

  gsap.from('.bloc_motion', {
    scrollTrigger: {
      trigger: '.bloc_motion',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });

  gsap.from('.bloc_v1', {
    scrollTrigger: {
      trigger: '.bloc_v1',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });

  gsap.from('.bloc_disney', {
    scrollTrigger: {
      trigger: '.bloc_disney',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });

  gsap.from('.bloc_podcast', {
    scrollTrigger: {
      trigger: '.bloc_podcast',
      start: 'top 80%',
    },
    opacity: 0,
    duration: 2,
  });