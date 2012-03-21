describe("Jasmine", function() {
  it("should create dinamic table", function() {
    var battle_ship = new BattleShip(4,4)
    expect($('#my_squad').find('tr td').length).toBe(16)
    expect($('#target_squad').find('tr td').length).toBe(16)
  });
  
  it("", function(){
    
  });
});