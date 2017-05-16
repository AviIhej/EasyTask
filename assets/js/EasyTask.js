$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")

    // //If li is grey we will turn it black
    // if ($(this).css("color")==="rgb(128, 128, 128)") {
    //     //turn it black
    //     $(this).css({
    //     color: "black",
    //     textDecoration: "none"
    // });
    // }else{
    //     //turn it grey
    //     $(this).css({
    //     color: "grey",
    //     textDecoration: "line-through"
    //     });
    // }

});
//Click on span to delete tasks

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//EventListener for the enter key
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        //get new task text from input
        var taskText = $(this).val();
        //get rid of task text
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span>" + taskText + "</li>")
    }
});
//fade input bar
$(".fa-pencil").click(function(){
    ("input[type='text']").fadeToggle()
})
