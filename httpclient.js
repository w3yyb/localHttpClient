//处理json数据
function getOneByForm() {
    var url = $("#url_input").val();
    var body = $("#body_input").val();
    var type = $("#type_select").val();
    var headerjson=$("#header_input").val() ?$("#header_input").val():'{}';
    try{
    var headers =   eval("(" + headerjson+ ")");   
}
catch(e){
alert("消息头不是json字符串");
}
    $.ajax({
        url: url,//请求地址
        // data: {id: 3},//提交的数据
        data: body.toString(),//提交的数据
        contentType: "application/x-www-form-urlencoded; charset=UTF-8", //Content-Type:application/x-www-form-urlencoded,Content-Type:application/multipart/form-data,Content-Type:application/octet-stream,Content-Type:application/json,Content-Type:application/xml...
        type: type,//提交的方式 //POST,GET,PUT,DELETE,HEAD,OPTIONS,PATCH.
        dataType: "TEXT", //返回类型 TEXT：字符串 JSON XML
        headers: headers,
        success: function (data) { // 校验返回内容，进行跳转
            //将获取到的数据输出到元素上
            $("#showArea").text(data);
            console.log(data);
        },
        error: function (xhr) {
            clearShowArea();
            // 失败输出HTTP状态码
            alert("调用失败！HTTP状态码：" + xhr.status);
        }
    })
}

function getOneByJson() {
    var url = $("#url_input").val();
    var body = $("#body_input").val();
    var type = $("#type_select").val();
    var headerjson=$("#header_input").val() ?$("#header_input").val():'{}';
    try{
    var headers =   eval("(" + headerjson+ ")");   
}
catch(e){
alert("消息头不是json字符串");
}
    // console.log(headers);
    $.ajax({
        url: url,//请求地址
        data: body,//提交的数据
        contentType: "application/json; charset=utf-8",
        headers: headers,
        type: type,//提交的方式
        dataType: "TEXT", //返回类型 TEXT：字符串 JSON XML
        success: function (data) { // 校验返回内容，进行跳转
            //将获取到的数据输出到元素上
            $("#showArea").text(data);
            console.log(data);
        },
        error: function (xhr) {
            clearShowArea();
            // 失败输出HTTP状态码
            alert("调用失败！HTTP状态码：" + xhr.status);
        }
    })
}

function getOneByXml() {
    var url = $("#url_input").val();
    var body = $("#body_input").val();
    var type = $("#type_select").val();
    var headerjson=$("#header_input").val() ?$("#header_input").val():'{}';
    try{
    var headers =   eval("(" + headerjson+ ")");   
}
catch(e){
alert("消息头不是json字符串");
}
    $.ajax({
        url: url,//请求地址
        data: body,//提交的数据
        contentType: "application/xml; charset=utf-8",
        headers: headers,
        type: type,//提交的方式
        dataType: "TEXT", //返回类型 TEXT：字符串 JSON XML
        success: function (data) { // 校验返回内容，进行跳转
            //将获取到的数据输出到元素上
            $("#showArea").text(data);
            console.log(data);
        },
        error: function (xhr) {
            clearShowArea();
            // 失败输出HTTP状态码
            alert("调用失败！HTTP状态码：" + xhr.status);
        }
    })
}


//  清空结果
function clearShowArea() {
    $("#showArea").empty();
}

// 发送请求方法入口，判断数据类型分别调用对应方法
function send() {
    var bodyType = $('input:radio[name=bodyType]:checked').val();
    console.log("bodyType: " + bodyType)
    if (bodyType == "form") {
        getOneByForm();
    } else if (bodyType == "json") {
        getOneByJson();
    } else if (bodyType == "xml") {
        getOneByXml();
    } else {
        alert("不支持该类型：" + bodyType)
    }
}

function jsonToFormData(json) {
    var object = JSON.parse(body);
    var rs = "";
    object.key(obj).forEach()
    {
        rs = {}
    }
}

// 跳转首页
function toIndex() {
    window.location.href = '/';
}


$(document).ready(function(){
       
        // var  bodyvalue = document.getElementById("body_input").value;
    // $("#body_input").val('key1=value1&key2=value2');
    $("#body_input").attr('placeholder','key1=value1&key2=value2')

    $("#formtype").click(function(){
         
    //  $("#body_input").val('key1=value1&key2=value2');
     $("#body_input").attr('placeholder','key1=value1&key2=value2')

        
    });

    $("#jsontype").click(function(){
        // $("#body_input").val('{"key1":"value1"}');
        $("#body_input").attr('placeholder','{"key1":"value1"}')
   
       });


       $("#xmltype").click(function(){
        // $("#body_input").val('<?xml version="1.0" encoding="UTF-8"?><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don t forget me this weekend!</body></note>');

        $("#body_input").attr('placeholder','<?xml version="1.0" encoding="UTF-8"?><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don t forget me this weekend!</body></note>')

   
       });

  });


//header_input

  if (!localStorage.getItem("url")) {
    localStorage.setItem("url", 'http://localhost/');
    }
    if (!localStorage.getItem("textcontent")) {
    localStorage.setItem("textcontent", '' );
    }
    if (!localStorage.getItem("headercontent")) {
        localStorage.setItem("headercontent", '' );
        }
    verify();   //验证本地存储
    
    //自定义验证函数，验证 的数据是否存在
    function verify(){
        var url = localStorage.getItem("url");
        var textdata = localStorage.getItem("textcontent");
        var headerdata = localStorage.getItem("headercontent");
        url = url ? url : '';
        textdata = textdata ? textdata : '';
        headerdata = headerdata ? headerdata : '';
        document.getElementById("url_input").value= url;
        document.getElementById("body_input").value = textdata;
        document.getElementById("header_input").value = headerdata;
    
    }
    function cleartext() {
        localStorage.removeItem("url");
        localStorage.removeItem("textcontent");
        localStorage.removeItem("headercontent");
        //localStorage.clear();
        document.getElementById("url_input").value = '';
        document.getElementById("body_input").value = '';
        document.getElementById("header_input").value = '';
    
    }
    
    function changetext() {
        localStorage.removeItem("url");
        localStorage.removeItem("textcontent");
        localStorage.removeItem("headercontent");
        //localStorage.clear();
       url= document.getElementById("url_input").value;
       content=document.getElementById("body_input").value;
       headercontent=document.getElementById("header_input").value;
    //    console.log(url)
       localStorage.setItem("url", url);
       localStorage.setItem("textcontent",  content);
       localStorage.setItem("headercontent",  headercontent);
    
    }
 



 
