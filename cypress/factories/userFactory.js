// cypress/factories/userFactory.js

/**
 * User Factory
 * 
 * Purpose: To generate consistent, reusable, and dynamic
 * user test data for Cypress E2E tests.
 * 
 * This ensures tests are stable, maintainable,
 * and aligned with real-world user flows.
 */
import { faker } from '@faker-js/faker';

export const createUser = () => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});


function userFactory(overrides = {}) {
  // Default user object
  const defaultUser = {
    id: Date.now(), // unique ID based on timestamp
    name: "John Doe",
    email: `user_${Date.now()}@testmail.com`,
    password: "Password123!",
    role: "customer", // could be customer, admin, vendor, etc.
    isActive: true,
    createdAt: new Date().toISOString(),
  };

  // Merge overrides for flexibility
  return { ...defaultUser, ...overrides };
}

module.exports = { userFactory };
