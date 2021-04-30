import './Filters.css';

const Filters = () => {
    return(
        <aside className="filters">
            <h2>Filtrar por</h2>
            <div className="filter-container">
                <h2 className="filters-titles">Costo de Envio</h2>
                <label className="filter-label">
                <input type="checkbox"/>
                Gratis</label>
            </div>
            <div className="filter-container">
                <h2 className="filters-titles">Ubicación</h2>
                <label className="filter-label">
                <input type="checkbox"/>
                CABA</label>
                <label className="filter-label">
                <input type="checkbox"/>
                BS GBA Sur</label>
                <label className="filter-label">
                <input type="checkbox"/>
                BS GBA Norte</label>
                <label className="filter-label">
                <input type="checkbox"/>
                BS GBA Oeste</label>
                <label className="filter-label">
                <input type="checkbox"/>
                Mendoza</label>
                <label className="filter-label">
                <input type="checkbox"/>
                Santa Fe</label>
                <label className="filter-label">
                <input type="checkbox"/>
                Neuquen</label>
                <label className="filter-label">
                <input type="checkbox"/>
                Rio Negro</label>
            </div>
            <div className="filter-container">
                <h2 className="filters-titles">Tiendas Oficiales</h2>
                <label className="filter-label">
                <input type="checkbox"/>
                Solo tiendas Oficiales</label>
            </div>
            <label className="filter-container filters-titles"> Precio
            <select> 
                <option>Todos</option>
                <option>Menor - Mayor</option>
                <option>Menor - Mayor</option>
            </select>
            </label>
        </aside>
    )
}

export default Filters;