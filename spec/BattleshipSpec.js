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
    
  it("should create a horizontal destroyer and put it in the position 0x0", function(){
    this.battle_ship.put_destroyer_at(0, 0, 'h');
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(0) img').attr('src')).toBe('images/h_destroyer_1.jpg');
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(1) img').attr('src')).toBe('images/h_destroyer_2.jpg');
  });

  it("should create a vertical destroyer and put it in the position 0x0", function(){
    this.battle_ship.put_destroyer_at(0, 0, 'v');
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(0) img').attr('src')).toBe('images/v_destroyer_1.jpg');
    expect(this.battle_ship.my_field.find('tr:eq(1) td:eq(0) img').attr('src')).toBe('images/v_destroyer_2.jpg');
  });

  it("should create a horizontal cruiser and put it in the position 0x0", function(){
    this.battle_ship.put_cruiser_at(0, 0, 'h');
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(0) img').attr('src')).toBe('images/h_cruiser_1.jpg');
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(1) img').attr('src')).toBe('images/h_cruiser_2.jpg');
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(2) img').attr('src')).toBe('images/h_cruiser_3.jpg');
  });
  
  it("should create a vertical cruiser and put it in the position 0x0", function(){
    this.battle_ship.put_cruiser_at(0, 0, 'v');
    expect(this.battle_ship.my_field.find('tr:eq(0) td:eq(0) img').attr('src')).toBe('images/v_cruiser_1.jpg');
    expect(this.battle_ship.my_field.find('tr:eq(1) td:eq(0) img').attr('src')).toBe('images/v_cruiser_2.jpg');
    expect(this.battle_ship.my_field.find('tr:eq(2) td:eq(0) img').attr('src')).toBe('images/v_cruiser_3.jpg');
  });


});