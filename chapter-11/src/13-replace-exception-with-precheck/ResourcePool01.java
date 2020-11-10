public ResourcePool get() {
  Resource result;

  try {
    result = avaliable.pop()
    allocated.add(result);
  } catch (NoSuchElementException e) {
    result = Resource.create();
    allocated.add(result)
  }

  return result;
}

private Deque<Resource> avaliable;
private List<Resource> allocated;