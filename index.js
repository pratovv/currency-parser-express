const express = require("express")
const app = express();
const cors = require('cors')
const morgan = require("morgan");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const router = require('./routes/index')
const bodyParser = require('body-parser')
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json())
app.use('/api', router)

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Test ITSoft",
            version: "1.0.0",
            description:
                "Test ItSoft",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);

app.use(
    "/swagger-api",
    swaggerUI.serve,
    swaggerUI.setup(specs, {explorer: true})
);
app.use(express.json());
app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));