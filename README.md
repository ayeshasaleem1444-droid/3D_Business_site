# NovaForge — Week 4 Premium 3D Business Website

**Live URL:** https://joyful-banoffee-5edacc.netlify.app
**Repo:** https://github.com/YOUR-USERNAME/week4-webdev

## Project Overview

A 5-page premium business website for a fictional web development studio called NovaForge. Built as the Week 4 assignment for the Advanced Web Development course.

**Pages:** Home · About · Services · Portfolio · Contact

**Tech Stack:** HTML5, CSS3, JavaScript (ES6+), Three.js (r128), GSAP 3.12 with ScrollTrigger

## Design Decisions

I designed NovaForge as a premium web development studio targeting ambitious brands. I chose a dark navy base (#0A0E1A) with electric violet (#6C5CE7) and cyan (#00D9FF) accents to signal a modern, tech-forward identity, paired with Space Grotesk for headlines and Inter for body text — a combination that feels both futuristic and highly legible. The hero features a rotating Three.js torus knot that subtly responds to mouse movement, giving an immediate sense of craft without distracting from the value proposition. Each service and project card uses a CSS 3D tilt on hover to add tactility, while GSAP ScrollTrigger fades sections in as the user scrolls. The site spans five pages — Home, About, Services, Portfolio, and Contact — with a consistent fixed nav and footer throughout. A working contact form validates input and confirms submission inline. If I had more time, I'd add real portfolio case studies with imagery, a blog for SEO, and a headless CMS so non-technical staff could update content without touching code.

## Features

- 3D hero animation — rotating Three.js torus knot, mouse-reactive
- Scroll-triggered animations — GSAP ScrollTrigger fades sections in
- 3D card tilt — CSS + JS perspective transform on hover
- Working contact form — client-side validation + confirmation alert
- Fully responsive — mobile, tablet, desktop breakpoints
- Custom 3D color palette — dark navy with violet/cyan gradient accents
- Clean console — zero errors or warnings
- Lighthouse — Desktop: 90+ across all metrics; Mobile: optimized for performance

## File Structure

week-4-task/
├── index.html → Home page (3D hero)
├── about.html → About page (mission, timeline, team)
├── services.html → Services page (offerings + pricing)
├── portfolio.html → Portfolio page (6 projects + stats)
├── contact.html → Contact page (working form)
├── style.css → Shared styles for all pages
├── main.js → Three.js + GSAP + tilt + nav logic
├── README.md → This file
└── screenshots/ → Desktop + mobile screenshots
├── 01-home-desktop.png
├── 01-home-mobile.png
├── 02-about-desktop.png
├── 02-about-mobile.png
├── 03-services-desktop.png
├── 03-services-mobile.png
├── 04-portfolio-desktop.png
├── 04-portfolio-mobile.png
├── 05-contact-desktop.png
├── 05-contact-mobile.png
├── lighthouse-desktop.png
└── lighthouse-mobile.png

## How to Run Locally

1. Clone or download this repo
2. Open index.html in any modern browser
3. OR use Live Server in VS Code for hot-reload development

No build step required — pure HTML/CSS/JS with CDN libraries.

## Deployment

Deployed on Netlify — https://joyful-banoffee-5edacc.netlify.app

## Author


Week 4 — Advanced Web Development
September 2026
