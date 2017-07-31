const superagent=require('superagent');
const cheerio = require('cheerio');
const charset = require('superagent-charset');
const fs = require('fs');
charset(superagent);

let  url= 'http://sex.corephi.com/forum/space.php?uid=12737809&mod=mythreads&page=';


let start = (url) => {
  let items=[];
  superagent.get(url)
    .end((err, sres) => {
      
      if(err) console.log(err);

      let $ = cheerio.load(sres.text, {decodeEntities: false});
     
      $('.subject a:first-child').each((idx , element) =>{
        let $element = $(element);

        items.push({
          href: $element.attr('href')
        })
      })
      /*
      fs.appendFile('data.json', JSON.stringify(items, null, 4), (err) => {
        if(err) console.log(err)
      })
    */
    })
    return items;
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
//7.31 bug已解决
 async function aaa(url, items) {
  await start2(url, items);
 }

function bbb (url) {
  let items = [];
  let _page = page(url);
  spider(_page, items);
  fs.writeFile('data.json', JSON.stringify(items, null ,4 ) , (err) => {
    if(err) console.log(err);
  })
}

bbb(url)


function page(url) {
  let pageArr = [];
  for(let i =0; i<36; i++) {
      pageArr .push(url+i);
  }
  return pageArr;
}

function spider (arr, items) {
    for(let i =0; i<arr.length; i++) {
     aaa(arr[i], items)
    }
}
/*
async function go(url) {
  let getPage = await page(url);
  let getspider = await spider(getPage);

  return console.log('123');
}

go(url).then( (e) => {
  console.log(e)
})
*/


