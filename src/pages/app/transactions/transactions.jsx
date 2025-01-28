import './transactions.css';
import { useEffect } from 'react';

function Transactions() {
    
    return (
        <div>
            <div className='container-transactions'>
                <div className='header-transactions'>   
                    <div className='header-transactions-left'>
                        <i className='bx bx-chevrons-right'></i>
                        <p>27 Sept, 2024</p>
                    </div>

                    <div className='header-transactions-right'>
                        <div className='transaction-notif'>
                            <i className='bx bxs-bell'></i>
                        </div>
                        <div className="search-bar">
                            <input type="text" placeholder="Search here" />
                            <button type="submit">
                                <i className='bx bx-search'></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='header-transaction-divider'></div>

                <div className='main-transactions'>
                    <h1>Detalles de cuenta</h1>

                    <div className='container-mini-menu'>
                        <ul className='mini-menu'>
                            <li className='menu-option active'>Todos</li>
                            <li className='menu-option'>Ganancias</li>
                            <li className='menu-option'>Gastos</li>
                        </ul>
                    </div>

                    <div className='container-transaction-table'>
                        <table className='transactions-table'>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                    <th>Categoría</th>
                                    <th>Tipo</th>
                                    <th>Cuenta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transacciones.map((transaccion) => (
                                    <tr key={transaccion._id}>
                                        <td>{transaccion.descripcion}</td>
                                        <td>{transaccion.monto.toLocaleString()}</td>
                                        <td>{transaccion.categoria}</td>
                                        <td>{transaccion.tipo}</td>
                                        <td>{transaccion.cuenta}</td>
                                    </tr>
                                ))}
                                

                                                 
                            </tbody>
                        </table>

                        <div className='transaction-load-more'>
                            <button>Cargar más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;
