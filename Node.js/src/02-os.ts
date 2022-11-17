import os from 'node:os';

// infos sur le système

// commun à process
console.log(os.platform());
console.log(os.arch());
console.log(os.version()); // version de l'OS

// stats
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());
