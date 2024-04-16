# TwitterClone Frontend Specification

## Overview
TwitterClone is a web application designed to replicate the core functionality of Twitter. This specification document outlines the requirements and features of the frontend part of the TwitterClone application, developed using Vue 3, Tailwind CSS, and Pinia for state management.

## Technologies Used
- Vue 3
- Tailwind CSS
- Pinia

## Features

### Authentication
- Users should be able to sign up for a new account.
- Users should be able to log in to their existing account.
- Users should be able to log out of their account.
- [Bonus] Authentication forms should have client-side validation for input fields.

### Home Feed
- Upon logging in, users should be directed to their home feed, displaying tweets from people they follow.
- Users should be able to compose new tweets.
- Tweets should support text content, and links.
- [Bonus] The home feed should update dynamically when new tweets are posted or actions (like, retweet, reply) are performed.

### Profile
- Users should have a profile page displaying their information.
- Profile page should include user's tweets, followers, following, and other relevant information.
- Users should be able to edit their profile information.
- Users should be able to follow/unfollow other users from their profile page.

## UI/UX Design
- The application should have a responsive design to support various screen sizes.
- Utilize Tailwind CSS for consistent and modern UI components.
- [Bonus] Implement smooth transitions and animations to enhance user experience.

## Routing
- Use Vue Router for client-side routing.
- Define routes for authentication, home feed, profile.

## State Management
- Utilize Pinia for managing application state.
- Define stores for user authentication, tweet data, notifications, and other relevant data.

## Git Best Practices
- Do not commit to a main branch directly, instead make a branch (for example, features/login) and work on the small objective. Only when it's complete, make a pull request to main and ask for review.[Example](https://github.com/KimangKhenng/tfd-blog/tree/features/Handle-SSO)
- Make use of Github Issue and try to make it small and link your PR/Branch, try to discuss on GitHub and code related issue. [Example issue](https://github.com/tfd-ed/tfd-blog/issues/130)
- Try to keep each commit small and follow objective in the issue.

## Note
- To persist state for Pinia when user refresh, you can use state persistence libary like [pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate)
- Try to focus on functionality first before polishing the UI
- You can also base your design on [twitter-clone-tailwind](https://github.com/anaseqal/twitter-clone-tailwind) (coded in plain HTML+Tailwind). You have to migrate it to Vue3 projects yourself.