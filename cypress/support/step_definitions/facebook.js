// Based on
// https://github.com/monch1962/cucumber-boilerplate.git
// src/steps/given.js
// src/steps/then.js

Given(/I open the (url|site) "([^"]*)?"$/, (garbage, url) => {
    cy.visit(url);
});

Then(
    /^I expect that the title ( not)* contains "([^"]*)?"$/, (not, title) => {
    cy.title().should('include', title);
});

Then(
    /^I expect that the title is( not)* "([^"]*)?"$/, (not, title) => {
    cy.title().should('equal', title);
});

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/, (not, urlText) => {
    cy.url().should('include', urlText);
});

