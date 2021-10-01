const mainService = require('./service');

exports.main = (req,res,next)=>{
    const data = mainService.mainService();
    
  /**
   * res.send() : 문자열로 응답
   * res.json() : Json으로 응답
   * res.render() : html 변환 템플릿을 렌더링
   * res.sendfile() : 파일전송
   */
  res.send(data);

}