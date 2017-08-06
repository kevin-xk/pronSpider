const fs = require('fs');
let spider = require('./spider');
let base = require('./base');

let items = [];
//消费者生产者


async function start() {

  let a = base.page();

  for(let i=0; i<a.length; i++) {
    await spider.start(a[i], items);
  }
  for(let i=0; i<items.length;i++) {
  	items[i].href ='http://sex.corephi.com/forum/'+items[i].href;
  }
  fs.writeFile('data.json', JSON.stringify(items, null, 4) , (err) => {
    if(err) console.log(err);
  })

}

module.exports={start}; 