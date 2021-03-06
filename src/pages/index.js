import BackToTop from "@/components/BackToTop";
import ReactPlayer from 'react-player'
import React from "react";
import {Container, Link as MuiLink, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        //flexGrow: 1,
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper2: {
        //padding: theme.spacing(0),
        textAlign: 'center',
        //color: theme.palette.text.secondary,
    },
    adornated:{
        float: 'left',
        lineHeight: 0.7,
        fontSize: 55,
        color: '#333',
        border: 'solid #333',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
        marginRight: 5,
        marginBottom: -5,
    },
    cover: {
        width: 151,
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerWraper:{
        position: 'relative',
    },
    text: {
      textAlign: 'justify',
      maxWidth: 600,
    }
}));

export default function Home() {

    const classes = useStyles();

    return (
        <Container fixed>
            <Grid container className={classes.root} spacing={3} direction='row' justify='flex-start'>

                {/*<Grid*/}
                {/*    container*/}
                {/*    direction="column"*/}
                {/*    justifyContent="center"*/}
                {/*    alignItems="center"*/}
                {/*>*/}
                {/*  */}
                {/*    <Grid>*/}
                {/*        <BackToTop/>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}


                <Grid container spacing={3}>

                    <Grid item xs={12} sm={7} md={6} lg={6} xl={6} >
                        <p className={classes.text}>
                            <h2>??Qui??nes somos?</h2>
                            <span className={classes.adornated}>I</span>nconcerto es un colectivo interdisciplinario de artistas, soci??logos, comunicadores y gestores culturales
                            que crean espacios y canales para difundir y revalorizar la m??sica cl??sica en nuestra ??poca y lugar
                            a trav??s de proyectos que resignifican los protocolos que han situado a ??sta,
                            como un arte de y para una determinada clase social e intelectual.

                            La larga trayectoria que ha tenido desde el a??o 2012 con actividades art??sticas para los distintos p??blicos,
                            en particular con personas que no han tenido contacto con este tipo de arte,
                            han comprobado el potencial de la m??sica de provocar, despertar y reactivar afectos y reacciones ??nicas en las audiencias.

                            Por este motivo y comprendiendo la importancia que la m??sica cl??sica tiene en el desarrollo sensible de la sociedad
                            por sus caracter??sticas est??ticas, po??ticas &ensp; y filos??ficas; InConcerto busca llegar a los grupos de personas
                            que por razones sociales, culturales, geogr??ficas y etarias han sido hist??ricamente excluidas
                            desde nuevas formas de acercamiento que potencien a la m??sica cl??sica como una herramienta de inclusi??n social.
                            Raz??n por la cual, InConcerto ha realizado conciertos en distintos lugares tales como mercados, parques,
                            centros de rehabilitaci??n, Instituto de Hansen, c??rceles, casa de confianza, ancianatos, etc.
                        </p>
                        <p>
                            -InConcerto 2021-
                        </p>


                    </Grid>

                    <Grid item xs={12} sm={5} md={6} lg={6} xl={6}>
                        <BackToTop/>
                        <ReactPlayer
                            className={classes.playerWraper}
                            url='https://www.youtube.com/watch?v=s4E-riFpywY&t=12s'
                            width="100%"
                            height="80%"
                            playing={false}
                            controls={true}
                        />

                    </Grid>

                </Grid>

                <br/>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} spacing={3}>
                        <br/>
                        <Image
                            src="/logo1-inconcerto.png"
                            alt="InConcerto"
                            width={500}
                            height={390}
                        />

                    </Grid>

                    <Grid container xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Grid item>

                            <br/>
                            <p className={classes.text}>
                                <h2>Misi??n</h2>
                                Somos una plataforma cultural que fomenta la revalorizaci??n y el acceso a la m??sica cl??sica en nuestra ??poca y lugar, para incidir positivamente en nuestra sociedad. Garantizamos una experiencia transversal desde el campo art??stico y promovemos el acceso cultural interdisciplinario con la finalidad de contribuir al desarrollo cultural del pa??s
                                <h2>Visi??n</h2>
                                Buscamos ser un espacio cultural que transforme la vida de las personas a trav??s de experiencias significativas, asegurando amplitud en el acceso y una programaci??n de calidad que ponga en di??logo al arte.
                            </p>
                            <br/>
                            <br/>
                            <div style={{textAlign: 'center'}}>
                                <i>"M??sica Cl??sica en Espacios InUsuales ..."</i>
                            </div>

                        </Grid>

                    </Grid>

                </Grid>

                <br/>

                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

                        <h2>Plataforma</h2>
                        <p className={classes.text}>
                            El presente sistema web ayudar?? al personal administrativo en la organizaci??n de diferentes factores primordiales para la gesti??n de eventos organizados por Inconcerto,
                            tales como:
                            <ul>
                                <li>
                                    <strong>Gesti??n de artistas invitados:</strong> Los artistas son nacionales e internacionales por lo que se lleva el control de compras de pasajes, tiempos de llegada y salida, observaciones de alimentaci??n especiales, transporte, etc.
                                </li>
                                <li>
                                    <strong>Gesti??n de hospedajes:</strong> Se coordina donde se hospedan los artistas invitados teniendo en cuenta los horarios de entrada y salida de los artistas con el fin de optimizar los gastos.
                                </li>
                                <li>
                                    <strong>Gesti??n de log??stica:</strong> La fundaci??n cuenta con varios auspicios, entre los cuales est??n hostales y hoteles, alimentaci??n, transporte, entre otros.
                                </li>
                                <li>
                                    <strong>Gesti??n de espacios para conciertos:</strong> La fundaci??n est?? constantemente en b??squeda de espacios poco usuales para ofrecer conciertos. Se lleva un control de estos espacios para facilitar la organizaci??n de cada evento.
                                </li>
                                <li>
                                    <strong>Adicionalmente</strong>, la fundaci??n cuenta con una  <a href="https://www.inconcerto.org/inicio" ><b>p??gina web</b></a> con medios adecuados para la difusi??n de sus actividades para las personas interesadas en sus eventos.
                                </li>
                            </ul>

                        </p>
                        <br/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

                        <h2>Miembros del Equipo</h2>


                        <Grid container spacing={1}>

                            <Grid item xs={3}>
                                <Image
                                    src="/Alejandra-Pinto.jpg"
                                    alt="Alejandra"
                                    width={150}
                                    height={200}
                                />
                                <div style={{textAlign: 'center'}}>
                                    <p>
                                        <strong>Alejanda Pinto</strong><br/>
                                        Coordinadora General
                                    </p>
                                </div>

                            </Grid>
                            <Grid item xs={3}>
                                <Image
                                    src="/Simon-Gangotena.jpg"
                                    alt="InConcerto"
                                    width={150}
                                    height={200}
                                />
                                <div style={{textAlign: 'center'}}>
                                    <p>
                                        <strong>Sim??n Gangotena</strong><br/>
                                        Director Ejecutivo/Musical
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <Image
                                    src="/Carlerita1.jpeg"
                                    alt="InConcerto"
                                    width={150}
                                    height={200}
                                />
                                <div style={{textAlign: 'center'}}>
                                    <p>
                                        <strong>Carla Moncayo</strong><br/>
                                        Producci??n
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <Image
                                    src="/isadora.jpeg"
                                    alt="InConcerto"
                                    width={150}
                                    height={200}
                                />
                                <div style={{textAlign: 'center'}}>
                                    <p>
                                        <strong>Isadora Ponce</strong><br/>
                                        Directora Art??stica
                                    </p>
                                </div>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>

                <br/>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>


                        <div className={classes.paper2}>
                            <Link href='https://www.passline.com/eventos/sumate-a-musicaocupa' passHref >
                                <MuiLink>
                                    <Image
                                        src="/donaciones.png"
                                        alt="InConcerto"
                                        width={400}
                                        height={400}
                                    />
                                </MuiLink>
                            </Link>
                        </div>

                        <br/>
                        {/*<Paper className={classes.paper}>
                    <Link href='https://www.passline.com/eventos/sumate-a-musicaocupa' passHref >
                        <MuiLink>
                            <Image
                                src="/donaciones.png"
                                alt="InConcerto"
                                width={400}
                                height={400}
                            />
                        </MuiLink>
                    </Link>
                </Paper>*/}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

                        <Image
                            src="/creadores.jpg"
                            alt="InConcerto"
                            width={700}
                            height={500}
                        />

                    </Grid>
                </Grid>

                <br/>

                <BackToTop/>

            </Grid>
        </Container>

    );
}
