# Plataforma de Agendamento de Consultas Médicas



## Descrição

Este projeto é uma plataforma moderna para gestão de consultas médicas e pacientes, com funcionalidades como:
- **Agendamento de consultas** integrado a um **calendário dinâmico**.
- Dashboard intuitivo para gerenciamento de pacientes.
- Design moderno e responsivo utilizando **ShadCN UI**.
- Backend robusto com **Firebase**, garantindo segurança e escalabilidade.

Desenvolvida com **React** e **Vite**, a plataforma prioriza desempenho e uma experiência fluida, sendo ideal para clínicas e consultórios que desejam modernizar seus processos.

---

## Funcionalidades
- **Agendamento Rápido**: Sistema simples e direto para marcar consultas.
- **Validação de Dados**: Campos como CPF e horários validados dinamicamente.
- **Dashboard Interativo**: Acompanhe consultas, pacientes e estatísticas.
- **Armazenamento Seguro**: Dados armazenados com Firebase e Supabase.
- **Responsividade Total**: Compatível com dispositivos móveis e desktops.

---

## Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [ShadCN UI](https://shadcn.dev/)

### Backend
- [Firebase](https://firebase.google.com/): Autenticação e armazenamento de dados.
- [Supabase](https://supabase.io/): Banco de dados SQL com suporte em tempo real.

### Outras Ferramentas
- [Node.js](https://nodejs.org/): Ambiente de execução do JavaScript.
- [TailwindCSS](https://tailwindcss.com/): Para estilização eficiente e moderna.

---

## Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas no seu computador:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- Um editor de código como [VSCode](https://code.visualstudio.com/).

---

## Passo a Passo para Instalação e Execução

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Acesse o Diretório do Projeto

```bash
cd nome-do-repositorio
```

### 3. Instale as Dependências

Primeiro, instale os pacotes principais do projeto:
```bash
npm install
```

Depois, instale quaisquer dependências específicas:
```bash
npm i
```

### 4. Configure o Firebase e o Supabase

1. Crie um projeto no [Firebase](https://firebase.google.com/).
2. Configure as credenciais no arquivo `.env` no diretório raiz do projeto:

```env
VITE_FIREBASE_API_KEY=seu-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-auth-domain
VITE_FIREBASE_PROJECT_ID=seu-project-id

```

### 5. Execute o Servidor de Desenvolvimento

Inicie o servidor local com o comando:
```bash
npm run dev
```

O projeto estará acessível em:
```
http://localhost:5173
```

---

## Estrutura do Projeto

```
├── src
│   ├── components  // Componentes reutilizáveis
│   ├── pages       // Páginas principais da aplicação
│   ├── services    // Configurações do Firebase e Supabase
│   ├── styles      // Estilização com TailwindCSS
│   └── utils       // Funções auxiliares
├── public          // Recursos estáticos
├── .env            // Variáveis de ambiente
├── package.json    // Gerenciador de dependências
└── vite.config.js  // Configuração do Vite
```

---

## Contribuição

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das alterações:
   ```bash
   git commit -m 'Minha nova feature'
   ```
4. Envie as alterações para sua branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request para revisão.

---

## Licença

Pode usar avonts kkkk

---

## Contato

Gostou do projeto? Entre em contato!
- **Nome:** João Pedro
- **LinkedIn:** https://www.linkedin.com/in/keymius/
- **Email:** jpcicolo@gmail.com

**Vamos revolucionar o gerenciamento de clínicas juntos!** 🚀
