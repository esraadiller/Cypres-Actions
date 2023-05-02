import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require("cypress-mochawesome-reporter/plugin")(on)
      module.exports = defineConfig({
        reporter: 'mochawesome',
      })
    },
  },
});
