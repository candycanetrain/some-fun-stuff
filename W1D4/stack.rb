class Stack
  attr_accessor :ivar
  def initialize
    @ivar = []
  end

  def add(el)
    ivar << el# adds an element to the stack
  end

  def remove
    ivar.pop# removes one element from the stack
  end

  def show
    ivar# return a copy of the stack
  end
end
