interface INote {
  matiere: string,
  values: number[]
}
interface IEleve {
  prenom: string,
  nom: string,
  notes: INote[]
}

const tabEleves: IEleve[] = [
  {
    prenom: "Thomas",
    nom: "Laforge",
    notes: [
      {
        matiere: "Mathématiques",
        values: [16, 15]
      },
      {
        matiere: "Français",
        values: [16, 15]
      }
    ]
  },
  {
    prenom: "Camille",
    nom: "Laforge",
    notes: [{
      matiere: "Mathématiques",
      values: [15.9, 13]
    }]
  }
]


// Créer une procédure qui permet d'afficher les prénoms d'un tableau d'èlèves au format de l'étape 5 de l'exercice 1.
// console.log('liste eleves', JSON.stringify(tabEleves, null, 2))

// De la même manière, créer une procédure qui permet d'afficher les prénoms et noms des élèves.
tabEleves.forEach(e => {
  // console.log(`${e.prenom} ${e.nom}`)
})

// Créer une fonction qui permet de renvoyer le nom des matières d'un tableau d'élèves.
const allMatieres = tabEleves.flatMap(e => e.notes.map(n => n.matiere))
// console.log('allMatieres', allMatieres);
const uniqMatieres = allMatieres.reduce((uniqs, m) => {
  const exists = uniqs.find(u => u === m)
  return exists ? uniqs : [...uniqs, m]
}, [] as string[])
// console.log(uniqMatieres)

// Créer une fonction qui renvoie la moyenne de l'avant dernier élève du tableau.
const avantDernierEleve = tabEleves[tabEleves.length - 1 - 1]
const notes = avantDernierEleve.notes.flatMap(n => n.values)
const sumNotes = notes.reduce((sum, n) => sum + n, 0)
const moyenne = sumNotes / notes.length

// console.log("moyenne", moyenne)

const newTapEleves = tabEleves.map(e => {
  return {
    ...e,
    notes : e.notes.map(noteList => {
      return {
        ...noteList,
        values: noteList.values.map(n => {
          return Math.min(20, n + 1)
        })
      }
    })
  }
})

// console.log('notes boustée', JSON.stringify(newTapEleves, null, 2))

const fruits = ['pomme', 'banane', 'poire', 'fraise', 'orange'];

// Avec la méthode `map`, créer un nouveau tableau qui contient la longueur de chaque fruit.
const longueurs = fruits.map((fruit, index) => {
  return fruit.length
})


// Avec la méthode `filter`, créer un nouveau tableau qui contient uniquement les fruits de plus de 5 lettres.
const moreThanFiveLettersFruits = fruits.filter((fruit, index) => {
  // if(fruit.length > 5){
  //   return true
  // }
  // else {
  //   return false
  // }
  return fruit.length > 5
})

// Avec la méthode `reduce`, créer une variable qui contient la concaténation de tous les fruits.
const allFruits = fruits.reduce((res, fruit, index) => {
    return res + fruit
}, "")

// Avec la méthode `forEach`, afficher chaque fruit dans la console, les uns à la suite des autres.
fruits.forEach((fruit, index) => {
  console.log(fruit)
})

// Avec la méthode `find`, trouver le premier fruit qui contient la lettre 'a'.
const fruitFirstLetterIsA = fruits.find((fruit, index) => {
  return fruit.includes('o')
})
console.log("fruit", fruitFirstLetterIsA)

// Avec la méthode `some`, vérifier si un fruit contient la lettre 'z'.
const isLetterZexists = fruits.some((fruit, index) => {
  return fruit.includes('o')
})
console.log('isLetterZexists', isLetterZexists)

// Avec la méthode `every`, vérifier si tous les fruits contiennent la lettre 'e'.
const isLetterMexistsForAll = fruits.every((fruit, index) => {
  return fruit.includes('e')
})
console.log('isLetterMexistsForAll', isLetterMexistsForAll)

// Avec la function `sort`, trier les fruits par ordre alphabétique.
fruits.sort((fruitA, fruitB) => {
  return fruitA.localeCompare(fruitB)
})


const TAILLE_MATRICE = 3
const matrice: number[][] = []
for (let i = 0; i < TAILLE_MATRICE; i++) {
  const newLine = []
  for (let i = 0; i < TAILLE_MATRICE; i++) {
    newLine.push(0)
  }
  matrice.push(newLine)
}
let line = 0
let col = 1
matrice[line][col] = 1

let numToPut = 2

while(numToPut <= TAILLE_MATRICE * TAILLE_MATRICE){
  let nextLine = line - 1
  let nextCol = col + 1
  
  while(nextLine >= TAILLE_MATRICE || nextLine < 0 || nextCol >= TAILLE_MATRICE || nextCol < 0){
    if(nextLine < 0){
      nextLine = 2
    }
    if(nextCol > 2){
      nextCol = 0
    }
  }

  if(matrice[nextLine][nextCol] != 0){
    nextLine = line + 1
    nextCol = col
  }

  // console.log('next', nextLine, nextCol, matrice[nextLine][nextCol], matrice)
  showMatrice(matrice)

  matrice[nextLine][nextCol] = numToPut  
  line = nextLine
  col = nextCol
  numToPut++
}

// showMatrice(matrice)

function showMatrice(matrice: number[][]){
  const line1 = matrice[0].map(e => e || ' ')
  const line2 = matrice[1].map(e => e || ' ')
  const line3 = matrice[2].map(e => e || ' ')

  const sumLine1 = matrice[0].reduce((sum, num) => sum + num, 0)
  const sumLine2 = matrice[1].reduce((sum, num) => sum + num, 0)
  const sumLine3 = matrice[2].reduce((sum, num) => sum + num, 0)

  const sumCol1 = matrice.reduce((sum, line) => sum + line[0], 0)
  const sumCol2 = matrice.reduce((sum, line) => sum + line[1], 0)
  const sumCol3 = matrice.reduce((sum, line) => sum + line[2], 0)

  // const nbLastLineNumbersChar = [sumCol1, sumCol2, sumCol3].join('').length
  // const lastLineStarter = 5 - nbLastLineNumbersChar
  // console.log(nbLastLineNumbersChar, lastLineStarter)
  // let initLastLineSpacer = ''
  // for (let i = 0; i < lastLineStarter; i++) {
  //   initLastLineSpacer += ' '
  // }

  console.log('-------------')
  console.log('| ' + line1.join(' | ') + ' | ' + sumLine1)
  console.log('-------------')
  console.log('| ' + line2.join(' | ') + ' | ' + sumLine2)
  console.log('-------------')
  console.log('| ' + line3.join(' | ') + ' | ' + sumLine3)
  console.log('-------------')

  // console.log(initLastLineSpacer + [sumCol1, sumCol2, sumCol3].join(' | '))
  console.log(" " + [sumCol1, sumCol2, sumCol3].join(' | '))
  console.log('');
}