import {Box} from "@mui/material";

export default function Record({setDialog}){
    return (
        <Box>
            <div className="text-end">
                <a href="#" onClick={()=>setDialog(true)} className="add-new-btn" data-bs-toggle="modal"
                   data-bs-target="#add_medical_records_modal">Add Medical Records</a>
            </div>
            <div className="card card-table mb-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Attachment</th>
                                <th>Orderd By</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                [1,2,3,4,5].map((item,index)=>(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>Richard Wilson</td>
                                        <td>11 Nov 2019 <span
                                            className="d-block text-info">10.00 AM</span></td>
                                        <td>Benzaxapine Croplex</td>
                                        <td>
                                            <a href="javascript:void(0);"
                                               title="Download attachment"
                                               className="btn btn-primary btn-sm"> <i
                                                className="fa fa-download"></i></a>
                                        </td>
                                        <td>Your Self</td>
                                        <td>
                                            <a href="javascript:void(0);"
                                               className="btn btn-sm bg-danger-light">
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Box>
    )
}