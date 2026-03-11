const fetch = require('node-fetch');

async function checkSubstack() {
  try {
    const res = await fetch('https://tvrepairs.substack.com/api/v1/archive?sort=new&limit=2');
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

checkSubstack();
