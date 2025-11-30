# 🎓 Academic Planner - Univille LMS V2.0

> Plataforma moderna para gestão de atividades escolares, integrando professores e alunos em um ambiente colaborativo e responsivo.

![Status](https://img.shields.io/badge/Status-Concluído-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Univille](https://img.shields.io/badge/Univille-Desenvolvimento%20Web-008542)

## 📖 Sobre o Projeto

O **Academic Planner** é uma aplicação web desenvolvida como Trabalho Final da disciplina de Desenvolvimento Web da Univille. O objetivo foi criar um sistema que simulasse um LMS (Learning Management System), permitindo a criação de turmas, distribuição de materiais, entrega de atividades e atribuição de notas.

A aplicação utiliza uma arquitetura híbrida, combinando a forte segurança do **Firebase** (Auth, Firestore, Storage) para o gerenciamento de dados e estados, com um servidor **Node.js/Express** para servir a aplicação e prover APIs de monitoramento.

## 🚀 Funcionalidades

### 👨‍🏫 Para Professores
*   **Gestão de Turmas:** Criação de novas turmas com geração automática de códigos de convite únicos.
*   **Criação de Conteúdo:** Postagem de materiais de estudo ou atividades avaliativas.
*   **Upload de Arquivos:** Anexo de PDFs, Imagens ou outros arquivos via Firebase Storage.
*   **Sistema de Correção:** Visualização das entregas dos alunos, atribuição de notas e feedback individual.
*   **Gestão de Alunos:** Visualização e remoção de alunos das turmas.

### 👨‍🎓 Para Alunos
*   **Entrada em Turmas:** Acesso simplificado via código da turma.
*   **Dashboard Personalizado:** Visualização apenas das atividades pertinentes às suas turmas.
*   **Entrega de Atividades:** Envio de respostas em texto e upload de arquivos.
*   **Feedback:** Visualização de notas e comentários do professor em tempo real.

### 🔐 Segurança & Infraestrutura
*   **Autenticação:** Login via E-mail/Senha e Google (Firebase Auth).
*   **Controle de Acesso:** Separação estrita de permissões entre Alunos e Professores.
*   **API Backend:** Rota `/api/status` para monitoramento de saúde do servidor.

## 🛠️ Tecnologias Utilizadas

*   **Front-end:** HTML5, JavaScript (ES6 Modules), Tailwind CSS (CDN).
*   **Back-end:** Node.js, Express.
*   **Banco de Dados:** Google Cloud Firestore (NoSQL).
*   **Armazenamento:** Google Cloud Storage.
*   **Autenticação:** Firebase Authentication.

## 👥 Desenvolvedores (Grupo 09)

*   **Felipe Ortiz**
*   **Matheus Rocha**
*   **Tiago Santos**

---
Desenvolvido para a disciplina de Desenvolvimento Web - Univille 2025.
