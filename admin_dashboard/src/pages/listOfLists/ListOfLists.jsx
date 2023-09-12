import "./listOfLists.css";
import { DeleteOutline } from "@mui/icons-material";
import {DataGrid} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import { useContext, useEffect} from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists,deleteList } from "../../context/listContext/listApi";


const ListOfLists = ()=> {
  
  const {lists,dispatch} = useContext(ListContext);

  useEffect(()=>{
    getLists(dispatch);
  },[dispatch]);

 
  // eslint-disable-next-line no-unused-vars
  const handleDelete = (id) => {
    deleteList(id,dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/list/${params.row._id}`} state={{list:params.row}}>
              <button className="productListEdit" >Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,25]}
        checkboxSelection 
        getRowId={row=>row._id}
      />
    </div>
  );
}

export default ListOfLists;