# Coodesh Desafio

Desafio utilizando Cypress para automação de teste em uma plataforma de venda

## Dev Dependencies
```bash
cypress: 10.8.0

@faker-js/faker: 7.5.0

Visual-Studio-Code



```
## Instalação
Dev Dependencies

    
```bash
  cd Projeto
  npm install cypress --save-dev
  npm install @faker-js/faker --save-dev
  
```
    
## Rodando os testes

Para rodar os testes, rode o seguinte comando, ou substituindo chrome por algum outro
navegador de preferência.

```bash
  npx cypress run -b chrome
```


## Autor

- [@Alanbahia](https://github.com/Alanbahia)

## Ferramentas de Teste
Vantagens e desvantagens

    
```bash
Ghost Inspector vantagens -> Por ser um gravador/macro não necessita de tanto conhecimento tecnico para uso
Ghost Inspector desvantagens -> Pago, não muito popular/reconhecido no brasil, não tem muita
precisão nos testes e versatibilidade quanto os outros

Selenium vantagens -> grande popularidade no brasil e no mundo, multi browser, multi linguagens (ruby, python, java), grande precisão e
versatibilidade da automação
Selenium desvantagens -> Possui uma curva de aprendizado maior comparados aos outros, não é muito visual comparado ao cypress por exemplo

Robot Framework vantagens -> Por ser uma ferramenta guiada a keywords, se torna um pouco mais fácil de uma pessoa com o conhecimento
não mt tecnico de entender o que está passando, pode ser integrade com o cucumber e o gherkin facilmente, possui uma boa curva de aprendizado,
multi browser e linguagem
Robot Framework Desvantagens -> Um pouco menos popular que ferramentas como Selenium e Cypress, um pouco mais trabalhoso

Cypress vantagens -> excelente curva de aprendizado, muito visual, tanto na execução quanto na escrita de testes, configuração e comandos mais simples, multi browser,
excelente desempenho
Cypress desvantagens -> Possui a limitação de poder usar apenas o javascript para a escrita dos códigos e não possui mobile
  



