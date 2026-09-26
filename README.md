# Gerador de Bio para LinkedIn

Aplicação web simples para criar textos profissionais para a bio do LinkedIn com base nas informações informadas pelo usuário, como profissão, experiência e diferenciais.

## Visão geral

Este projeto foi desenvolvido em HTML, CSS e JavaScript puro e usa a API da Groq para gerar uma bio em português do Brasil com diferentes tons de voz:

- Profissional
- Acessível
- Ousado

A interface coleta os dados do usuário e retorna uma bio pronta para publicação.

## Funcionalidades

- Formulário para preencher profissão e experiência
- Campo para adicionar conquistas ou diferenciais
- Escolha do tom de voz da bio
- Geração automática de texto usando IA
- Layout responsivo e moderno

## Estrutura do projeto

```text
projeto-gerador-de-perfil-linkedin/
├── index.html
├── src/
│   ├── index.js
│   └── style.css
└── README.md
```

## Como executar

### Opção 1: abrir diretamente no navegador

1. Abra o arquivo `index.html` no navegador.
2. Preencha os campos do formulário.
3. Clique em "Gerar bio profissional".

### Opção 2: usar um servidor local

Se preferir rodar em um ambiente mais próximo de um projeto web, pode usar um servidor local simples:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Configuração da API

O código faz uma requisição para a API da Groq em `src/index.js`. Para funcionar corretamente, é necessário configurar a chave da API no arquivo:

```javascript
const API_KEY = "SUA_CHAVE_AQUI";
```

> Importante: evite expor chaves sensíveis em repositórios públicos. Em projetos reais, a recomendação é usar variáveis de ambiente ou um backend para proteger a chave.

## Como usar

1. Informe sua profissão atual.
2. Descreva sua experiência profissional.
3. Adicione conquistas ou diferenciais, se houver.
4. Escolha o tom de voz desejado.
5. Clique em gerar.
6. Copie o texto gerado e ajuste conforme sua preferência.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API Groq

## Observações

Este projeto é um exemplo prático de uso de IA em front-end para geração de textos personalizados. Ele pode ser expandido para incluir:

- autenticação
- salvamento de bios
- download em TXT/MD
- mais estilos de tom de voz
- integração com outros modelos de linguagem

## Autor

Projeto desenvolvido para geração rápida de perfis profissionais para LinkedIn.
