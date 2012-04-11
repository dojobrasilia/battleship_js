BattleShip = function(rows, cols){
  
  this.my_field = $("<table></table>")
  this.target_field = $("<table></table>");
  
  var battleship = this;
  
  for (var i = 0; i < rows; i++){
    
    var tr = $("<tr></tr>")
    var tr2 = $("<tr></tr>")
    
    this.my_field.append(tr);
    this.target_field.append(tr2);
    
    for (var j = 0; j < cols; j++){
      var td = $("<td></td>")
      var td2 = $("<td></td>")
      
      
      td2.data("col",j);  
      td2.data("row",i);
      tr.append(td);
      tr2.append(td2)
      
      
      td2.click(function(){ 
        
        battleship.shoot_at( $(this).find() + "", j+ "");
        battleship.shoot_at($(this).data("row"),$(this).data("col"))
      })
      
    }
  }
  
}


BattleShip.prototype = {
  
  put_destroyer_at: function(row, col, orientation){
    if(orientation == 'v') {
      var img1 = $("<img src='images/v_destroyer_1.jpg' />");
      var img2 = $("<img src='images/v_destroyer_2.jpg' />");
      this.my_cell(row+1, col).append(img2);
      
    } else {
      var img1 = $("<img src='images/h_destroyer_1.jpg' />");
      var img2 = $("<img src='images/h_destroyer_2.jpg' />");
      this.my_cell(row, col+1).append(img2);
      
    }
    this.my_cell(row, col).append(img1);
  },
  
  put_cruiser_at: function(row, col, orientation){
    if(orientation == 'v') {
      var img1 = $("<img src='images/v_cruiser_1.jpg' />");
      var img2 = $("<img src='images/v_cruiser_2.jpg' />");
      var img3 = $("<img src='images/v_cruiser_3.jpg' />");
      this.my_cell(row, col).append(img1);
      this.my_cell(row+1, col).append(img2);
      this.my_cell(row+2, col).append(img3);
      
    } else {
      var img1 = $("<img src='images/h_cruiser_1.jpg' />");
      var img2 = $("<img src='images/h_cruiser_2.jpg' />");
      var img3 = $("<img src='images/h_cruiser_3.jpg' />");
      this.my_cell(row, col).append(img1);
      this.my_cell(row, col+1).append(img2);
      this.my_cell(row, col+2).append(img3);
    }
    
  },
  
  shoot_at: function(row, col){
    if (this.my_cell(row, col).find('img').length>0) {
      this.my_cell(row, col).html('X');
      this.target_cell(row, col).html('X');
      
    } else {
      this.my_cell(row, col).html('W');
      this.target_cell(row, col).html('W');      
    }
  },
  
  
  target_row: function(r) {
    return this.target_field.find('tr:eq(' + r + ')');
  },
  
  target_cell: function(row, col) {
    return this.target_row(row).find('td:eq(' + col + ')');
  },
  
  my_row: function(r) {
    return this.my_field.find('tr:eq(' + r + ')');
  },
  
  my_cell: function(row, col) {
    return this.my_row(row).find('td:eq(' + col + ')');
  }
  
}

