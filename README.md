# Project Setup Checklist

## Front-End `/client`
On the project parent folder, initiate vue /client

```
vue create client
```

Create .gitignore

```
touch .gitignore
```

Set .gitignore to not include:

```
# inside .gitignore
node_modules/
```

Create services folder and ProjectService.js

```
mkdir src/components/services
cd ../services
touch ProjectService.js
```

## Back-End `/server`

On the project parent folder, 
create /server folder

```
mkdir server
```

Initiate /server

```
cd server
npm init
```

Create .gitignore

```
touch .gitignore
```
Set .gitignore to not include:

```
# inside .gitignore
node_modules/
```

Install nodemon
```
npm install -D nodemon
```

Install express, mongodb and cors
```
npm install express mongodb cors
```

Add the following to /server/package.json

```
"scripts": {
    "start": "node server.js", // NEW
    "test": "echo \"Error: no test specified\" && exit 1",
    "server:dev": "nodemon server.js", // NEW
    "seeds": "mongo < ./db/seeds.js" // NEW
  },
```

## Start Servers

### Server


<!-- Seed the database:

```
npm run seeds
``` -->

Run express:

```
npm run server:dev
```

### Client

```
npm run serve
```