export function valida(input){
  const tipodeInput = input.dataset.tipo;
  if(validadores[tipodeInput]){
    validadores[tipodeInput](input);
  }

  if(input.validity.valid){
    input.parentElement.classList.remove('input-container--invalido')
    input.parentElement.querySelector('input-mensagem-erro').innerHTML = '';
  } else {
    input.parentElement.classList.add('input-container--invalido')
  }
}

const mensagensDeErro = {
  nome:{
    valueMissing: 'O campo nome não pdoe estar vazio'
  },
  email:{
    valueMissing: 'O campo de email não pode estar vazio',
    typeMismatch: 'O email digitado não é valido'
  },
  senha:{
    valueMissing: 'O campo de senha não pode estar vazio',
    patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
  },
  dataNascimento:{
    valueMissing: 'O campo de data de nasciemnto não pode estar vazio',
    customError: 'Você deve ser maior que 18 anos para se cadastrar'
  }

}

const validadores = {
  dataNascimento:input => validaDataNasciemnto(input)
}

function validaDataNasciemnto(input){
  const dataRecebida = new Date(input.value);
  let mensagem = '';

  if(!maiorQue18(dataRecebida)){
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar';
  }
  input.setCustomValidity(mensagem)
}

function maiorQue18(data){
  const dataAtual = new Date();
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataMais18 <= dataAtual;
}