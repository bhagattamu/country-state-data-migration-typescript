## Country-state data migration

- Migrate country and state data to mongodb after building app

### Tech

It uses [migrate-mongoose](https://github.com/balmasi/migrate-mongoose) package

### Installation

```sh
$ cd data-migration-demo
$ npm install migrate-mongoose
```

### Migration Script

For compiling ts files

```sh
$ npm run build
```

For migrating country and state to mongodb

```sh
$ npm run start:migrate
```

For running app

```sh
$ npm start
```

For all in one

```sh
$ npm run build && npm run start:migrate && npm run start
```

Or

```sh
$ npm run devStart
```

### Description

- First it will build .ts file into dist folder
- It will run migrate.js file which is in country-migrate folder
- migrate.js file migrate country and state into database
- After migration app is run
- Test http://localhost:8000/country for data migration success

### Migration Documentation

[You can find here!!!](https://github.com/balmasi/migrate-mongoose)
