export const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props;
    let btnClass;

    return (
        <nav className="toolbar">
            <div className="buttons">
                {filters.map((filter, index) => {
                    btnClass = "btn-item";
                    if (filter === selected) {
                        btnClass += " active";
                    }

                    return (
                        <button className={btnClass} key={index} onClick={() => onSelectFilter(filter)}>
                            {filter}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}