// const chalk = require('chalk'); // exporté en ESM
// // Error [ERR_REQUIRE_ESM]: require() of ES Module

// console.log(chalk.blue('Hello'));


async function main() {
  const {default: chalk} = await import('chalk');
  console.log(chalk.blue('Hello'));
}

main();
