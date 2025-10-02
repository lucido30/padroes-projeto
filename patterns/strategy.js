class DiscountStrategy {
  apply(total) {
    throw new Error("Method apply() must be implemented");
  }
}

class NoDiscount extends DiscountStrategy {
  apply(total) {
    return total;
  }
}

class PercentageDiscount extends DiscountStrategy {
  constructor(percent) {
    super();
    this.percent = percent;
  }

  apply(total) {
    return total * (1 - this.percent);
  }
}

class Checkout {
  constructor(strategy) {
    this.strategy = strategy;
  }

  total(amount) {
    return this.strategy.apply(amount);
  }
}

if (require.main === module) {
  const cartTotal = 100;
  console.log(new Checkout(new NoDiscount()).total(cartTotal));
  console.log(new Checkout(new PercentageDiscount(0.2)).total(cartTotal));
}

module.exports = {
  DiscountStrategy,
  NoDiscount,
  PercentageDiscount,
  Checkout,
};
