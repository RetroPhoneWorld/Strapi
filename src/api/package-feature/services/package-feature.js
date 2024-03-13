'use strict';

/**
 * package-feature service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::package-feature.package-feature');
