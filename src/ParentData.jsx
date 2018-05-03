import React from 'react';
import { jsonData } from './MockData';
import './App.css';

class DisplayData extends React.Component {
  constructor(props){
    super(props);
    this.onTableRowClick = this.onTableRowClick.bind(this);
    this.state = {
      expandedRows: []
    };
  }
  onTableRowClick(rowID){
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowID);

    const newExpandedRows = isRowCurrentlyExpanded ? currentExpandedRows.filter(id => id !== rowID):
      currentExpandedRows.concat(rowID);
      this.setState({expandedRows: newExpandedRows});
  }

  renderItem(item) {
        const clickCallback = () => this.onTableRowClick(item.PKEY);
        if(item.CONTROL === 'Y') {
        const itemRows = [
			     <tr onClick={clickCallback} key={item.PKEY}>
			    <td>{item.Name}</td>
			    <td>{item.Status}</td>
			    <td>{item.No_Of_Orders}</td>
			   </tr>
        ];

        if(this.state.expandedRows.includes(item.PKEY)){
            itemRows.push(
                <tr key={item.PKEY}>
                    <td>{item.name}</td>
                    <td>{item.Status}</td>
                    <td>{item.No_Of_Orders}</td>
                </tr>
            )
           }
        return itemRows;
      }
    }

    render() {
        let allItemRows = [];

        jsonData.VDEALS.map(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        })

        return (
			     <table>
           <tbody>{allItemRows}</tbody>
           </table>
        );
    }
}

export default DisplayData;
