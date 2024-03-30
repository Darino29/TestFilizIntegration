import React from "react";
import styles from './nosvaleurs.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Cat from "../../../../public/icons/cat-icon.svg";
import Plant from "../../../../public/icons/plant-icon.svg";

import Cof from "../../../../public/icons/coffee-icon.svg";

export const NosValeurs = (): JSX.Element => {
    return (
        <div id="nosvaleurs" className={`${styles.bg}`}>
            <div className={`${styles.features}`}>
                     <div>
                        <Typography variant="h2">Nos Valeurs</Typography>
                    </div> 
                    <br></br>
                <div className={`${styles.wrapper}`}>
                       
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={4}>
                            <img src={Cof} alt="cof" className={styles.icon} />
                            <Typography variant="h4">Passionné Café</Typography>
                            <p>Nous sommes passionnés par la qualité de notre café. De la culture des grains à la tasse, nous nous engageons à offrir une expérience de café inoubliable à nos clients.</p>
                            
                        </Grid>
                        <Grid item xs={4}>
                            <img src={Cat} alt="cat" className={styles.icon} />
                            <Typography variant="h4">Bien-être des Chats</Typography>
                            <Typography variant="body1">Nous nous soucions profondément du bien-être de nos amis félins. C'est pourquoi nous sélectionnons attentivement nos produits pour garantir leur santé et leur bonheur.</Typography>
                            
                        </Grid>
                        <Grid item xs={4}>
                            <img src={Plant} alt="plant" className={styles.icon} />
                            <Typography variant="h4">Engagement Environnemental</Typography>
                            <Typography variant="body1">Protéger l'environnement est au cœur de notre mission. Nous travaillons sans relâche pour réduire notre empreinte carbone et soutenir des pratiques durables à chaque étape de notre processus.</Typography>
                            
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        </div>
    );
};


