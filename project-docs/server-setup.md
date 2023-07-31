## Set up Apache user and SSH Access
steps 1 & 2 - commands should be run as root user.
1) create new apache user -> "adduser ash"
2) adds user as a 'superuser', user will be able to use 'sudo' command -> "usermod -aG sudo ash".
3) Switch apache user with -> "su - ash". 
4) if needed, on local machine generate a new SSH key pair using -> "ssh-keygen", this will generate id_rsa files (public and private key).
5) as the user, create a .ssh directory and set permissions -> "mkdir ~/.ssh" + "chmod 700 ~/.ssh". (700 = The file's owner has read, write, and execute permissions)
6) public key (id_rsa.pub) needs to be added to user '.ssh/authorized_keys' file on the live server.
7) Exit as apache user and go back to root user -> "exit".
8) You should now be able to SSH into live server -> "ssh -i LOCAL_PATH_TO_PRIVATE_KEY APACHE_USER@SERVER_IP" / "ssh -i ~/.ssh/id_rsa ash@161.35.163.106".

## Firewall Config
"UFW (Uncomplicated Firewall) is a user-friendly front-end for managing iptables, which is the default firewall management tool in Linux systems".
"Ubuntu 16.04 servers can use the UFW firewall to make sure only connections to certain services are allowed. We can set up a basic firewall very easily using this application.
Different applications can register their profiles with UFW upon installation. These profiles allow UFW to manage these applications by name. OpenSSH, the service allowing us to connect to our server now, has a profile registered with UFW."

1) outputs all available applications and there access status -> "sudo ufw app list".
2) To allow an application e.g SSH connections -> "sudo ufw allow OpenSSH".
3) Then enable the firewall -> "sudo ufw enable".
4) To check firewall status -> "sudo ufw status"
5) Block connections from specific IP address -> "sudo ufw deny from 203.0.113.100".
6) Check UFW manual -> "man ufw".
7) For more UFW commands and info see -> "https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands".

## Apache folder structure
1) Create directory for website in /var/www -> "sudo mkdir -p /var/www/defiworks.co.uk/public_html".
2) Change the ownership of the newly created folder to the current user -> "sudo chown -R $USER:$USER /var/www/example.com/public_html".
3) Grant general read access in the www directory -> "sudo chmod -R 755 /var/www".

### Creating New Virtual Host Files
Virtual host files are the files that specify the actual configuration of our virtual hosts and dictate how the Apache web server will respond to various domain requests.

Apache comes with a default virtual host file called 000-default.conf that we can use as a jumping off point. We are going to copy it over to create a virtual host file for each of our domains.

1) "sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/example.com.conf".
2) Now lets edit this new file -> "sudo nano /etc/apache2/sites-available/example.com.conf".
3) First, we need to change the ServerAdmin directive to an email that the site administrator can receive emails through. -> ServerAdmin admin@defiworks.co.uk.
4) Add the following properties, ServerName, establishes the base domain that should match for this virtual host definition, ServerAlias, defines further names that should match as if they were the base name. -> ServerName defiworks.co.uk ServerAlias www.defiworks.co.uk.
5) Define DocumentRoot to -> "/var/www/defiworks.co.uk/public_html".

### Enabling the New Virtual Host Files
1) Enable the new file -> "sudo a2ensite defiworks.co.uk.conf".
2) Restart Apache to see the changes -> "systemctl reload apache2".

### renewing ssl
1) "certbot --apache -d example.com -d www.example.com".

