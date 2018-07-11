import { app } from "./app";

const env = process.env.NODE_ENV;
const port = process.env.CONSOLE_API_PORT || 9000;

// Start Express API
app.listen(port, () => {
    console.log(`Express running on port ${port} and environment ${env}.`);
});

export { app } from "./app";