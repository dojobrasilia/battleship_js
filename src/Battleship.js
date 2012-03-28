BattleShip = function(rows, cols){
  
  this.my_field = $("<table id='my_field'></table>")
  this.target_field = $("<table id='target_field'></table>");
  
  for (var i = 0; i < rows; i++){
    this.my_field.append("<tr></tr>");
    this.target_field.append("<tr></tr>");
    
    for (var j = 0; j < cols; j++){
      this.my_field.find("tr:last").append("<td></td>");
      this.target_field.find("tr:last").append("<td></td>");
    }
  }
  
}

BattleShip.prototype = {
  
}