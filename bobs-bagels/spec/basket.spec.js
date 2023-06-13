
import Basket from '../src/Basket.js';

class MockBagel {
  name;
}
describe('Basket tests', () => {
  let bagel, basket;
  beforeEach(() => {
    bagel = new MockBagel();
    basket = new Basket();
  });

  afterEach(() => {
    basket = undefined;
    bagel = undefined;
  });

  it('Bagel object with Big Bagel name will be added to the array of bagels', () => {
    //arrange
    bagel.name = 'Big Bagel';
    
    //act
    basket.addBagel(bagel);
    console.log(bagel.name);
    
    //assert
    expect(basket.basketBagels.length).toBe(1);
  })
});
