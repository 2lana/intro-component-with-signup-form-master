# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help me improve my coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](screenshot-mob_intro-component.png)
![](screenshot-desk_intro-component.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Jquery
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

My major learnings while working through this project.

See below:

```html
<input type="text" id="fname" name="fname" pattern="[A-zÀ-ž\s]{2,}" placeholder="First Name" required> 
        <label for="fname">First Name cannot be empty</label>
```
```css
input[type="text"],  input[type="email"], input[type="password"]{
    width: 90%;
    padding: 1rem;
    border: 1px solid var(--grayish-blue);
    border-radius: 0.3rem;
    height: 2.34rem;
}
```

### Continued development

I want to continue focusing on in future projects. These could be concepts still not completely comfortable with or techniques  found useful that  want to refine and perfect.

### Useful resources

- [frontendmentor](https://www.frontendmentor.io/) - This resource gives me the opportunities to learn more about the use frontend and real practice code simple challenges for beginners. Respect!
- [jqueryvalidation](https://jqueryvalidation.org/validate/) - This jQuery plugin makes simple clientside form validation easy.
- [freecodecamp](https://www.freecodecamp.org/) - This recource helped me learn to code
- [developer.mozilla](https://developer.mozilla.org) - This helped me as resourses for developers by developers.
- [w3schools](https://www.w3schools.com/) - This is an amazing resource which helped me better understand html, css. I'd recommend it to anyone still learning technical concept.
- [screen resolution simulator](https://searchenginereports.net/screen-resolution-simulator) - This is an amazing resource which helped me. 
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/console/) - This recource help me testing html and css.
- [W3C](https://validator.w3.org/) - This recource help me checks the markup validity of Web documents in HTML and CSS.
- [docs.github](https://docs.github.com/en/get-started) - This recource helped me try to understand githab for the first time in my life. I created three repositories, two folders and deleted them several times, it’s a nightmare.

Most YouTube channels represent the author’s personal point of view. Only documentation should be examined.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@2lana](https://www.frontendmentor.io/profile/2lana)

## Acknowledgments

Only practice

Grateful for reading and reply to every constructive comment.
