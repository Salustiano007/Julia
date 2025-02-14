import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'




export default function E01() {

       
        const[Valorkmg, setValorkmg] = useState ()
        const[VTotal, setVTotal] = useState()

    function total (){
            let x = (Valorkmg *1000)
            setVTotal(x)
    }

    return (
        <div className='pagina-e02'>
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/logo.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 02 - Convertendo kg/grama</h2>
                    </div>
                    <div className='faixinha'/>
                </div>
                <div className='descricao'>
                    <p>implentar um pregrama em Javascript para converter  kilos em gramas. </p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                       
                        <div className='campo'>
                            <label>valor em kg</label>
                            <input placeholder='0' value={Valorkmg} onChange={e=> setValorkmg (e.target.value)} />
                        </div>
                        <a href='#' className='executar' onClick={total} >Executar</a>
                    </div>
                    <h3 className='resultado' >Resultado: O total é  {VTotal} gramas </h3>
                </div>

            </div>
        </div>
    )
}
