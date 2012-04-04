describe("Battleship", function() {
  
  beforeEach(function(){
    this.battle_ship = new BattleShip(4,4);
  });
  
  it("should create 4x4 table", function() {
    expect(this.battle_ship.my_field.find('tr td').length).toBe(16);
    expect(this.battle_ship.target_field.find('tr td').length).toBe(16);
  });
  
  it("should create 2x6 table", function() {
    var battle_ship = new BattleShip(2,6);
    expect(battle_ship.my_field.find('tr td').length).toBe(12);
    expect(battle_ship.target_field.find('tr td').length).toBe(12);
  });
    
  it("should create big boat and put it in the position 0x0", function(){
    this.battle_ship.put_destroyer_at(0,0);
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(0)').text()).toNotBe("");
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(1)').text()).toNotBe("");
  });

});