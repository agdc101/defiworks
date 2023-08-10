## Live Database config and connection.
1) Add droplet IP to database cluster - add as a trusted source on dbaas settings.
   
2) Change the DATABASE_URL environment variable - see connection string on dbaas. e.g `ysql://ash:password@dbaas-db-6772046-do-user-14427467-0.b.db.ondigitalocean.com:port/database`.

3) Add DATABASE_URL variable to ~/.profile file. This makes sure the variable is initialised as soon as we log in.

4) Create database (which should match database defined in DATABASE_URL variable -> `php bin/console doctrine:database:create`.
   
5) Database schema can then be pushed to database -> `php bin/console doctrine:schema:update`. (add `--dump sql` flag to print changes to terminal, use `--force` flag if required).

6) Database is managed with MySQLWorkbench -> set up new connection with connection params in dbaas settings.

If any "SQLSTATE" permission denied errors arise try when using php bin/console commands -> `unset DATABASE_URL`. 
