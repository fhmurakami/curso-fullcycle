# Fullcycle Course - Docker

## Nginx with Node.js Challenge

In this challenge you'll put into practice what we learned about using nginx as a reverse proxy. The main idea is that when a user accesses nginx, it'll call our node.js application. This app in turn will add a record in our mysql database, registering a name in the `people` table.

The node.js application's return to nginx should be:

`<h1>Full Cycle Rocks!</h1>`

- List of names registered in the database

Create the docker-compose in a way that we just run `docker-compose up -d` and everything should be working and available on port: `8080`.

---

### How to run?

Run the command:

`docker-compose up -d --build`

Then access:

`localhost:8080`
