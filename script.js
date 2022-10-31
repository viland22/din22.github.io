function darkmode(){
    let darkmode = sessionStorage.getItem("darkmode");
        if (darkmode=="false"){
            document.body.classList.add("bg-light");
            document.body.classList.add("text-dark");
            document.body.classList.remove("bg-dark");
            document.body.classList.remove("text-light");
        } else {
            document.body.classList.remove("bg-light");
            document.body.classList.remove("text-dark");
            document.body.classList.add("bg-dark");
            document.body.classList.add("text-light");
        }
}

function readonly(menu) {
    $.ajax({
        url:"fn_read.php",  
        async: false,
        type: "post",   
        dataType: 'json',
        data: {menu: menu},
        success:function(result){
            //console.log(result);
            jumlah = result;
        }
    });
  }

  function readwrite(menu) {
    $.ajax({
        url:"fn_read.php",  
        async: false,
        type: "post",   
        dataType: 'json',
        data: {menu: menu},
        success:function(result){
            //console.log(result);
            var jumlah = 0;
            jumlah = result;
            create(menu,jumlah);
        },
        error:function(ex){
            //console.log(ex.responseText);
            const error = ex.responseText;
            const substring = "No such file";
            if(error.includes(substring)){
                create(menu,0);
            }
        }
    });
  }

  
function create(menu,jumlah) {
    var addjumlah=jumlah+1;
    $.ajax({
        url:"fn_write.php", 
        async: false,
        type: "post",   
        dataType: 'json',
        data: {menu: menu, jumlah:addjumlah},
        success:function(result){
            console.log(result);
        }
    });
}
