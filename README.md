# Moteur 3D

Un moteur de rendu 3D léger écrit en JavaScript vanille, utilisant l'API Canvas 2D du navigateur pour afficher des objets 3D via une projection en perspective.

## Fonctionnalités

- Projection en perspective de points 3D sur un canvas 2D
- Rotations et translations sur les trois axes (X, Y, Z)
- Plusieurs formes 3D prédéfinies : cube, cercle, étoile, soleil, Krokmou
- Générateur de formes circulaires paramétrables
- Contrôles en temps réel via clavier et boutons

## Structure du projet

```
Moteur-3D/
├── index.html              # Page principale (canvas + boutons de contrôle)
├── script.js               # Point d'entrée : boucle de rendu principale
├── 3DManager/
│   ├── 3D_movement.js      # Transformations 3D (translations, rotations)
│   └── print_on_screen.js  # Rendu canvas (projection, affichage lignes/points)
├── controlManager/
│   ├── break.js            # Pause / Reprise
│   ├── reverse.js          # Inversion du sens de rotation
│   ├── speed.js            # Contrôle de la vitesse
│   └── position.js         # Déplacement de la caméra (touches directionnelles)
├── data/
│   ├── cube.js             # Données du cube
│   ├── circle.js           # Données du cercle
│   ├── star.js             # Données de l'étoile
│   ├── sun.js              # Données du soleil
│   └── krokmou.js          # Données de Krokmou
└── creator/
    └── circle.js           # Générateur de sphères / cercles paramétrables
```

## Lancer le projet

Le projet utilise les **ES Modules** natifs du navigateur : il doit être servi par un serveur HTTP local (les modules ne fonctionnent pas en ouvrant directement le fichier via `file://`).

**Avec Python :**
```bash
python3 -m http.server 8000
```
Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.

**Avec Node.js (`npx serve`) :**
```bash
npx serve .
```

## Contrôles

| Action | Clavier | Bouton |
|---|---|---|
| Pause / Reprise | `Espace` | `II` |
| Inverser la rotation | `R` | `R` |
| Accélérer | `F` | `F` |
| Ralentir | `S` | `S` |
| Déplacer vers le haut | `↑` | — |
| Déplacer vers le bas | `↓` | — |
| Déplacer à gauche | `←` | — |
| Déplacer à droite | `→` | — |

## Technologies

- JavaScript (ES Modules, vanilla)
- API Canvas 2D (`CanvasRenderingContext2D`)
- Aucune dépendance externe
