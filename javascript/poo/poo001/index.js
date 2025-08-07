class CofreItau {
  constructor(nome) {
    this.nome = nome
    this.saldo = 0
  }

  depositar(value) {
    this.saldo += value
    console.log(`Você depositou ${value}R$ em ${this.nome}. Seu saldo atual é de ${this.saldo}R$`)
  }

  retirar(value) {
    if (this.saldo >= value) {
      this.saldo -= value
      console.log(`Você retirou ${value}R$ de ${this.nome}. seu saldo atual é de ${this.saldo}R$`)
    } else {
      console.error(`${this.nome} não tem ${value}R$ na conta. Seu saldo atual é de ${this.saldo}R$`)
    }
  }

  meuSaldo() {
    console.log(`Seu saldo atual é de ${this.saldo}R$`)
  }
}

class CofreNubank {
  constructor(name) {
    this.name = name
    this.saldo = 0
  }

  depositar(value) {
    this.saldo += value
    console.log(`Você depositou ${value}R$ em ${this.name}.`)
  }

  retirar(value) {
    if (this.saldo <= 1000) {
      console.log("Você não pode retirar nada quando está devendo mil ou mais")
    } else if (value > 1000 && this.saldo > 0) {
      console.log("Você não pode retirar valores acima de mil reais enquanto estiver devendo")
    } else {
      this.saldo -= value
      console.log(`Você retirou ${value}R$ de ${this.name}.`)
    }
  }

  verSaldo() {
    console.log(`Seu saldo atual é de ${this.saldo}R$.`)
  }
}