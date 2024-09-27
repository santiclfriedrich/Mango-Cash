import './transactions.css'

import React from 'react'

function Transactions() {
  return (
    <div>

        <div className='container-transactions'>

            <div className='header-transactions'>   
                <div className='header-transactions-left'>
                    <i class='bx bx-chevrons-right'></i>
                    <p>27 Sept, 2024</p>
                </div>

                <div className='header-transactions-right'>
                    <div className='transaction-notif'>
                        <i class='bx bxs-bell' ></i>
                    </div>
                    <div class="search-bar">
                        <input type="text" placeholder="Search here" />
                        <button type="submit">
                            <i class='bx bx-search' ></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='header-transaction-divider'></div>

            <div className='main-transactions' >

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
                                <th>Items</th>
                                <th>Tienda</th>
                                <th>Fecha</th>
                                <th>Método de Pago</th>
                                <th>Costo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Item 1</td>
                                <td>Tienda A</td>
                                <td>27 Sept, 2024</td>
                                <td>Tarjeta de Crédito</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td>Item 2</td>
                                <td>Tienda B</td>
                                <td>26 Sept, 2024</td>
                                <td>Efectivo</td>
                                <td>$50</td>
                            </tr>
                            <tr>
                                <td>Item 3</td>
                                <td>Tienda c</td>
                                <td>25 Sept, 2024</td>
                                <td>Efectivo</td>
                                <td>$70</td>
                            </tr>
                            <tr>
                                <td>Item 4</td>
                                <td>Tienda d</td>
                                <td>24 Sept, 2024</td>
                                <td>Tarjeta de Crédito</td>
                                <td>$10000</td>
                            </tr>
                            <tr>
                                <td>Item 3</td>
                                <td>Tienda c</td>
                                <td>25 Sept, 2024</td>
                                <td>Efectivo</td>
                                <td>$70</td>
                            </tr>                            
                        </tbody>
                    </table>

                    <div className='transaction-load-more'>
                        <button>Cargar mas</button>
                    </div>

                </div>


            </div>

        </div>

        

    </div>
  )
}

export default Transactions