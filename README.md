# Blog App

## Overview

This is a simple blog application built using **React** with **Vite** and styled with **Material UI**. Users can view, create, edit, and delete blog posts. The app features a clean and modern UI with a user-friendly experience.

## Features

- **Home Page:** Displays all blogs in a card view.
- **Read More:** Clicking "Read More" redirects the user to a detailed blog page.
- **Single Blog View:** Displays the full blog content along with the author's information.
- **Search Blogs:**
  - A **search bar** allows users to search for blogs by title.
  - Clicking the **magnifying glass icon** triggers the search.
  - Users are redirected to a search results page displaying matching blogs.
- **Add Blog:**
  - Clicking **Add Blog** redirects the user to the Add Blog form.
  - Users can fill in the blog details (title, content, etc.).
  - Clicking **Submit Blog** saves and publishes the new blog.
- **Edit/Delete Blog:**
  - A **pencil icon** allows users to edit the blog post.
  - A **delete icon** allows users to remove a blog post.
- **Edit Blog Form:**
  - Users can update the blog title and content.
  - Clicking **Submit Blog** saves the changes.

## Tech Stack

- **Frontend:** React (Vite)
- **UI Library:** Material UI

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/amruteshdevadas/blg-app
   cd blg-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Open the application in your browser.
- Browse available blogs on the home page.
- Use the **search bar** to find blogs by title.
- Click **Read More** to view full content.
- Click **Add Blog** to create a new blog.
- Fill in the blog details and submit.
- Edit or delete blogs using the icons.
- Modify blogs via the **Edit Blog Form** and submit changes.
