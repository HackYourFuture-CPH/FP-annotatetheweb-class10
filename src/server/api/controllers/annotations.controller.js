"use strict";

const knex = require("../../config/db");


const createAnnotation = async body => {
    console.log(body.created_at)
    const [annotationId] = await knex("annotations").insert({
        title: body.title,
        area: JSON.stringify(body.area),
        description: body.description,
        fk_screenshot_id: body.fk_screenshot_id
    });

    return {
        successful: true
    };
};

module.exports = {
    createAnnotation
};