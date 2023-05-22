import React, { useState } from 'react'
import Layout from '../components/layouts/Main'
import '../src/app/globals.css'
import styles from './dashboard.module.css'
import Modal from '../components/layouts/Utilities/modal'
import Tabla from '../components/layouts/Utilities/Tabla'

export default function about() {
  const [modalTabla, setModalTabla] = useState(false);
  const [data, setData] = useState([
    {"Client": "Name of the Client C","Project #":123, "Project Name" :"C", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5 },
    {"Client": "Name of the Client B","Project #":456, "Project Name" :"B", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5 },
    {"Client": "Name of the Client A","Project #":789, "Project Name" :"A", "Project POC":"JonDoe@mail.com","Project Status":"Completed", "# Active Employees":0 , "# Inactive Employees":5 }
  ])
  return (
    <Layout title={'Next JS | Dashboard'} description={'Dashboard created with next js and react'} > 
    <div className={styles.grid}>
      <div className={styles.col2}>
        <div className={styles.container}>
          <h1>Summary</h1>
        </div>
      </div>
      <div className={styles.col1} >
        <div className={styles.container}>
            <h1>Notifications</h1>
            <div className={styles.collection}>
              <p className={styles.collectionItem}>Pending Messages <span className={styles.badgeNew}>5</span></p>
              <p className={styles.collectionItem}>Number of Incidents <span className={styles.badgeDanger}>1</span></p>              
              <p className={styles.collectionItem}>Pending Remediation <span className={styles.badgeWarn}>3</span></p>
            </div>
            <h2>Ejemplo de parrafo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ipsam at voluptatem animi? Cupiditate nisi, maiores est impedit dolorem, odio iusto ut unde enim nam qui aliquid molestias itaque et.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam blanditiis nostrum illo quis numquam, temporibus suscipit officiis veritatis dolorum ab id dicta ut. Culpa ullam vel repellat accusantium sunt.</p>
        </div>
      </div>
      <div className={styles.col3}>
      <div className={styles.container}>
        <h1 className={styles.maximize}><span>Active Projects</span> <i className="bi bi-arrows-fullscreen" onClick={() => setModalTabla(true)}  ></i></h1>
          <Tabla data={data} setData={setData}/>
      </div>
      </div>
    </div>
      {(modalTabla) && <Modal modalHeader="Active Projects" setModal={setModalTabla} >
        <Tabla data={data} setData={setData} />
        </Modal>}
    </Layout>
  )
}
