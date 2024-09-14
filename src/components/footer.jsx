import React, { useState } from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="follow">
                    <h3 className='h3-footer'>siga-nos</h3>
                    <div className="social">
                    <a href="https://www.instagram.com/amanafazendavertical/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-facebook"></i></a>
                    </div>
                </div>
                <div className="logo-footer">
                    <Link to='/'>
                    <img src="../../img/logo/logo2_crop.png" alt="" srcset="" />
                    </Link>
                </div>
                <div className="contact-footer">
                    <h3 className='h3-footer'>nosso contacto</h3>
                    <p>Endereco: </p>
                    <p>telefone: (+55)99 999 99 99</p>
                    <p>E-mail: email@email.com</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
