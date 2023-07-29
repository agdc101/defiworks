# defi-works installation guide

## Infrastructure set-up

1) Install Homebrew (for Mac/Linux) == "Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS, as well as Linux." == https://brew.sh/

2) Install Composer == "Composer is an application-level dependency manager for the PHP programming language that provides a standard format for managing dependencies of PHP software and required libraries" == https://getcomposer.org/download/

3) Install Symfony == "Symfony is a free and open-source PHP web application framework and a set of reusable PHP component libraries." == https://symfony.com/download

4) Install Yarn == "Yarn is one of the main JavaScript package managers, developed in 2016 by Facebook for the Node.js JavaScript runtime environment." == https://classic.yarnpkg.com/en/docs/install#mac-stable == (This will also install Node.js if it is not already installed.)

6) Install webpack encore == "Webpack is a free and open-source module bundler for JavaScript." == composer require encore.

7) Install babel == "JSX should not be implemented directly by browsers, but instead requires a compiler to transform it into ECMAScript. This is where Babel comes in. Babel acts as this compiler allowing us to leverage all the benefits of JSX while building React components" == yarn add @babel/preset-react@^7.0.0 --dev

7) Install mySQL server & mySQL GUI (Workbench) == "The MySQL server provides a database management system with querying and connectivity capabilities" == create mySQL database.

## Project Set-up

1) Git clone - https://github.com/agdc101/defiworks.git

2) run composer install

3) run yarn install - installs node_modules
  
4) Create env.local file - change database URL.
  
### Windows machines will need to run webpack in git bash.  
### run in terminal --> "symfony server:start" --> "yarn encore dev --watch".
