## Set up Apache user and SSH Access
* - commands should be run as root user.
1) * create new apache user -> "adduser ash"
2) * adds user as a 'superuser', user will be able to use 'sudo' command -> "usermod -aG sudo ash".
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
