// Test Data Configuration
export type UserCredentials = {
  username: string;
  password: string;
}

export type TestUrls = {
  baseUrl: string;
}

// Test Data
export const testData = {
  // User Credentials
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
  // URLs
  urls: {
    baseUrl: 'https://www.saucedemo.com/',
  },
  product: {
    name: 'Sauce Labs Fleece Jacket',
    price: 49.99,
  }
};

export default testData;
