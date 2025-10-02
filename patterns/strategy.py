"""Strategy example: choose among different discount algorithms."""

class DiscountStrategy:
    def apply(self, total: float) -> float:
        raise NotImplementedError

class NoDiscount(DiscountStrategy):
    def apply(self, total: float) -> float:
        return total

class PercentageDiscount(DiscountStrategy):
    def __init__(self, percent: float):
        self.percent = percent

    def apply(self, total: float) -> float:
        return total * (1 - self.percent)

class Checkout:
    # Strategy is injected, so the algorithm can change at runtime.
    def __init__(self, strategy: DiscountStrategy):
        self.strategy = strategy

    def total(self, amount: float) -> float:
        return self.strategy.apply(amount)

if __name__ == "__main__":
    cart_total = 100
    print(Checkout(NoDiscount()).total(cart_total))
    print(Checkout(PercentageDiscount(0.2)).total(cart_total))
