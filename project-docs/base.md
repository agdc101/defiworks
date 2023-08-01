## Base Server Commands
* Reload Apache configuration and apply any changes -> "sudo systemctl reload apache2".
* Change to the directory which holds all the Apache configuration files -> "cd /etc/apache2/sites-available".
* Clear the symfony cache -> "php bin/console cache:clear --env=prod".
