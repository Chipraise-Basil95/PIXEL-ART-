// Select color input

// Select size input
// When size is submitted by the user, call makeGrid()
// Your code goes here
function makeGrid() {

sizeInput();

$("#pixelCanvas").find("td").click(selectColor);

};

function selectColor(){
        let color = $('#colorPicker').val(); 
        $(this).css('background-color', color);
}      
function sizeInput(){
        $("#pixelCanvas").children().remove();
       
        var rows = $('#inputWeight').val();
        var cols = $('#inputHeight').val();

         for(let x = 1; x<= rows; x++){
             $("#pixelCanvas").append("<tr></tr>");

             for(let y =1; y<=cols; y++){
                $("tr:last").append("<td></td>");
             }    
         }
}
$('#submit').on('click', function(event){
        event.preventDefault(); 
        makeGrid();
});


