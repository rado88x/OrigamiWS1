import React from "react"
import Link from "../link"
import styles from "./index.module.css"
const Aside = () =>{
    return(
        <aside className={styles.container}>
            <Link href = "#" title= "Going to Aside1" type="aside" />
            <Link href = "#" title= "Going to Aside2" type="aside" />
            <Link href = "#" title= "Going to Aside3" type="aside" />
            <Link href = "#" title= "Going to Aside4" type="aside" />
            <Link href = "#" title= "Going to Aside5" type="aside" />
            <Link href = "#" title= "Going to Aside6" type="aside" />
            </aside>
    )
}

export default Aside