var express = require('express');
var router = express.Router();
var fs = require('fs')
var marked = require('marked')

/* GET home page. */
router.get('/getNote', function(req, res, next) {
  res.send('this is getNote')
});

router.get('/getNoteList', function(req, res, next) {
  // let files = findNoteList('./note' )
  // res.json(files)
  // 因为fs.createReadStream是异步,加入回调函数
  findNoteList('./note', function(data){
    res.json(data)
  })
});

router.get('/getNoteByName/:name', function(req, res, next) {
  console.log(req.params.name)
  console.log(123)
  var fileName = req.params.name
  // res.send(fileName)
  // 获取到的是buffer类型，在调用接口的时候需要安装marked模块解析数据
  fs.readFile('./note/' + fileName + '.md', function(err, data){
    if(err){
      res.send('文件不存在')
    }else{
      var htmlStr = marked(data.toString())
      res.json(htmlStr)
    }
  })
});

function findNoteList(path, callback){
  let result = [];
  // readdirSync 读取文件名
  let files = fs.readdirSync(path);
  // 创建可读流
  let readStream;
  // 只存.md文件
  // 格式：[{name:'vue',ctime:'2020',content:'111'}]
  files.forEach(val => {
    let obj = {}
    // 以xx为结尾
    if(val.endsWith('.md')){
      // 标题和时间都是同步
      obj.name = val.split('.md')[0];
      obj.ctime = fs.statSync(path +'/' + val).ctime;
      readStream = fs.createReadStream(path +'/' + val, {
        highWaterMark: 150
      });
      readStream.setEncoding('utf8');
      readStream.once('data', function(chunk){
        console.log(chunk)
        obj.content = chunk;
        result.push(obj);
      })
      // result.push(val)
      // 去掉后缀.md
      // result.push(val.split('.md')[0])
      // 获取最新修改时间
      // let a = fs.statSync('./note/' + val)
      // console.log(a.ctime)
    }
  })
  readStream.on('end', function(){
    callback(result);
  })
}


module.exports = router;
