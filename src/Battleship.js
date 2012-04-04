BattleShip = function(rows, cols){
  
  this.my_field = $("<table></table>")
  this.target_field = $("<table></table>");
  
  for (var i = 0; i < rows; i++){
    
    var tr = $("<tr></tr>")
    var tr2 = $("<tr></tr>")
    
    this.my_field.append(tr);
    this.target_field.append(tr2);
    
    for (var j = 0; j < cols; j++){
      tr.append("<td></td>");
      tr2.append("<td></td>");
    }
  }
  
}


BattleShip.prototype = {
  
  put_destroyer_at: function(row,col){
    var img1 = $("<img src='images/h_destroyer_1.jpg' />");
    var img2 = $("<img src='images/h_destroyer_2.jpg' />");
    this.cell(row, col).append(img1);
    this.cell(row, col+1).append(img2);
  },
  
  row: function(r) {
    return this.my_field.find('tr:eq(' + r + ')');
  },
  
  cell: function(row, col) {
    return this.row(row).find('td:eq(' + col + ')');
  }
  
}

