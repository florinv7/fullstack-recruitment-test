# FidoRent fullstack recruitment test

## Exercise 1
Create an API with the structure and technologies of your preference. The API should have the ability to create, update, delete and list Rockets, the Rockets schema should have:

```
name: string

description: string

height: number

diameter: number

mass: number

photo: string (url) / file (Object)
```

Note: The image upload is optional

## Exercise 2
Create the application:

#### A - Admin area that is based on:
Form to create, edit and delete rockets

#### B - Public area that is based on:
Page to list Rockets, is desirable that the page has a pagination (2 per page).
Page to visualize the rocket details.
In the rocket information we need rocket name, description, height, diameter, mass and photo.

## Bonus
Solve [this exercise in hackerrank](https://www.hackerrank.com/challenges/three-month-preparation-kit-tree-preorder-traversal/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-eleven).

After solving it, copy the code and include it.


# Considerations
- Using Typescript, node.js and React is a plus
- The frameworks and libraries you could use for your solution is up to your choice
- We will look for error handling, but we are not expecting all edge cases to be covered
- Using a responsive design is a plus
- Adding tests is not mandatory, but is a big plus
- Provide a Readme to explain how to run the project and how to run the tests (in case they are present)

# SOLUTION: RUN THE PROJECT

Before starting run these commands to install the required packages

- in the root folder 
```
npm install
```

- in frontend folder 
```
npm install
```

- in the root folder  run the following command
```
npm run data:import
```
to clean the current DB (I've set up a mongodb online so no need of installation)
and fill it with some mock data 

TO START THE BACKEND (will use port 5000 on localhost)
- in root folder
```
npm start
```

TO START THE FRONTEND (will use port 3000 on localhost)
- in frontend folder
```
npm start
```

