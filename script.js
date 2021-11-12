const $ = require("jquery")

$("document").ready(function(){
    // a click event is attached on element with cell class
    let db;

    $(".cell").on("click", function(){
        console.log(this);
        let rowId = Number($(this).attr("rowid"));
        let colId = Number($(this).attr("colid"));
        let cellAddress = String.fromCharCode(65+colId) + rowId;
        console.log(cellAddress);

        $("#address").val(cellAddress);

    })


    $(".cell").on("blur", function(){
            // console.log(this);
            console.log("blur event fired");
            let val =  $(this).text();
            let rowId = Number($(this).attr("rowid"));
            let colId = Number($(this).attr("colid"));
            let cellObject = db[rowId][colId];
            console.log(cellObject)
            cellObject.value = val;
            // console.log(val);
    })

    function init(){
        // db = 26*100

        db = []; // initiliase database with empty array

        for(let i = 0; i<100; i++){
            let row = []; // this represent the single row
            for(let j = 0; j < 26; j++){
                let cellAddress = String.fromCharCode(65+j) + (i +1);
                let cellObject = {
                     name: cellAddress,
                     value:"",
                     address:""
                 }
                 row.push(cellObject); // cell object is pushed 26 times
            }
            db.push(row);
        }
        console.log(db);
    }
    init();
})