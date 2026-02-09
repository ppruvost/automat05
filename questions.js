/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
  {
    question: "Une entreprise modélise son coût par la fonction C(x) = 2x² + 3x. Quelle est la dérivée C'(x) ?",
    options: ["4x + 3", "2x + 3", "4x", "2x"],
    bonne_reponse: "4x + 3",
    explication: "La dérivée de 2x² est 4x et celle de 3x est 3, donc C'(x) = 4x + 3."
  },
  {
    question: "Le chiffre d’affaires d’un service est donné par f(x) = x². Quelle est la dérivée f'(x) ?",
    options: ["x", "2x", "x²", "2"],
    bonne_reponse: "2x",
    explication: "La dérivée de x² est 2x."
  },
  {
    question: "Une fonction représente le temps de traitement d’un dossier : T(x) = 5x + 7. Quelle est la dérivée T'(x) ?",
    options: ["5", "7", "5x", "12"],
    bonne_reponse: "5",
    explication: "La dérivée d’une fonction affine ax + b est a. Ici, a = 5."
  },
  {
    question: "Une entreprise modélise son bénéfice par B(x) = -x² + 10x. Quelle est la dérivée B'(x) ?",
    options: ["-2x + 10", "2x + 10", "-x + 10", "-2x"],
    bonne_reponse: "-2x + 10",
    explication: "La dérivée de -x² est -2x et celle de 10x est 10."
  },
  {
    question: "La production journalière est donnée par P(x) = 3x². Quelle est la dérivée P'(x) ?",
    options: ["6x", "3x", "x²", "6"],
    bonne_reponse: "6x",
    explication: "La dérivée de 3x² est 6x."
  },
  {
    question: "Une fonction modélise l’évolution d’un stock : S(x) = x² + 4. Quelle est la dérivée S'(x) ?",
    options: ["2x", "x", "2x + 4", "x²"],
    bonne_reponse: "2x",
    explication: "La dérivée de x² est 2x et la dérivée d’une constante est 0."
  },
  {
    question: "Le coût total d’un service est C(x) = 4x² + 2x. Quelle est la dérivée C'(x) ?",
    options: ["8x + 2", "4x + 2", "8x", "2x"],
    bonne_reponse: "8x + 2",
    explication: "La dérivée de 4x² est 8x et celle de 2x est 2."
  },
  {
    question: "Une fonction f(x) = -2x² + 6 représente une perte financière. Quelle est sa dérivée ?",
    options: ["-4x", "4x", "-2x", "6"],
    bonne_reponse: "-4x",
    explication: "La dérivée de -2x² est -4x et celle de 6 est 0."
  },
  {
    question: "Une entreprise modélise sa charge de travail par f(x) = x² + 5x. Quelle est f'(x) ?",
    options: ["2x + 5", "x + 5", "2x", "x² + 5"],
    bonne_reponse: "2x + 5",
    explication: "La dérivée de x² est 2x et celle de 5x est 5."
  },
  {
    question: "Quelle est la règle de dérivation utilisée pour dériver une fonction de la forme ax² + bx ?",
    options: [
      "La dérivée est 2ax + b",
      "La dérivée est ax + b",
      "La dérivée est ax² + b",
      "La dérivée est 2ax²"
    ],
    bonne_reponse: "La dérivée est 2ax + b",
    explication: "On dérive terme à terme : ax² donne 2ax et bx donne b."
  }
];


/* ============================================================
   =================== FIN DES QUESTIONS ======================
   ============================================================ */
