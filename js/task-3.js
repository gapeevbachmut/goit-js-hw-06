'use strict';

// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padStart(str) {
    //console.log(this.#value.padStart(this.#value.length + 1, str));

    return (this.#value = this.#value.padStart(this.#value.length + 1, str));
  }
  padEnd(str) {
    //console.log(this.#value.padEnd(this.#value.length + 1, str));
    return (this.#value = this.#value.padEnd(this.#value.length + 1, str));
  }

  padBoth(str) {
    //обидва одночасно
    // console.log(this.#value); //  ^.^ - ++++++++!!!
    // console.log(str + this.#value + str);
    //console.log(typeof this.#value);

    return (this.#value = str + this.#value + str);
  }
}

const builder = new StringBuilder('.');

console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
