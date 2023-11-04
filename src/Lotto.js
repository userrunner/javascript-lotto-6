class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.every(number => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if(new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복되지 않은 숫자여야 합니다.")
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
