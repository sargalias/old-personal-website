module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jestSetupFiles/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^_Base(.*)$': '<rootDir>/src/_Base$1',
    '^_pages(.*)$': '<rootDir>/src/_pages$1',
    '^Abstracts(.*)$': '<rootDir>/src/Abstracts$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^images(.*)$': '<rootDir>/src/images$1',
    '^layout(.*)$': '<rootDir>/src/layout$1',
    '^uiComponents(.*)$': '<rootDir>/src/uiComponents$1',
    '^utilities(.*)$': '<rootDir>/src/utilities$1',
    '^vendor(.*)$': '<rootDir>/src/vendor$1',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jestSetupFiles/loadershim.js`],
  setupFilesAfterEnv: [
    `<rootDir>/jestSetupFiles/jestDomImport.js`,
    `jest-extended`,
  ],
};
