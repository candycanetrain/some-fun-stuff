require 'byebug'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14){[]}
    @name1 = name1
    @name2 = name2
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0...@cups.length).each do |idx|
      if (idx != 6) && (idx != 13)
        @cups[idx] = [:stone, :stone, :stone, :stone]
      end
    end
  end

  def valid_move?(start_pos)
    if start_pos < 1 || start_pos > 14
      raise "Invalid starting cup"
    end
    raise "Invalid starting cup" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    i = start_pos + 1

    opponent_cup = nil
    if current_player_name == @name1
      opponent_cup = 13
    else
      opponent_cup = 6
    end

    until stones.empty?
      i = i%14
      @cups[i] << stones.pop unless i == opponent_cup
      i += 1
    end
    render
    next_turn(i - 1)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns

    if ending_cup_idx == 6 || ending_cup_idx == 13
      return :prompt
    elsif @cups[ending_cup_idx].count == 1
      return :switch
    elsif @cups[ending_cup_idx].count > 1
      return ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    first_side = @cups[0..5].all? do |cup|
      cup.empty?
    end
    second_side = @cups[7..12].all? do |cup|
      cup.empty?
    end
    second_side || first_side
  end

  def winner
    case @cups[6] <=> @cups[13]
    when -1
      return @name2
    when 0
      return :draw
    when 1
      return @name1
    end
  end
end
