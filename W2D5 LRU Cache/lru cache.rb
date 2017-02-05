require 'byebug'

class LRUCache
  def initialize(max)
    @store = Array.new()
    @count = 0
    @max = max
  end

  def count
    # returns number of elements currently in cache
    @store.count
  end

  def add(el)
    # byebug
    # adds element to cache according to LRU principle
    if @store.include?(el)
      @store.delete(el)
      @store.push(el)
    else
      if count >= @max
        @store.shift
      end
      @store.push(el)
    end
  end

  def show
    # shows the items in the cache, with the LRU item first
    @store.each do |item|
      p item
    end
  end

  private
  # helper methods go here!

end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

p johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})

johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
