import migrateMongoose from "migrate-mongoose";
import "dotenv/config";
import { join } from "path";

const migrationsDir = join(__dirname, "migrations"),
  dbUrl = process.env.MONGO_URI,
  collectionName = "migrations",
  autosync = true;

const migrator = new migrateMongoose({
  migrationsPath: migrationsDir, // Path to migrations directory
  dbConnectionUri: dbUrl, // mongo url
  collectionName: collectionName, // collection name to use for migrations (defaults to 'migrations')
  autosync: autosync, // if making a CLI app, set this to false to prompt the user, otherwise true
});

const migrationName = "country-state";

migrator
  .run("up", migrationName)
  .then(() =>
    migrator
      .run("down", migrationName)
      .then(() => console.log("Successfully Deleted Unwanted Data"))
      .catch((err) => {
        console.error(err.message);
        process.exit();
      })
  )
  .catch((err) => {
    console.error(err.message);
    process.exit();
  })
  .finally(() => {
    console.log("Migration complete");
    process.exit();
  });
