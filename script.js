const $ = require("jquery")

$("document").ready(function(){
    
    $(".cell").on("click", function(){
        console.log(this);
        let rowId = Number($(this).attr("rowid"));
        let colId = Number($(this).attr("colid"));
        let cellAddress = String.fromCharCode(65+colId) + rowId;
        console.log(cellAddress);

    })
})