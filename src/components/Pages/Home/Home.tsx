import styles from './home.module.css'
import React from "react"
import { NousContacterButton } from '../../Button/Button'
import Cat from '../../../../public/images/cat-hero-section.png'

export const Home = (): JSX.Element => {
    return (
        <>
            <div className={`${styles.bg}`}>
            <div className={`${styles.features}`}>
                <div className={`${styles.wrapper}`}>
                    <div>
                        <div className={`${styles.title}`}>
                            <h1>Bienvenue Chez Café Neko</h1>
                            <br></br>
                            <h2>L'endroit où le café rencontre les ronronnements</h2>
                
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                        <NousContacterButton/>
                    </div>
                    </div>
                    
                    <div>
                        <img src={Cat} alt="cat" />
                    </div>
               
                </div>
            </div>
            </div>
        </>
    )
}