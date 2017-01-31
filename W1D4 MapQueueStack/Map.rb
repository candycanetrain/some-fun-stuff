class Map
  attr_accessor :store

  def initialize
    @store = []
  end

  def assign(key,value)
    store.each_with_index do |pair, i|
      if pair[0] == key
        store[i][1] = value
        return pair
      end
    end
    store << [key,value]
  end
  def lookup(key)
    store.each do |pair|
      if pair[0] == key
        return pair
      end
    end
  end

  def remove(key)
    store.each_with_index do |pair, i|
      if pair[0] == key
        store.delete_at(i)
      end
    end
  end
  def show
    store
  end
end
