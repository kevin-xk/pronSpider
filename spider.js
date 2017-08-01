const superagent=require('superagent');
const cheerio = require('cheerio');
const charset = require('superagent-charset');
const fs = require('fs');
charset(superagent);

let  url= 'http://sex.corephi.com/forum/space.php?uid=12737809&mod=mythreads&page=';
let items = [];



bbb()


//aaa(url, items)




function page() {
  let pageArr = [];
  for(let i =0; i<36; i++) {
      pageArr .push(url+i);
  }
  return pageArr;
}



function start2(url, items) {
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

async function bbb() {
  let a = page();
  for(let i=0; i<a.length; i++) {
    await aaa(a[i], items);
  }
  fs.writeFile('data.json', JSON.stringify(items, null, 4) , (err) => {
    if(err) console.log(err);
  })
}

//7.31 bug已解决
 async function aaa(url, items) {
  await start2(url, items);
 }