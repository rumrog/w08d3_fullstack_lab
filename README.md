# Project Setup Checklist

Initialize project with Vue
```bash
vue create project_name
```

## Front-End `/client`

Create `client` folder
```
cd project_name
mkdir client
```
Move the following files to `client`
```
..
mv README.md babel.config.js node_modules package-lock.json package.json public .gitignore src client
```

Create services folder and ProjectService.js

```
cd client
mkdir src/components/services
touch src/components/services/ProjectService.js
```

## Back-End `/server`

On `/project_name`,
create `server` folder. 

```
mkdir server
```
Initiate `server`

```
cd server
npm init -y
```

Create `db` and `helpers` folders within `server` plus `server.js`
```
mkdir db helpers
touch server.js
```

Create `seeds.js` and `create_routers.js` inside `db` and `helpers`

```
touch db/seeds.js helpers/create_routers.js
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

Copy .gitignore from `client`

```
cp ../client/.gitignore .
```

## Start Servers

### Server

Run express:

```
npm run server:dev
```

### Client

```
npm run serve
```