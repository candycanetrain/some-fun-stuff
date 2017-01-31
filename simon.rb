class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize(seq = [], sequence_length = 1, game_over = false)
    @seq = seq
    @sequence_length = sequence_length
    @game_over = game_over
  end

  def play
    until game_over
      take_turn
      system("clear")
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    unless game_over == true
      round_success_message
      @sequence_length = sequence_length + 1
    end

  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep 0.75
      system("clear")
      sleep 0.25
    end
  end

  def require_sequence
    puts "Input sequence"
    input = gets
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Round success!"
  end

  def game_over_message
    puts "Game over!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
