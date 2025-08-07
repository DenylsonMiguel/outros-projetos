
#primeiro numero

num1 = float(input("Escolha um numero\n"))

#qual a operação

operacao = input("escolha entre (+, -, /, *)")

#caso tenha escrevido algo errado

while operacao not in ["+", "-", "/", "*"]:
  operacao = input("escolha entre (+, -, /, *)")
  
#segundo numero

num2 = float(input("escolha outro numero\n"))

#Encontra o restado

if (operacao in "+"):
  resposta = num1 + num2
elif (operacao in "-"):
  resposta = num1 - num2
elif (operacao in "*"):
  resposta = num1 * num2
else:
  resposta = num1 / num2
  
#mostra o resultado ao usuario

print(resposta)