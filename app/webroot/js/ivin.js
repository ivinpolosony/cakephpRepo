// window.onload = function() {
////	alert("FFF");
//var obj = document.getElementById("ivin");
//console.log(obj);
//obj.onclick=function(){
//	var obj1 = document.getElementById("right_content");
//	//console.log(obj1);
//        alert("DDD");
//    return false;
//}
//};

$( document ).ready(function() {
    var obj = $("#ivin").find('a').html();
    //console.log(obj);
   
    
   
   
   
 //   console.log(obj1);
});


function myfun(id){
    
    
$("#newarticle").attr('href','/articles/add/id:'+id) ;
   // /articles/add/id:23

        $.ajax({
                type: "POST",
                url: "/articles/productAjax/",
                data: {
                    product_id:id,
                    product_name:'product'
                    
                },
                success: function(msg)
                {
                    $("#content1").html(msg);
                }
            });

}