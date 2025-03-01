Kassandra Spacek
2/28/25

With the assets given to you, remake the following Project : Advice Generator.

Reviewed by: Charles Orr
  your project looks good and responsive, one thing you could do if you wanted is use grid to over lap the box using
  "col-span-2 col-start-1 row-start-2 row-end-3" something like this one your button and
  "col-span-2 col-start-1 row-start-1 row-end-2" on your card which should allow them to overlap
  only other recommendation i have is moving your "fetchAdvice();" to a use effect
  useEffect(() =>
  {
    fetchAdvice();
  },[]);
  this will make sure its only called once on start and when your button is pressed
  aside from those small recomendations i think you did a great job :)
