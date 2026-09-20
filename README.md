# AI Recipe Finder

A responsive React Recipe Finder application built with React and the TheMealDB public API.

## Live Features

- Search recipes by name
- Recipe cards with images
- Recipe category and cuisine information
- Detailed recipe view
- Ingredients list
- Cooking instructions
- Loading state
- Error handling
- Empty-search validation
- No-results handling
- Responsive desktop and mobile layout

## Technology

- React
- Vite
- JavaScript
- CSS
- TheMealDB API

## AI-Assisted Development

AI was used as a development assistant during this project.

The initial development prompt used with Gemini CLI was:

> I need to build a standalone React Recipe Finder application for a frontend internship assignment.
>
> First, inspect the existing Vite React codebase and explain its current structure briefly.
>
> Then plan and implement a polished Recipe Finder app using React and TheMealDB public API.
>
> Requirements:
> - Search recipes by name.
> - Show recipe cards with image, recipe name, category and cuisine/area.
> - Show loading, error and no-results states.
> - Clicking a recipe should show its ingredients and cooking instructions.
> - Make the UI responsive for desktop and mobile.
> - Use clean, modern CSS with an attractive food-focused design.
> - Use React components and reusable code.
> - Use the existing Vite + React setup.
> - Do not add a backend.
> - Do not add unnecessary libraries unless genuinely required.
> - Handle API failures gracefully.
>
> Workflow:
> 1. Inspect the project.
> 2. Explain the implementation plan.
> 3. Implement the application.
> 4. Run the app/build and check for errors.
> 5. Fix any errors found.
> 6. Summarize the changes.

Gemini CLI reached its daily model quota during the inspection phase, so the remaining implementation was completed manually while following the planned requirements.

## Manual Improvements and Corrections

After reviewing and testing the application, I manually implemented and verified the following:

- Added the TheMealDB API integration.
- Added recipe search functionality.
- Added loading and error states.
- Added empty-search validation.
- Added a clear no-results message.
- Added recipe detail view with ingredients and instructions.
- Added responsive CSS for desktop and mobile screens.
- Added accessible labels and button states.
- Tested API search with real recipes.
- Tested empty search input.
- Tested a search with no matching results.
- Ran a production build successfully with `npm run build`.

## API

This project uses the free public TheMealDB API:

https://www.themealdb.com/

## Running Locally

Install dependencies:

```bash
npm install
