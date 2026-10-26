# ⏱️ Chronos Pomodoro

Cronômetro para organizar qualquer tarefa com o **método Pomodoro**: períodos de foco intercalados com pausas curtas e longas, com tempos configuráveis e histórico de uso.

🔗 **Acesse:** [chronos-pomodoro-gamma.vercel.app](https://chronos-pomodoro-gamma.vercel.app)

---

## Como funciona

Por padrão, o método usa:

| Etapa | Duração | Indicador |
| --- | --- | --- |
| Foco | 25 min | 🟡 amarelo |
| Descanso curto | 5 min | 🟢 verde |
| Descanso longo | 15 min | 🔵 azul |

As etapas seguem um ciclo de 8 tempos, em 2 blocos:

```
Foco → Descanso curto → Foco → Descanso curto
Foco → Descanso curto → Foco → Descanso longo
```

Cada etapa começa ao clicar no botão **play**. Depois do descanso longo, o ciclo recomeça.

## Funcionalidades

- **Tempos configuráveis:** pelo botão de configurações (⚙️), é possível definir a duração de foco, descanso curto e descanso longo.
- **Indicação visual do ciclo:** um círculo colorido mostra o tipo de cada etapa (foco, descanso curto ou longo).
- **Histórico de uso:** todas as sessões ficam salvas no próprio navegador e podem ser consultadas pelo botão de histórico (🕒), sem necessidade de cadastro.

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- ESLint
- Deploy na [Vercel](https://vercel.com/)

## Como rodar localmente

```bash
git clone https://github.com/Talagruste/chronos-pomodoro.git
cd chronos-pomodoro
npm install
npm run dev
```

---

Desenvolvido por **Arthur Barros** · [GitHub](https://github.com/Talagruste)
