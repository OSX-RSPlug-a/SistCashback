/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './styleD.css';

import logo from './../../assets/logo.png';


export default function MainPg() {
    return (
        <>
        <div>	
			<header>
			    <nav>
				    <ul className="menu">
                        <li className="logo"><img className="imgH" src={logo} alt="Logo" /></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Dashboard">dashboard</i><br/>Dashboard</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Calendário">date_range</i><br/>Calendario</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Inbox">inbox</i><br/>Inbox</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Workflow">ballot</i><br/>Workflow</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Acompanhamento">show_chart</i><br/>Acompanhamento</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Relatórios">pie_chart</i><br/>Relatórios</a></li>
                        <li className="item"><a href="#openModal"><i className="material-icons" title="Menu/User">apps</i><br/>Menu/User</a></li>
				    </ul>
			    </nav>
			</header>
		</div>

        <section id="Designs" className="Designs">
            <div className="container">
                            
                <div className="cards">
                    <div id="templates">
                    <i className="material-icons" title="Compras">add_shopping_cart</i><br/>
                            <br/>Add Compras
                    </div>
                    <p><a id="hw_button" href="./../ListCompras" >Adicionar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                    <i className="material-icons" title="Listar">view_list</i><br/>
                        <br/>Listar compras
                    </div>
                    <p><a id="hw_button" href="./../ListCompras" >Mostrar</a></p>
                </div>

                <div className="cards">
                    <div id="templates">
                    <i className="material-icons" title="Rendimento">assessment</i><br/>
                        <br/>Ver rendimento individual
                    </div>
                    <p><a id="hw_button" href="#top" >Mostrar</a></p>
                    <br/>
                </div>

            </div>

            <div id="openModal" className="modalDialog">
                <div>

                    <a href="#close" title="Close" className="close">X</a>

                        <ul>
                            <li><a href="#top"><i class="material-icons">add_circle</i>Infomações pessoais</a></li>
                            <li><a href="#top"><i class="material-icons">chrome_reader_mode</i>Codigo de conduta</a></li>
                            <li><a href="#top"><i class="material-icons">add_circle</i>Treinamentos</a></li>
                            <li><a href="#top"><i class="material-icons">account_box</i>Login</a></li>
                        </ul>
                </div>
            </div>

            <div id="openModal2" className="modalDialog2">
                <div>

                    <a href="#close2" title="Close" className="close2">X</a>
                    <p>hello from a component</p>

                </div>
            </div>

        </section>

		<footer>
            <div className="btnList text-center">
        
                <div id="time"><p id="footerp"> Copyright Grupo Boticario 2019. All Rights Reserved.</p></div>

            </div>
        </footer>  

        </>
    )
}