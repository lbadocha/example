import React from 'react';

const FirmsTable = props => {

    const listItems = props.firms.map((firm) => {
        console.log(firm.sumIncomesValue);
        return (
            <div key={firm.id}>
                <div className="table-item" >
                    <div className="id-cell">Id: {firm.id}</div>
                    <div className="name-cell">Name: {firm.name}</div>
                    <div className="firm-city">City: {firm.city}</div>
                    <div className="firm-city">Sum incomses value: {firm.sumIncomesValue}</div>
                </div>

            </div>
        )
    });
    // console.log(props.firmsSalary.totalIncomes);
    return (
        <div className="table-container">
            {listItems}
        </div>
    )
}

export default FirmsTable;