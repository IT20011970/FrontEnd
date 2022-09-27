import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../../../Styles/Modal.css";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const CreateSparePartsTab1 = (props: any) => {


  const itemStyle = {
  	position: 'relative',
    height: '26px'
};

const inputStyle = {
  	padding: '0',
    position: 'absolute',
    left: '2px',
    top: '2px',
    right: '2px',
    bottom: '2px',
  	fontFamily: 'Arial',
  	fontSize: '13px'
};

const Cell = React.memo(({ value, onChange }) => {
    const valueRef = React.useRef();
  	const inputRef = React.useRef();
  	React.useEffect(() => {
        var input = inputRef.current;
        if (input) {
            input.value = value ?? '';
        }
    }, [value]);
    const handleFocus = () => {
        var input = inputRef.current;
        if (input) {
            valueRef.current = input.value;
        }
    };
	const handleBlur = () => {
        if (onChange) {
            var input = inputRef.current;
            if (input && input.value !== valueRef.current) {
                onChange(input.value);
            }
        }
    };
    return (
        <div style={itemStyle}>
          <input
            ref={inputRef}
            style={inputStyle}
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
    );
});

// ROW ------------------------------------------

const tdStyle = {
  	padding: '1px',
  	border: '1px solid black',
};

const optionStyle = {
  	...tdStyle,
    padding: '2px 2px',
  	width: '30px'
};

const Row = React.memo(({ columns, data, onChange, onDelete }) => {
	const handleDeleteClick = () => onDelete?.();
    return (
      <tr>
        {columns.map(({path}, columnIndex) => {
            const handleChange = value => {
                if (onChange) {
                    const changedData = { ...data, [path]: value };
                    onChange(columnIndex, changedData);
                }
            };
            return (
                <td key={path} style={tdStyle}>
                  <Cell 
                    value={data[path]} 
                    onChange={handleChange} 
                  />
                </td>
            );
        })}
        <td style={optionStyle}>
          <button onClick={handleDeleteClick}>Delete</button>
        </td>
      </tr>
    );
});

// TABLE ----------------------------------------

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
  	width: '100%'
}

const Table = React.memo(({ id, columns, data, onAdd, onChange, onDelete }) => {
    const handleAddClick = () => {
      	onAdd?.(data.length);
    };
	return (
        <div>
          <table style={tableStyle}>
            <tbody>
              <tr>
                {columns.map(({path, name}) => (
                  <th key={path} style={tdStyle}>{name}</th>
                ))}
              </tr>
              {data.map((rowData, rowIndex) => {
                  const handleChange = (columnIndex, changedData) => {
                      onChange?.(rowIndex, columnIndex, changedData);
                  };
                  const handleDelete = () => {
                      onDelete?.(rowIndex, rowData);
                  };
                  return (
                      <Row 
                        key={rowData[id]}
                        columns={columns}
                        data={rowData}
                        onChange={handleChange}
                        onDelete={handleDelete}
                       
                      />
                  );
              })}
            </tbody>
          </table>
          <br />
          <div>
            <button onClick={handleAddClick}>Add row</button>
          </div>
        </div>
    );
});

// UTILS ------------------------------------------------

// https://dirask.com/snippets/React-append-prepend-remove-and-replace-items-in-array-with-utils-for-useState-D7XEop

const appendItem = (updater, item) => {
    updater(array => array.concat(item));
};

const appendItem = (updater, item) => {
  updater((array: string | any[]) =>array.concat(item));
}
  
const replaceItem = (updater, index, item) => {
    updater(array => array.map((value, i) => i === index ? item : value));
};

const deleteItem = (updater, index) => {
    updater(array => array.filter((value, i) => i !== index));
};

// Example --------------------------------------

const columns = [
  	{ path: 'id',   name: 'ID'   },
    { path: 'name', name: 'Name' },
    { path: 'age',  name: 'Age'  }
];

let counter = 0;

const App = () => {
  	const [data, setData] = React.useState(() => ([
        { id: ++counter, name: 'Bob',  age: 22 },
        { id: ++counter, name: 'Adam', age: 43 },
        { id: ++counter, name: 'Mark', age: 16 },
        { id: ++counter, name: 'John', age: 29 }
	]));
  	const handleAdd = (rowIndex) => {
      	const newRowData =  { id: ++counter };
        appendItem(setData, newRowData);
      	//TODO: AJAX request to server
      	console.log(`Added empty row!`);
    };
  	const handleChange = (rowIndex, columnIndex, changedRowData) => {
        replaceItem(setData, rowIndex, changedRowData);
    	const changedRowJson = JSON.stringify(changedRowData, null, 4);
      	//TODO: AJAX request to server
      	console.log(`Changed row:\n${changedRowJson}`);
    };
  	const handleDelete = (rowIndex, deletedRowData) => {
        deleteItem(setData, rowIndex);
      	//TODO: AJAX request to server
      	console.log(`Deleted row: ${rowIndex}`);
    };
    return (
        <div>
          <Table
            id="id"
            columns={columns}
            data={data}
            onAdd={handleAdd}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        </div >
    );
};

const root = document.querySelector('#root');
ReactDOM.render(<App/>, root);

}

export default CreateSparePartsTab1;
