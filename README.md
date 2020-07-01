# Project Setup Checklist

## Front-End `project/client`
Initiate vue project/client

```
vue create project_name
```

Create .gitignore

```
touch .gitignore
```

Create services folder and ProjectService.js

```
mkdir src/components/services
cd ../services
touch ProjectService.js
```

## Back-End `project/server`

Initiate project/server

```
npm init
```

Create .gitignore

```
touch .gitignore
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