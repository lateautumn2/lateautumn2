let arr=[
    '"落花不过身外客,流水从来是凉薄"',
    '"十里寒塘路,烟花一半醒"',
    '"取次花丛懒回顾，半缘修道半缘君"',
    '"花径不曾缘客扫,蓬门今始为君开"',
    '"醉后不知天在水,满船清梦压星河"',
    '"且将新火试新茶，诗酒趁年华"',
    '"小楼一夜听春雨,深巷明朝卖杏花"',
    '"风住尘香花已尽,日晚倦梳头。物是人非事事休，欲语泪先流"',
    '"任他明月来相照,敛尽芳心不向人"',
    '"若非群玉山头见,会向瑶台月下逢"'
]
//这是添加的随机诗句功能,后续封装
function edit(){
let index = Math.round(Math.random()*10)
console.log(index);
document.querySelector('.well>p').innerText = arr[index]
}

function get(){
    $.ajax({
        type:'get',
        url:'https://api.tianapi.com/txapi/verse/index',
        data:{
            key:'0dfb607fb99b1b57ca6fcc4f249ed298'
        },
        success:res=>{
            //console.log(res);
            if(res.code==100||res.code==110||res.code==130||res.code==140||res.code==150){
                //远程接口不可用时调用本地数据
                         edit()
            }else{       
                $('.well>p').text(res.newslist[0].content)
            }
        }

    })
}
get()