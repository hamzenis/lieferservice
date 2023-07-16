# Delivery Service / Lieferservice  Website

Project for the university modul "Programming Exercises" at the Frankfurt University of Applied Sciences in Germany.

## Description

This project is a web application for a delivery service. The application is written in Javascript and uses the Node.js framework. The database is a NoSQL MongoDB database.\
The application is deployed on a Linux Ubuntu server and a preview website is available at the following URL: [https://liefer-ex.de/](https://liefer-ex.de/)

**Authors: Hamzenis Kryeziu, Kejvi Hysenbelli, Baba Alimou Barry**


## Dependencies

If you want to run the application on your own server, you need to install the following dependencies:

* Node.js
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

* MongoDB
    ```bash
    sudo apt install mongodb
    ```

* Nginx
    ```bash
    sudo apt install nginx
    ```

* pm2
    ```bash
    npm install -g pm2
    ```

* certbot
    ```bash
    sudo apt install certbot python3-certbot-nginx
    ```


## Populate environment variables

Create a file named `.env` in the root directory of the project and populate it with the following environment variables:

```bash
MONGODB_URI=mongodb://localhost/lieferex
ADMIN_BENUTZER = admin
ADMIN_PASSWORT = admin
TOKEN = Hsjhakjh&||h()/{HHSFXF;JGuf75
```

If you want to use MongoDB Atlas instead of a local MongoDB database, you can create a free account on [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and populate the environment variable `MONGODB_URI` with the value copied from your database. It should look like this:

```bash
MONGODB_URI=mongodb+srv://<database>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

## Run the application in development mode

Clone the project to your desired location and install the dependencies:

```bash
git clone https://github.com/hamzenis/lieferservice.git
cd lieferservice/lieferex/
npm install
```

If you want to run the application in development mode, you can use the following command:

```bash
npm run dev
```

Go to [http://localhost:3000/](http://localhost:3000/) to see the application running.

## Run the application in production mode in a Linux Ubuntu server

### Configure Nginx

### Firewall rules

After you installed nginx on your server, you need to configure it to serve the application.\
Firewall rules needs to be set up.

```bash
sudo ufw allow "Nginx Full"
sudo ufw allow OpenSSH
sudo ufw enable
```

### Clone the project

Clone the project to your /var/www/ directory:

```bash
cd /var/www
git clone https://github.com/hamzenis/lieferservice.git
cd lieferservice/lieferex
```

### Change localhost:3000 to Domain Name

In the some files localhost:3000 needs to be changed to your domain name to work with nginx.\
In following files:

- lieferex/pages/warenkorb.jsx -> Line 42
- lieferex/pages/backend/index.jsx -> Line 13, Line 23, Line 84
- lieferex/pages/backend/login.jsx -> Line 14
- lieferex/pages/bestellungen/[nr].jsx -> Line 107

Change part of line from **http://localhost:3000/** to **https://your-domain-name.tld/** \
Example **http://localhost:3000/** -> **https://liefer-ex.de/**

### Build the application and install npm dependencies

Before you can run the application, you need to build it and install the npm dependencies. Do not forget to populate the [`.env` file](#populate-environment-variables) with the environment variables.

```bash
npm install
npm run build
```

### Nginx sites-available configuration
Create a new file in the `/etc/nginx/sites-available/` directory.

```bash
cd /etc/nginx/sites-available
touch name_of_app
nano name_of_app
```

Copy the following configuration into the file and replace the `name_of_app` with your to your project directory and `domainname.com` with your web adress.

```bash
#nginx config file for Nextjs App
#place in /etc/nginx/sites-available/name_of_config_file
server {
        listen 80;
        server_name domainname.com;

        gzip on;
        gzip_proxied any;
        gzip_types application/javascript application/x-javascript text/css text/javascript;
        gzip_comp_level 5;
        gzip_buffers 16 8k;
        gzip_min_length 256;

        location /_next/static/ {
                alias /var/www/name_of_app/.next/static/;
                expires 365d;
                access_log off;
        }

        location / {
                proxy_pass http://127.0.0.1:3000; #change to 3001 for second app, but make sure second nextjs app starts on new port in packages.json "start": "next start -p 3001",
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
```

And we need to symlink the config from Site-Available to Site-Enabled. After that we check if everything ist set up correctly. Remove the default entries and restart nginx.

```bash
sudo ln -s /etc/nginx/sites-available/name_of_app /etc/nginx/sites-enabled/name_of_app
nginx -t

cd /etc/nginx/sites-available
rm default
cd /etc/nginx/sites-enabled
rm default

systemctl restart nginx
```


### Domain Configuration

Now you have to change the A-record to point to the IP address of your linux server. Go to your domain provider and change the A-record to your IP address.

|Field|Value|
| ----------- | ----------- |
|Type:| A-Record|
|Host:| @|
|Value:| your IP address|

### SSL Certificate

Install Certbot and select 2 for "Redirect" in the installation.

```bash
sudo certbot --nginx -d domainname.com
systemctl restart nginx
```

### Run Instance

Now we run PM2 to start our project:

```bash
cd /var/www/lieferservice/lieferex
pm2 start npm --name name_of_app -- start
```
If you want to restart your instance with a scheduled time, you can use the following command (you need to change the time):

```bash
pm2 start npm --name name_of_app -- start --cron-restart="0 2 * * *"
```

At 02:00 every day, the instance will be restarted.\
Use this website [https://crontab.guru/](https://crontab.guru/), if you need help for the cron syntax.

### Populate Database with data

With the help of the db.js file from the API folder, these products are initially stored in the database. To create the data in the database, we simply call follwing link in the webbrowser:

https://your-domain.tld/api/db \
Example: https://liefer-ex.de/api/db


After that you may restart your pm2 instance:
```bash
cd /var/www/lieferservice/lieferex
pm2 status
pm2 del 0
pm2 start npm --name name_of_app -- start
```
