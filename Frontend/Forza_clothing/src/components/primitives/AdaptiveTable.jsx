import { useEffect, useState } from 'react';
import $ from 'jquery';

import IconButton from './IconButton';
import RightIconRectInput from './RightIconRectInput';

import './AdaptiveTable.css';

function AdaptiveTable({ tableId, title, cols, data, pagination, filters, filterWidth, onAddBtnClick, onReportBtnClick }) {

    const [view, setView] = useState(true)
    const [page, setPage] = useState(1)

    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(pagination)

    useEffect(() => {
        setStartIndex((page - 1) * pagination);
        setEndIndex(page * pagination);
    }, [page, pagination])

    const toggle = () => {
        $(`#${tableId}__table-container`).slideToggle(500);
        setView(!view)
    }

    filterWidth = filterWidth || "400";

    return (
        <div className={`adaptive-table-container`} id={tableId}>
            <div className={`adaptive-table__title ${view ? "" : "hidden"}`}>
                <span className="adaptive-table__title-text">{title}</span>
                {
                    filters && <div className="adaptive-table__fiter-container" style={{ "width": `${filterWidth}px` }}>
                        {filters}
                    </div>
                }
                <div className="horizontal-container">
                    <IconButton onClick={onReportBtnClick} w="40" icona={"file_save"} bg="blue" />
                    <IconButton onClick={onAddBtnClick} w="40" icona={"add"} bg="green" />
                    <div></div>
                    {
                        view ? <IconButton onClick={toggle} w="40" icona={"keyboard_arrow_down"} /> : <IconButton w="40" onClick={toggle} icona={"keyboard_arrow_up"} />
                    }
                </div>
            </div>
            <div id={`${tableId}__table-container`}>
                <div className='adaptive-table__table-container'>
                    <table className="adaptive-table" id={`${tableId}__table`}>
                        <thead className="adaptive-table__header">
                            <tr className='adaptive-table__row'>
                                {
                                    cols.map((col, index) => (
                                        <td className="adaptive-table__col" key={index}>
                                            <span className="adaptive-table-header-col">
                                                {col.icon && <span className='material-symbols-outlined adaptive-table__header-icon'>{col.icon}</span>}
                                                {col.label}
                                            </span>

                                        </td>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody className="adaptive-table__body">
                            {
                                data.slice(startIndex, endIndex).map((row, index) => (
                                    <tr className="adaptive-table__row" key={index}>
                                        {cols.map((col, colIndex) => (
                                            <td className="adaptive-table__col" key={`${col.colKey}-${colIndex}`}>
                                                {row[col.colKey] || ''}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="adaptive-table__footer">
                    <span>
                        {
                            Array.from({ length: Math.ceil(data.length / pagination) }, (_, index) => (
                                <IconButton extraClass={`adaptive-table__page-btn ${page === index + 1 ? "active" : ""}`} key={index} onClick={() => setPage(index + 1)} content={index + 1} w="40" lm="5" />
                            ))
                        }
                    </span>
                    <span>
                        <IconButton c="white" bg="blue" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AdaptiveTable;