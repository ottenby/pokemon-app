import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  ...createJestConfig,

  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  testEnvironment: "jsdom", // Set the test environment to 'jsdom'
};

export default config;
