const star = [
  // Octaèdre central (6 sommets)
  { x:  0,    y:  0,    z:  0.25 },
  { x:  0,    y:  0,    z: -0.25 },
  { x:  0.25, y:  0,    z:  0    },
  { x: -0.25, y:  0,    z:  0    },
  { x:  0,    y:  0.25, z:  0    },
  { x:  0,    y: -0.25, z:  0    },

  // Tétraèdre 1 (4 sommets)
  { x:  0,      y:  0,      z:  0.5  },  // pointe haut
  { x:  0.5,    y:  0,      z:  0    },
  { x: -0.25,   y:  0.433,  z:  0    },
  { x: -0.25,   y: -0.433,  z:  0    },

  // Tétraèdre 2 (4 sommets)
  { x:  0,      y:  0,      z: -0.5  },  // pointe bas
  { x: -0.5,   y:  0,       z:  0    },
  { x:  0.25,  y:  0.433,   z:  0    },
  { x:  0.25,  y: -0.433,   z:  0    },
];

export{star}