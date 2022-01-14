import React, {useState, useEffect} from 'react';
import {
    Container,
    WrapperInfo,
    WrapperSum,
    Name,
    NameInfo,
    Date,
    Type,
    Sum
} from './CreditItem.styled';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

import { DataGrid } from '@mui/x-data-grid';
import data from '../../../data/data.json'

const columns = [
    { field: 'id', headerName: 'ДАТА' },
    { field: 'name', headerName: 'ОПИСАНИЕ', width:300 },
    { field: 'body', headerName: 'КАТЕГОРИЯ', width: 300 },
    {field: "actions",headerName: "Actions",
                        sortable: false,
                        width: 100,
                        disableClickEventBubbling: true,
                        renderCell: (params) => {
                            return (
                                <div style={{ cursor: "pointer" }}>
                                    <DeleteIcon index={params.row.id} width="18" height="18" fill="black" />
                                 </div>
                            );
                         }
                      }
]

const CreditItem = () => {
    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        setTableData(data);
    },[])
    return (
        <div style={{height:300, width:'100%'}}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize ={4}
            />
        </div>
        // <Container>
        //     <WrapperInfo>
        //         <Name>Метро</Name>
        //         <NameInfo>
        //             <Date>13.01.22</Date>
        //             <Type>Транспорт</Type>
        //         </NameInfo>
        //     </WrapperInfo>
        //     <WrapperSum>
        //         <Sum>-10</Sum>
        //         <DeleteIcon width="18" height="18" fill="black" />
        //     </WrapperSum>
        
        //     {/* <IconButton>
        //         <DeleteIcon width="40" height="40" fill = "black"/>
        // </IconButton> */}
        // </Container>
    
    );
}

export default CreditItem;

// onClick={onSubmit}