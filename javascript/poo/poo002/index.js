async function main() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  class Heroi {
    constructor(name, vida, damage) {
      this.name = name
      this.vida = vida
      this.damage = damage
      this.xp = 0
      this.xpNecessario = 20
      this.nivel = 0
    }

    status() {
      console.log(` ${this.name}: \n vida: ${this.vida} \n dano: ${this.damage} \n nivel: ${this.nivel} \n xp: ${this.xp} \n Xp Necessario: ${this.xpNecessario}`)
    }

    atacar(alvo) {
      try {
        if (alvo.vida <= 0) {
          console.log("Este personagem já esta morto")
        } else {
          const chanceErrar = Math.ceil(Math.random() * 15)
          const chanceCritico = Math.ceil(Math.random() * 14)
          const danoCritico = this.damage + Math.round(Math.random() * 15) + 3
          const numeroDaSorte = 1
          if (chanceErrar === numeroDaSorte) {
            console.log(`${this.name} errou o ataque`)
          } else if (chanceCritico === numeroDaSorte) {
            console.log(`${this.name} acertou um ataque crítico!`)
            alvo.vida -= danoCritico
            console.log(`${this.name} causou ${danoCritico} de dano no ${alvo.name}`)
            console.log(`A vida do ${alvo.name} agora é de ${alvo.vida}`)
          } else {
            alvo.vida -= this.damage
            console.log(`${this.name} causou ${this.damage} de dano no ${alvo.name}`)
            console.log(`A vida do ${alvo.name} agora é de ${alvo.vida}`)
          }
        }
      } catch (error) {
        console.error(`Erro: ${error}`)
      }
    }

    ganharXp(valor) {
      this.xp += valor
      while (this.xp >= this.xpNecessario) {
        this.xp -= this.xpNecessario
        this.nivel++
        this.xpNecessario = Math.round(this.xpNecessario * 1.5)
        this.vida += 10
        this.damage += 2
        console.log(`${this.name} Subiu de nivel. \nSeu nivel atual é ${this.nivel}`)
      }
    }
  }

  async function combate(vilao) {
    const vidaInicialVilao = vilao.vida
    const forcaVilao = vidaInicialVilao + vilao.damage * 5
    const vidaInicialHeroi = heroi.vida
    const forcaHeroi = vidaInicialHeroi + heroi.damage * 5
    const positive = (forcaVilao - forcaHeroi)
    let xpBase
    if (positive < 0) {
      xpBase = 1.5 * (positive * -1) + 10
    } else {
      xpBase = 1.5 * positive + 10
    }

    let xp = 0
    if (vilao.name === "Tutor") {
      xp = 20
    } else {
      xp = Math.max(5, Math.round(xpBase))
    }

    console.log("A batalha começou")
    await sleep(1800)
    console.log(`${heroi.name} vs ${vilao.name}`)
    await sleep(500)


    while (heroi.vida > 0 && vilao.vida > 0) {
      console.log("\n --- Novo turno ---")
      await sleep(1300)
      heroi.atacar(vilao)
      if (vilao.vida > 0) {
        await sleep(1900)
        vilao.atacar(heroi)
      }
      await sleep(1900)
      console.log("\n Status após a rodada")
      heroi.status()
      vilao.status()
      await sleep(4000)
      if (heroi.vida > 0 && vilao.vida > 0) {
        console.log("Proxima rodada vai iniciar")
        await sleep(3000)
      }
    }

    console.log("\n --- Fim do Combate ---");
    if (heroi.vida <= 0 && vilao.vida <= 0) {
      console.log("Empate! Ambos os personagens morreram.");
    } else if (heroi.vida <= 0) {
      console.log(`${vilao.name} venceu!`);
    } else if (vilao.vida <= 0) {
      console.log(`${heroi.name} venceu!`);
      console.log(`Você ganhou ${xp} de xp`)
      heroi.ganharXp(xp)
    }
  }



  const heroi = new Heroi("Neymar", 100, 10)
  const Tutor = new Heroi("Tutor", 80, 7)





  await combate(Tutor)
  heroi.status()



}

main()