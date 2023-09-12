import "./userList.css";
import { DeleteOutline } from "@mui/icons-material";
import {DataGrid} from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import {Link} from "react-router-dom";
import { useState } from "react";

const UserList = () => {
      const [data,setData] = useState(userRows);

      const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
      }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "user", headerName: "User", width: 200, renderCell: (params) => {
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          );
        },
      },
        { field: "email", headerName: "Email", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "transaction",
          headerName: "Transaction Volume",
          width:160
        },
        {
          field:"action",
          headerName:"Action",
          width:160,
          renderCell:(params)=>{
            return(
              <>
              <Link to={`/users/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
            )
          }
        }
      ];
      
      
      
  return (
    <div className="userList">
         <DataGrid
        rows={data}
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
      />
    </div>
    
  )
}

export default UserList;