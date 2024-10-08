<img width=75 height=75 src="/public/img/defi-works-logo.png"/>   

# DeFi Works - Simplifying Your DeFi Journey 
Maximize your money's potential effortlessly with DeFi Works – the ultimate asset management platform powered by decentralized finance.

## Features
* User-Friendly Interface: Our user interface is designed with simplicity in mind.

* Real-time Monitoring: Stay up-to-date with real-time monitoring of your DeFi portfolio. Track your earnings and make informed decisions.

## Getting Started
To get started with DeFi Works, follow these steps:

1) Clone this repository to your local machine:
`git clone https://github.com/your-username/defi-works.git`.
2) Create .env file -> use .env.example. as template.

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
