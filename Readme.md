# Hacker News

This project is a modern, feature-rich clone of Hacker News, built with Next.js, React, and Apollo GraphQL. It showcases the power of a well-structured, type-safe frontend application consuming data from a GraphQL API.

[View Demo](https://mysterious-basin-33454.herokuapp.com/)

## What You Can Do

This application allows you to:

*   **Browse Top Stories:** View the latest and greatest stories from a Hacker News-like feed.
*   **View Story Details:** Dive deeper into individual stories, exploring their content and related information.
* **Navigate pages:**  Go through pages of stories.
*   **Enjoy a Smooth Experience:** Benefit from fast loading times, lazy loading of components, and a responsive design.
*   **See it running on Docker:** easily deploy and run the project locally with Docker.

## Key Features

*   **Modern Tech Stack:** Built with Next.js, React 17+, and Apollo Client for a powerful and efficient user experience.
*   **GraphQL API:** Fetches data from a GraphQL server, demonstrating best practices in data fetching and management.
*   **TypeScript:**  Leverages the benefits of static typing for robust, maintainable code.
*   **Lazy Loading:** Components load on demand using React Suspense, improving initial load times.
*   **Responsive Design:** Adapts gracefully to various screen sizes, providing a consistent experience across devices.
*   **Docker Support:** Easily deployable and runnable via Docker, simplifying setup and development.
* **Document Titles:** Dynamic document titles using React-helmet.
* **Comprehensive Testing:** Well-tested with both unit and end-to-end tests.

## Under the Hood

This project also highlights:

*   **Clean Code:**  Adheres to code style conventions and best practices.
*   **Conventional Commits:**  Uses a clear commit message structure for easy tracking of changes.
*   **Accessible Design:** Aims for web accessibility best practices to ensure inclusivity.

## Getting Started

### Using Docker (Recommended)

1.  Ensure Docker is installed on your system.
2.  Run:

    ```bash
    docker-compose up
    ```

### Manual Setup

1.  Navigate to both the `client` and `server` directories in your terminal.
2.  In each directory, run:

    ```bash
    npm install
    ```

3. Start the client:

    ```bash
    # In the client directory
    npm run dev
    ```

4. Start the server:

    ```bash
    # In the server directory
    npm start
    ```

## Future Improvements

*   **Infinite Scrolling:** Implement infinite scrolling to seamlessly load more stories as the user scrolls.
*   **Image Optimization:** Progressive image loading for improved perceived performance.
*   **Internationalization:**  Utilize `react-intl` for multi-language support.
*   **Environment Configuration:** Migrate hardcoded URLs to environment variables for better flexibility.

## Credits

This project is inspired by [arunoda's original Next.js & Apollo demo](https://github.com/arunoda/next-apollo-demo).

The ripple loader used during loading is powered by [Loading.io](https://loading.io/css/).
