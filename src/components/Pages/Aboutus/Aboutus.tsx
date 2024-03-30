import styles from './aboutus.module.css'
import React from "react"
import Coffee from '../../../../public/images/image-about-us.png'

export const Aboutus = (): JSX.Element => {
    return (
        <>
            <div className={`${styles.bg}`}>
            <div className={`${styles.features}`}>
                <div className={`${styles.wrapper}`}>
                    <div>
                        <img src={Coffee} alt="coffee" />
                    </div>
                    <div>
                        <div className={`${styles.title}`}>
                            <h1>Qui sommes-nous ?</h1>
                            <div className={`${styles.para}`}>
                            <p>L'endroit où le café rencontre les ronronnements</p>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            
                
                        </div>
                        
                    </div>
                    
                    
               
                </div>
            </div>
            </div>
        </>
    )
}