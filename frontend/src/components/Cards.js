import React from 'react'
import CardItem from './cardItem';

import './Cards.css'

function Cards() {
    return (
        <div className='cards' id="end">
            <h1>Criadores da empresa</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/Nicolas.jpeg"
                            text='Nickolas Alexandre, reponsavel por desenvolver o back-end'
                            label='Desenvolvedor back-end'
                            // path='#'
                        />
                        <CardItem 
                            src="images/Bruno.jpg"
                            text='Bruno Pimentel, responsavel pelo front-end e design do site web.'
                            label='Desenvolvedor font-end'
                            // path='#'
                        />
                        <CardItem 
                            src="images/Hitalo.jpg"
                            text='Hitalo Chave, responsavel pelo front-end e design da aplicação mobile.'
                            label='Desenvolvedor font-end'
                            // path='#'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/Maciel.jpeg"
                            text='Pedro Maciel, reponsavel por desenvolver o back-end'
                            label='Desenvolvedor back-end'
                            // path='#'
                        />
                        <CardItem 
                            src="images/Danilo.jpg"
                            text='Danilo Claro, responsavel pelo desenvolvimento do banco de dados.'
                            label='DBA'
                            // path='#'
                        />
                        <CardItem 
                            src="images/Rickellme.jpg"
                            text='Rickellme, responsavel pelo planejamento e desenvolvimento do projeto.'
                            label='Analista de projeto'
                            // path='#'
                        />
                        <CardItem 
                            src="images/lucas.jpg"
                            text='Lucas, responsavel pelo design funcional de todo o projeto.'
                            label='Designer grafico'
                            // path='#'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
