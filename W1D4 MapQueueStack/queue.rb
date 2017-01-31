class Queue
  attr_accessor :ivar
  def initialize
    @ivar = []
  end
  def enqueue(el)
    ivar.push(el)
  end
  def dequeue
    ivar.shift
  end
  def show
    ivar
  end
end
