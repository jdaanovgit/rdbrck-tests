// As a quick solution prefer not to use a dedicated library like "dotenv", 
// Simply created a separate JavaScript file to manage environment variables

const env = {
  SITE_URL: process.env.SITE_URL || 'https://www.rdbrck.com',
  // Can add other environment variables as needed
};

module.exports = env;
