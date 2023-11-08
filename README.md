# Desafio Técnico

Leia as questões abaixo e faça a resolução na linguagem que
entender ser a mais adequada
1) A ModalGR possui um cofre eletrônico que precisa estar protegido por 3 senhas, sendo
essas criptografadas e armazenadas numa base de dados SQL. Cada uma dessas senhas deve
possuir uma regra/método de criptografia distinta, mas ambas devem utilizar uma única
chave secreta. Para isso, você foi escolhido para criar o sistema de criptografia dessas senhas.
Chave secreta:
#modalGR#GPTW#top#maiorEmpresaTecnologia#baixadaSantista
Observação: Codificar apenas a parte responsável pela criptografia das senhas, sem a
necessidade da codificação de inclusão na base SQL.
2) A ModalGR possui um arquivo texto contendo o nome completo, e-mail e data de
nascimento de seus consultores, separados por pipeline (|). O time de RH deseja que todo
início de cada mês seja gerado um novo arquivo texto com apenas os dados dos
aniversariantes do mês corrente, para assim, enviarem uma mensagem personalizada de
felicitações. Você foi escolhido para criar uma solução que atenda esses quesitos.
3) A ModalGR criará um programa de empréstimo para os colaboradores que possuem tempo
de casa superior a 5 anos. O colaborador poderá simular um empréstimo de até 2 vezes o valor
de seu respectivo salário, desde que esse valor seja múltiplo de 2. Esse programa dará a
possibilidade de retirada em dinheiro vivo, de acordo com as seguintes opções:
➢ Notas de maior valor: considerando primeiramente as notas de 100 e 50 reais, e em
seguida, as inferiores;
➢ Notas de menor valor: considerando as notas de 20, 10, 5 e 2 reais.
➢ Notas meio a meio: metade do valor em notas maiores e a outra metade em notas
menores.
Essas opções deverão ser exibidas ao colaborador, para assim, realizar a escolha de acordo com
sua necessidade.
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução!
A ideia é ter os seguintes campos para inserção: do nome do colaborador, data de admissão,
salário atual, valor de empréstimo, e em seguida, exibir as opções de retirada, por exemplo:
Valor empréstimo: 8.550 reais
Notas de maior valor:
➢ 85 x 100 reais;
➢ 1 x 50 reais.
Notas de menor valor:
➢ 427 x 20 reais;
➢ 1 x 10 reais.
Notas meio a meio:
4.275 reais em notas de maior valor:
➢ 42 x 100 reais;
➢ 1 x 50 reais;
➢ 1 x 20 reais;
➢ 1 x 5 reais.
4.275 reais em notas de menor valor:
➢ 213 x 20 reais;
➢ 1 x 10 reais;
➢ 1 x 5 reais.
Observações:
➢ Caso o colaborador não se enquadre nos requisitos mínimos de adesão ao programa
de empréstimo, exiba a mensagem: Agradecemos seu interesse, mas você não atende
os requisitos mínimos do programa.
➢ Caso o colaborador insira um valor de empréstimo que não seja múltiplo de 2, exiba a
mensagem: Insira um valor válido!
