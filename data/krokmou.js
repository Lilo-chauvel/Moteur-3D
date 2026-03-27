// // 🔥 PARAMÈTRES
// const density = 200; // plus tu augmentes, plus c’est réaliste
// const krokmou = []
// // ======================
// // 🐉 CORPS (ellipsoïde)
// // ======================
// for (let i = 0; i < density; i++) {
//     let theta = Math.random() * Math.PI * 2;
//     let phi = Math.random() * Math.PI;

//     let x = Math.cos(theta) * Math.sin(phi) * 2.5;
//     let y = Math.sin(theta) * Math.sin(phi) * 1.2;
//     let z = Math.cos(phi) * 1.2;

//     krokmou.push({ x, y, z });
// }

// // ======================
// // 🐲 TÊTE (avant du corps)
// // ======================
// for (let i = 0; i < density; i++) {
//     let theta = Math.random() * Math.PI * 2;
//     let phi = Math.random() * Math.PI;

//     let x = 3 + Math.cos(theta) * Math.sin(phi) * 0.8;
//     let y = Math.sin(theta) * Math.sin(phi) * 0.6;
//     let z = Math.cos(phi) * 0.6;

//     krokmou.push({ x, y, z });
// }

// // ======================
// // 🪽 AILES
// // ======================
// for (let i = 0; i < density * 2; i++) {
//     let t = Math.random();

//     // aile gauche
//     let x1 = -1 + t * -3;
//     let y1 = 2 * Math.sin(t * Math.PI);
//     let z1 = 0.5 * Math.cos(t * Math.PI);

//     krokmou.push({ x1, y1, z1 });

//     // aile droite
//     let x2 = -1 + t * -3;
//     let y2 = -2 * Math.sin(t * Math.PI);
//     let z2 = 0.5 * Math.cos(t * Math.PI);

//     krokmou.push({ x2, y2, z2 });
// }

// // ======================
// // 🐍 QUEUE
// // ======================
// for (let i = 0; i < density * 2; i++) {
//     let t = i / density;

//     let x = -2 - t * 4;
//     let y = Math.sin(t * 6) * 0.3;
//     let z = Math.cos(t * 4) * 0.3;

//     krokmou.push({ x, y, z });
// }

// // ======================
// // 🦴 CRÊTES / PIQUES
// // ======================
// for (let i = 0; i < density; i++) {
//     let t = Math.random();

//     let x = -1 + t * 3;
//     let y = 0;
//     let z = 1 + Math.sin(t * 10) * 0.3;

//     krokmou.push({ x, y, z });
// }


const krokmou = [
    // Tête
    { x: 3.2, y: 0.2, z: 0.1 },
    { x: 3.1, y: -0.1, z: 0.2 },
    { x: 3.3, y: 0.0, z: -0.1 },
    { x: 3.0, y: 0.3, z: 0.0 },
    { x: 3.25, y: -0.2, z: -0.2 },

    // Cou
    { x: 2.5, y: 0.2, z: 0.1 },
    { x: 2.3, y: -0.1, z: 0.2 },
    { x: 2.7, y: 0.0, z: -0.2 },
    { x: 2.4, y: 0.3, z: 0.0 },
    { x: 2.6, y: -0.2, z: -0.1 },

    // Corps centre
    { x: 1.5, y: 0.5, z: 0.3 },
    { x: 1.3, y: -0.4, z: 0.2 },
    { x: 1.7, y: 0.2, z: -0.3 },
    { x: 1.6, y: -0.1, z: 0.4 },
    { x: 1.4, y: 0.3, z: -0.2 },

    // Dos / épines
    { x: 1.2, y: 0.0, z: 0.9 },
    { x: 0.8, y: 0.1, z: 1.1 },
    { x: 0.4, y: -0.1, z: 1.0 },
    { x: 0.0, y: 0.0, z: 1.2 },
    { x: -0.5, y: 0.1, z: 1.0 },

    // Aile droite
    { x: 0.5, y: -1.5, z: 0.2 },
    { x: -0.5, y: -2.5, z: 0.3 },
    { x: -1.5, y: -3.0, z: 0.2 },
    { x: -2.5, y: -2.0, z: 0.1 },
    { x: -1.0, y: -1.0, z: 0.0 },

    // Aile gauche
    { x: 0.5, y: 1.5, z: 0.2 },
    { x: -0.5, y: 2.5, z: 0.3 },
    { x: -1.5, y: 3.0, z: 0.2 },
    { x: -2.5, y: 2.0, z: 0.1 },
    { x: -1.0, y: 1.0, z: 0.0 },

    // Queue
    { x: -2.0, y: 0.2, z: 0.0 },
    { x: -3.0, y: -0.2, z: 0.1 },
    { x: -4.0, y: 0.1, z: -0.1 },
    { x: -5.0, y: -0.1, z: 0.2 },
    { x: -6.0, y: 0.0, z: 0.0 },

    // Extrémité queue
    { x: -6.5, y: 0.3, z: 0.2 },
    { x: -6.7, y: -0.3, z: -0.2 },
    { x: -7.0, y: 0.0, z: 0.0 },

    // Pattes
    { x: 1.0, y: 0.5, z: -0.8 },
    { x: 1.0, y: -0.5, z: -0.8 },
    { x: 0.5, y: 0.5, z: -0.7 },
    { x: 0.5, y: -0.5, z: -0.7 },

    // Détails supplémentaires (densité)
    { x: 2.0, y: 0.1, z: 0.2 },
    { x: 1.8, y: -0.2, z: 0.1 },
    { x: 1.9, y: 0.3, z: -0.1 },
    { x: 0.9, y: 0.2, z: 0.4 },
    { x: 0.7, y: -0.3, z: 0.3 },
    { x: 0.6, y: 0.1, z: -0.2 },
    { x: -1.0, y: 0.0, z: 0.5 },
    { x: -1.5, y: 0.2, z: 0.3 },
    { x: -2.0, y: -0.2, z: 0.2 },
    { x: -2.5, y: 0.1, z: -0.1 },
    { x: -3.5, y: -0.1, z: 0.0 },
    { x: -4.5, y: 0.2, z: 0.1 },
    { x: -5.5, y: -0.2, z: -0.1 }
];

export {krokmou};