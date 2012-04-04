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
  
  put_destroyer_at: function(row, col, orientation){
    if(orientation == 'v') {
      var img1 = $("<img src='images/v_destroyer_1.jpg' />");
      var img2 = $("<img src='images/v_destroyer_2.jpg' />");
      this.cell(row+1, col).append(img2);
      
    } else {
      var img1 = $("<img src='images/h_destroyer_1.jpg' />");
      var img2 = $("<img src='images/h_destroyer_2.jpg' />");
      this.cell(row, col+1).append(img2);
      
    }
    this.cell(row, col).append(img1);
  },
  
  put_cruiser_at: function(row, col, orientation){
    if(orientation == 'v') {
      
    } else {
      var img1 = $("<img src='images/h_cruiser_1.jpg' />");
      var img2 = $("<img src='images/h_cruiser_2.jpg' />");
      var img3 = $("<img src='images/h_cruiser_3.jpg' />");
      this.cell(row, col).append(img1);
      this.cell(row, col+1).append(img2);
      this.cell(row, col+2).append(img3);
    }
    
  },
  
  row: function(r) {
    return this.my_field.find('tr:eq(' + r + ')');
  },
  
  cell: function(row, col) {
    return this.row(row).find('td:eq(' + col + ')');
  }
  
}

