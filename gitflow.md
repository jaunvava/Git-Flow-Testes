# Guia rapido: comandos Git e Gitflow

Este documento resume os principais comandos do Git e o modelo Gitflow, com foco em quando usar e para que serve.

## Conceitos basicos do Git

- **Working tree**: arquivos locais que voce edita.
- **Staging area (index)**: area de preparo para o commit.
- **Repositorio local**: historico de commits no seu computador.
- **Repositorio remoto**: historico compartilhado (ex.: GitHub, GitLab).

## Comandos Git essenciais

### Configuracao e inicio

- `git config --global user.name "Seu Nome"`: define o nome do autor.
- `git config --global user.email "voce@email"`: define o email do autor.
- `git init`: cria um repositorio Git na pasta atual.
- `git clone <url>`: copia um repositorio remoto para o computador.

### Ciclo de trabalho (add/commit)

- `git status`: mostra o estado dos arquivos (modificados, staged, etc.).
- `git add <arquivo>`: envia um arquivo para a staging area.
- `git add .`: adiciona todas as mudancas da pasta atual.
- `git commit -m "mensagem"`: grava as mudancas no historico.
- `git commit --amend`: ajusta o ultimo commit (use com cuidado).

### Historico e comparacao

- `git log`: lista os commits.
- `git log --oneline --graph --decorate --all`: historico resumido e visual.
- `git diff`: mostra diferencas nao staged.
- `git diff --staged`: mostra diferencas staged.
- `git show <hash>`: exibe detalhes de um commit.

### Branches e navegacao

- `git branch`: lista branches locais.
- `git branch <nome>`: cria uma branch.
- `git switch <nome>`: troca de branch (recomendado).
- `git switch -c <nome>`: cria e troca para a nova branch.
- `git checkout <nome>`: troca de branch (legado, ainda muito usado).
- `git merge <branch>`: integra uma branch na atual.
- `git rebase <branch>`: reaplica commits sobre outra base.

### Sincronizacao com remoto

- `git remote -v`: lista remotos configurados.
- `git fetch`: baixa refs do remoto sem integrar.
- `git pull`: `fetch` + `merge` (ou `rebase`) na branch atual.
- `git push`: envia commits para o remoto.
- `git push -u origin <branch>`: define upstream para a branch.

### Correcoes e manutencao

- `git stash`: guarda mudancas locais temporariamente.
- `git stash pop`: recupera o stash e remove da lista.
- `git revert <hash>`: cria um commit que desfaz outro commit.
- `git reset --soft <hash>`: move o HEAD mantendo staging.
- `git reset --mixed <hash>`: move o HEAD e limpa staging.
- `git reset --hard <hash>`: descarta mudancas locais (use com cuidado).
- `git clean -fd`: remove arquivos nao rastreados (use com cuidado).

### Tags e releases

- `git tag`: lista tags.
- `git tag -a v1.0.0 -m "release"`: cria tag anotada.
- `git push origin --tags`: envia tags ao remoto.

## Gitflow (modelo de ramificacao)

O Gitflow organiza o desenvolvimento em branches com papeis claros.

### Branches principais

- **main (ou master)**: codigo em producao.
- **develop**: integracao de features prontas para o proximo release.

### Branches de suporte

- **feature/**: novas funcionalidades a partir de `develop`.
- **release/**: preparacao de release (estabilizacao, versao).
- **hotfix/**: correcoes urgentes a partir de `main`.

### Fluxo tipico

1. Criar uma `feature/` a partir de `develop`.
2. Finalizar a feature e fazer merge em `develop`.
3. Criar uma `release/` a partir de `develop`.
4. Ajustar bugs/versao e fazer merge em `main` e `develop`.
5. Se surgir bug critico em producao, criar `hotfix/` a partir de `main`.
6. Finalizar o hotfix e fazer merge em `main` e `develop`.

## Comandos Gitflow (extensao git-flow)

> A extensao `git-flow` adiciona atalhos para o modelo.

- `git flow init`: inicializa o Gitflow no repositorio.
- `git flow feature start <nome>`: cria branch de feature.
- `git flow feature finish <nome>`: finaliza feature (merge em develop).
- `git flow release start <versao>`: cria branch de release.
- `git flow release finish <versao>`: finaliza release (merge em main e develop, tag).
- `git flow hotfix start <versao>`: cria branch de hotfix.
- `git flow hotfix finish <versao>`: finaliza hotfix (merge em main e develop, tag).

## Quando usar Gitflow

- Projetos com releases planejados e ciclos claros.
- Times maiores, com varias features em paralelo.
- Necessidade de controle rigoroso entre `develop` e `main`.
