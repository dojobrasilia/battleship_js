BattleShip = function(rows, cols){
  
  for (var i = 0; i < rows; i++){
    $("#target_squad").append("<tr></tr>");
    $("#my_squad").append("<tr></tr>");
    
    for (var j = 0; j < cols; j++){
      $("#target_squad tr:last").append("<td></td>");
      $("#my_squad tr:last").append("<td></td>");
    }
  }
  
}