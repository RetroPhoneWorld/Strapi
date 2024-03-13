'use strict';

/**
 * package-feature router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::package-feature.package-feature');
