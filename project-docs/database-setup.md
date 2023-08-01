## Database config and connection.
1) Add droplet IP to database cluster - add as a trusted source on dbaas settings.
2) Change the DATABASE_URL environment variable - see connection string on dbaas. e.g "ysql://ash:password@dbaas-db-6772046-do-user-14427467-0.b.db.ondigitalocean.com:port/database"
** if DATABASE_URL changes are not being seen, variable may need to be 'unset' using -> "php unset DATABASE_URL", sometimes variables will be set directly on server environment.

4) Create database (which should match database defined in DATABASE_URL variable -> "php bin/console doctrine:database:create".
5) Database schema can then be pushed to database -> "php bin/console doctrine:schema:update". (add "--dump sql" flag to print changes to terminal, use '--force' flag if required).

6) Database is managed with MySQLWorkbench -> set up new connection with connection params in dbaas settings. 
