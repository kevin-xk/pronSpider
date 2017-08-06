const superagent=require('superagent');
const cheerio = require('cheerio');
const charset = require('superagent-charset');
charset(superagent);

let start2= (url, items) =>{
  return new Promise(function(resolve,reject) {
    superagent.get(url)
    .end((err, sres) => {
        if(err) {
          reject(err);
        }
       
         let $ = cheerio.load(sres.text, {decodeEntities: false});
         $('.subject a:first-child').each((idx , element) =>{
          let $element = $(element);
          items.push({
            href: $element.attr('href')
          })
        });
         resolve(items)
    })
  })
 };
//7.31 bug已解决 异步解决获取数据的问题
 async function start(url, items) {
  await start2(url, items);
 }
 module.exports = {start};