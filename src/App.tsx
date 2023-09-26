import "./global.css"
import styles from './App.module.css'

import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/eduardomms01.png",
      name: "Eduardo Marinho",
      role: "Desenvolvedor Full Stack",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal!" },
      { type: "paragraph", content: "Este é um post para integrar à minha aplicação em React :)" },
      { type: "paragraph", content: "Quer ver mais alguns de meus projetos? Clique no link abaixo!" },
      { type: "link", content: "Meu portfólio completo" }
    ],
    publishedAt: new Date("2023-09-21 10:33:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/kenzie-chrystian.png",
      name: "Chrystian Rodolfo",
      role: "Coordenador de Ensino",
    },
    content: [
      { type: "paragraph", content: "Salve!" },
      { type: "paragraph", content: "Projeto bem bacana!" },
      { type: "link", content: "Github Chrystian" }
    ],
    publishedAt: new Date("2022-08-11 23:12:00")
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}