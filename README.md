# DeFiworks - Simplifying Your DeFi Journey
DeFi Works is your go-to web app for simplifying your journey with decentralised finance. Our platform helps you gain yield on your fiat currency with ease

## Features
* Yield Optimization: DeFi Works provides you with powerful tools to optimize the yield on your fiat currency investments within the DeFi ecosystem.

* User-Friendly Interface: Our user interface is designed with simplicity in mind. Navigating through various DeFi protocols and strategies has never been this intuitive.

* Secure and Private: Security is our top priority. Your data and investments are protected using the latest encryption and security practices.

* Real-time Monitoring: Stay up-to-date with real-time monitoring of your DeFi portfolio. Track your earnings and make informed decisions.

* Educational Resources: New to DeFi? No problem! DeFi Works offers educational resources to help you understand the DeFi landscape and make informed choices.

## Getting Started
To get started with DeFi Works, follow these steps:

1) Clone this repository to your local machine:
`git clone https://github.com/your-username/defi-works.git`.
2) Create .env file -> contact for neccessary variables.

3) Check/set file permission:
`sudo chmod -R 777 /PATH/TO/FILENAME/defiworks/`.`
   
5) Install the necessary php dependencies:
```bash
cd defi-works
composer install
```
6) Install JS dependencies:
`yarn install`

7) Connect to MySQL server:
connect using basic details, user = root, host = 127.0.0.1, port 3306, password = mysql password etc.

8) Make sure DATABASE_URL is set correctly:
`DATABASE_URL="mysql://root:password@127.0.0.1:3306/defiworks".`

9) Create database:
`php bin/console doctrine:database:create`

10) Map schema to database:
check sql commands to be run -> `php bin/console doctrine:schema:update --dump-sql` then use `php bin/console doctrine:schema:update --force`

11) Build and run the app.

```bash
yarn watch
symfony:server start
```
Open your web browser and navigate to `http://localhost:8000` to access DeFi Works.

## Contributing
We welcome contributions from the community to enhance DeFi Works. If you'd like to contribute, please follow these steps:

* Fork this repository.

* Create a new branch for your feature or bug fix.

* Make your changes and test thoroughly.

* Submit a pull request with a clear description of your changes.

## Support
If you encounter any issues or have questions about using DeFi Works, please open an <a href="https://github.com/agdc101/defiworks/issues">issue</a>.
