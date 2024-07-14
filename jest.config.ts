export default {
    rootDir: 'src',
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    transform: {"^.+\\.tsx?$": "ts-jest",},
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
    },
    moduleFileExtensions: ['tsx', 'ts', 'web.js', 'js', 'web.ts', 'web.tsx', 'json', 'web.jsx', 'jsx', 'node',],
    modulePaths: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/../jest.setup.ts'],
};
