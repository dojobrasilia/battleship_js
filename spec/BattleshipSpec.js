describe("Battleship", function() {
  
  it("should create 4x4 table", function() {
    var battle_ship = new BattleShip(4,4);
    expect(battle_ship.my_field.find('tr td').length).toBe(16);
    expect(battle_ship.target_field.find('tr td').length).toBe(16);
  });
  
  it("", function(){
    
  });
});