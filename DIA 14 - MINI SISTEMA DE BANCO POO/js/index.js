class Cliente {
  constructor(nome, cpf) {
    this.nome = nome
    this.cpf = cpf
    this.contas = []
  }

  adicionarConta(conta) {
    this.contas.push(conta)
  }
}


class Conta {
  constructor(cliente, numero) {
    if (this.constructor === Conta) {
      throw new Error("Conta não pode ser instanciada diretamente")
    }

    this._saldo = 0
    this.cliente = cliente
    this.numero = numero
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor
    } else {
      console.log("Depósito inválido")
    }
  }

  sacar(valor) {
    throw new Error("Método sacar deve ser implementado")
  }

  getSaldo() {
    return this._saldo
  }
}


class ContaCorrente extends Conta {
  sacar(valor) {
    const taxa = 2
    const valorTotal = valor + taxa

    if (valor > 0 && valorTotal <= this._saldo) {
      this._saldo -= valorTotal
    } else {
      console.log("Saque inválido (corrente)")
    }
  }
}



class ContaPoupanca extends Conta {
  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor
    } else {
      console.log("Saque inválido (poupança)")
    }
  }
}



class Banco {
  constructor(nome) {
    this.nome = nome
    this.clientes = []
    this.contas = []
  }

  criarCliente(nome, cpf) {
    const cliente = new Cliente(nome, cpf)
    this.clientes.push(cliente)
    return cliente
  }

  criarConta(tipo, cliente, numero) {
    let conta

    if (tipo === "corrente") {
      conta = new ContaCorrente(cliente, numero)
    } else if (tipo === "poupanca") {
      conta = new ContaPoupanca(cliente, numero)
    }

    this.contas.push(conta)
    cliente.adicionarConta(conta)

    return conta
  }

  transferir(contaOrigem, contaDestino, valor) {
    if (!contaDestino) {
      console.log("Conta destino não existe")
      return
    }

    if (contaOrigem === contaDestino) {
      console.log("Não pode transferir para mesma conta")
      return
    }

    if (valor <= 0) {
      console.log("Valor inválido")
      return
    }

    if (contaOrigem.getSaldo() < valor) {
      console.log("Saldo insuficiente")
      return
    }

    contaOrigem.sacar(valor)
    contaDestino.depositar(valor)
  }
}



const banco = new Banco("Meu Banco")

const cliente1 = banco.criarCliente("Bruno", "123")
const cliente2 = banco.criarCliente("Ana", "456")

const conta1 = banco.criarConta("corrente", cliente1, 1)
const conta2 = banco.criarConta("poupanca", cliente2, 2)

conta1.depositar(500)

banco.transferir(conta1, conta2, 200)

console.log(conta1.getSaldo()) // 298 (taxa)
console.log(conta2.getSaldo()) // 200