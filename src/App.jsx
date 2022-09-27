import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>

          <Post author="Victor Massarenti" content="Exemplo de conteúdo bla bla bla bla" />
          <Post author="Massarenti Victor" content="Outro exemplo de conteúdo diferente do acima" />
          <Post author="Eduardo Massarenti" content="Mais um exemplo divergente dos exemplos acima" />

        </main>
      </div>

    </div>
  )
}

export default App
