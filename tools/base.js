let  url= 'http://sex.corephi.com/forum/space.php?uid=12737809&mod=mythreads&page=';
//get所有页数的url

let page=() => {
  let pageArr = [];
  for(let i =0; i<36; i++) {
      pageArr .push(url+i);
  }
  return pageArr;
}
/*
let jsonUrl =() =>{
	for(let i=0; i<data.length; i++) {
		data[i] ='http://sex.corephi.com/forum/'+data[i];
	}
	fs.writeFile('./data.json', JSON.stringify(data, null, 4) ,(err) =>{
		if(err) console.log(err);
	})
}
*/
module.exports = {page};

