# Student database

Made with: https://sheety.co/ 

Git history: [https://github.githistory.xyz/Reinoptland/sheety-student-database/blob/master/students.js](https://github.githistory.xyz/Reinoptland/sheety-student-database/blob/master/students.js)

0. Setup

- [x] HTML bestand
- [x] CSS bestand
- [x] JavaScript bestand
- [x] CSS & JavaScript linken aan HTML
- [x] Axios nodig (importeren??)

1. As a teacher I want to see a list of my students, so I can remember who is in my class

- [x] divje maken
- [x] ul
- [x] Request maken om de lijst met namen op te vragen (uit de api)
  - [x] import axios
  - [x] async functie maken
  - [x] functie aanroepen
  - [x] axios.get(url)
  - [x] await ervoor zetten
- [x] lijst met studenten weergeven
  - [x] loopen
  - [x] document.createElement
  - [x] innerText toevoegen (de naam)
  - [x] appendChild

2. As a teacher I want to be able to add a student, so my list can stay up to date

- [x] HTML
  - [x] input
  - [x] button
  - [x] label
- [x] Interactie programmeren
  - [x] button selecteren
  - [x] event listener, addEventListener (click op de button)
  - [x] event handler (functie)
- [x] Gegevens "POSTEN" naar de api
  - [x] input selecteren
  - [x] "value" van het inputveld uitlezen
  - [x] student object maken
  - [x] request maken naar de api (POST) -> met ons nieuwe student object
- [x] Nieuwe student toevoegen aan de pagina (zodat geen refresh nodig is)

3. As a teacher I want to be able to remove a students, so I can deal wit abusive students

- [x] HTML
  - [x] voor elke list item, voeg een delete knop toe
- [x] Interactie
  - [x] Voeg een event listener toe aan het knopje (click)
  - [x] voeg een event handler toe
- [x] Verwijder de student uit de api
  - [x] id van de student vinden
  - [x] axios.delete
- [ ] Verwijder de student van de pagina
  - [ ] .remove()
