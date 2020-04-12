import React, { Component } from 'react';
import axios from 'axios';
import FirmsTable from './FirmsTable';

class FirmsData extends Component {

    constructor() {

        super();

        this.state = {
            firmsNames: []
        };

    };
 

    getIncomes = (id) => {
   
        return axios.get(`https://recruitment.hal.skygate.io/incomes/` + id)
            .then(res=> {
                let incomes = res.data;
                return incomes;
            });
    }


    totalIncomesValue = (incomes) =>{

        let valueSum = 0;

        for(let i = 0; i<incomes.length; i++) {
            valueSum += parseFloat(incomes[i].value)
        }

        return valueSum;
        
    }
    

    componentDidMount() {
        // pobranie nazw

        axios.get(`https://recruitment.hal.skygate.io/companies`)
            .then(res => {
                const firmsData = res.data;
              
                let firmsWithData = [];
                firmsData.forEach((firm)=>{
                    this.getIncomes(firm.id)
                    .then(incomesObj=> {  
                        firm.incomes = incomesObj.incomes;
                        firm.sumIncomesValue = this.totalIncomesValue(incomesObj.incomes);
                       
                        firmsWithData.push(firm);

                        this.setState({ firmsNames: firmsWithData });
                    });    
                });
                
                
          
            });
    };




    render() {
        return (
            <FirmsTable firms={this.state.firmsNames} />
        );
    };
};


export default FirmsData;