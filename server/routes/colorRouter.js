const express = require("express");

const colorRouter = express.Router();
const driver = require('../database.js')

colorRouter.post(
    "/post",
    (req, res) => {
        const query = req.body.string;

        const session = driver.session();
        session.run(query)
            .then(
                (result) => {
                    console.log(result.records);
                    res.send(result.records.map(
                        (element) => {
                            return element['_fields'];
                        })
                    );
                },
                (error) => {
                    console.log('Error:', error);
                    res.status(500).send('Error executing query');
                }
            )
            .finally(() => {
                session.close();
            });
    }
)

module.exports = colorRouter;