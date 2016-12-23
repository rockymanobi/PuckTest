
// 0.5 sec 毎にボタンの状態をチェックする
function startListening(){
    setInterval( function(){
      Puck.eval("BTN.read()",function(x) {
        console.log(x);
        if( x ) {
          // ボタンを押したらやってほしいことを書く
          alert("ボタンを押したな！！！？")
        }
      }); 
    },500);
}
