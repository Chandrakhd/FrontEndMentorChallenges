# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

- it's a simple yet fun project to work on and learning about the layout.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot/desktopView.jpeg)

### Links

- Solution URL: (https://github.com/Chandrakhd/FrontEndMentorChallenges/tree/main/3-column-preview-card-component-main)
- Live Site URL: (https://chandrakhd.github.io/FrontEndMentorChallenges/3-column-preview-card-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- It's fully responsive on various screens.

To see how you can add code snippets, see below:

```css
@media screen and (max-width: 768px) {
  .card {
    padding: 2rem;
  }

  .card_title {
    font-size: 1.8rem;
  }
  .btn {
    padding: 0.8rem 1.6rem;
  }
}
@media screen and (max-width: 600px) {
  .card_container {
    height: auto;
    margin: 1rem;
  }
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .cards .card:nth-child(3) {
    grid-column: 1 / -1;
  }
}
@media screen and (max-width: 400px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

### Continued development

I will keep doing the challenges and improve the coding skills.

## Author

- Frontend Mentor - [@Chandrakhd](https://www.frontendmentor.io/profile/Chandrakhd)
