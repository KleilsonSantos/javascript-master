let funcionario = 'junior'
switch ('junior') {
    case 'junior':
        console.log('Funcionario: ', funcionario, ', salário baixo')
        break;
    case 'pleno':
        console.log('Funcionario: ', funcionario, ', salário médio')
        break;
    case 'senior':
        console.log('Funcionario: ', funcionario, ', salário alto')
        break;
    default:
        break;
}