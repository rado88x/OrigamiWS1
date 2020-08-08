import React from 'react';
import Header from "./components/header"
import Aside from "./components/aside"
import styles from "./app.module.css"
import './app.module.css'
import Origamis from "./components/origamis"

const App = () => {
  return (
    <div className={styles.app}>
      <Header></Header>
      <div className={styles.container}>
        <Aside></Aside>
        <Origamis></Origamis>
      </div>

    </div>
  )
}

export default App;
