## Notes for MMD site

1. Github Repo is linked to Netlify

   - Used by dev for testing local and server deployment.

2. Testing: Netlify Deploy fails due to old Node version

    - Add NODE_VERSION = 14.15.1 to Netlify's Environment variable.

3. Client has domain name and hosting outside of Netlify

   - Must use `gatsby build` after all changes are made and pushed to master
   - once `src/public` folder built, copy contents of folder to 'public_html' in client's hosting


## Packages used:

1. gatsby-plugin-sass
    - Provides drop-in support for Sass/SCSS stylesheets
2. gatsby-plugin-sitemap
    - Create a sitemap based on Gatsby site. Available on `gatsby build`.
3. gatsby-plugin-transition-link
    - GSAP-based page transitions [https://transitionlink.tylerbarnes.ca/docs/anilink/](https://transitionlink.tylerbarnes.ca/docs/anilink/)
4. gsap
    - JS-based Animation library.
5. node-sass
    - Required library for gatsby-plugin-sass
6. react-burger-menu
    - Off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.

## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter
    ```

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

    Open the the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
