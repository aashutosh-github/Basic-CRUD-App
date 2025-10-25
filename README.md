# BASIC CRUD APP

## NOTE: As a pre-requisite, it is necessary for you to have a javascript runtime like node.js or bun installed on your system

<br>

## Cloning and entering folder

```sh
git clone https://github.com/aashutosh-github/Basic-CRUD-App.git
cd Basic-CRUD-App
```

## To initialize:

- Install all the required dependencies

  ```sh
  #using node js
  npm install

  #using bun
  bun install
  ```

- Run the initDB.js file to initialize the DB with some random data.

  ```sh
  #with node js
  node initDB.js

  #with bun
  bun initDB.js
  ```

  ### NOTE: This is only to be run once when starting the application

- Configure your own environment variables inside of the .env file
- Once configured, simply run the commands

## To run the files, you can use either bun or node

```sh
#to run using nodemon
npm run devNode

#to run using bun with hot reload
npm run dev
```

## After running the files

You will have to open your browser and go to `http://localhost:<port>/`

- use the port that you have set inside the .env file inside the `<port>` here
- if no port is configured then the default value is taken as port `3000`
