const app = {
  db: {
    host: "ds141434.mlab.com",
    port: 41434,
    name: "server",
    username: "admin",
    password: "onkanya1503"
  },
  jwt: {
    APP_SECRET: "ILOVEYOU",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
