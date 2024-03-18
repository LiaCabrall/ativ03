const prompt = require('prompt-sync')();

function verificarSaldo(saldo) {

  if (saldo > 0) {

    console.log("Saldo positivo");

  } else {

    console.log("Saldo negativo");

  }

}

function realizarSaque(saldoAtual, valorSaque) {

  if (valorSaque <= saldoAtual) {

    saldoAtual -= valorSaque;

    console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);

  } else {

    console.log("Saldo insuficiente");

  }

}


function realizarDeposito(saldoAtual, valorDeposito) {

  saldoAtual += valorDeposito;

  console.log(`Deposito realizado com sucesso. Novo saldo: R$${saldoAtual}`);

}

function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

  if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {

    saldoOrigem -= valorTransferencia;

    saldoDestino += valorTransferencia;

    console.log("Transferencia realizada com sucesso");

  } else if (valorTransferencia > saldoOrigem) {

    console.log("Saldo insuficiente para transferencia");

  } else {

    console.log("Valor excede o limite de transferencia");

  }

}

function checarChequeEspecial(saldo) {

  if (saldo < 0) {

    console.log("Dentro do limite do cheque especial");

  } else {

    console.log("Fora do limite do cheque especial");

  }

}
function atualizarCadastro(cadastroAtivo, saldo) {

  if (cadastroAtivo) {

    if (saldo > 0) {

      console.log("Cadastro ativo e saldo positivo");

    } else {

      console.log("Cadastro ativo mas precisa regularizar saldo");

    }

  } else {

    console.log("Por favor, atualize seu cadastro");

  }

}


function avaliarCredito(saldo, historicoCredito, rendaMensal) {

  if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {

    console.log("Credito aprovado");

  } else {

    console.log("Credito negado");

  }

}

  console.log("1 - Verificar Saldo");
  console.log("2 - Realizar Saque");
  console.log("3 - Realizar Deposito");
  console.log("4 - Realizar Transferencia");
  console.log("5 - Checar Cheque Especial");
  console.log("6 - Atualizar Cadastro");
  console.log("7 - Avaliar Credito");

  let saldo = 1600;
  let saldoDestino = 2500;
  let limiteTransferencia = 700;
  let cadastroAtivo = true;
  let historicoCredito = true;
  let rendaMensal = 4000;

  
  let opcao = prompt("Escolha sua opçao : ")
  switch(opcao){
    case '1':
      verificarSaldo(saldo)
    break
  
    case '2':
      realizarSaque(saldo, 200)
    break
  
    case '3':
      realizarDeposito(saldo, 500)
    break
  
    case '4':
      realizarTransferencia(saldo, saldoDestino, 200, limiteTransferencia)
    break
  
    case '5':
      checarChequeEspecial(saldo)
    break
  
    case '6':
      atualizarCadastro(cadastroAtivo, saldo)
    break
  
    case '7':
      avaliarCredito(saldo, historicoCredito, rendaMensal)
    break
  
    default:
      console.log("Opcao invalida!");
  }
  



