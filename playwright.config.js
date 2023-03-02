const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  snapshotPathTemplate: 'tests/{testFilePath}/{arg}{ext}'
});
