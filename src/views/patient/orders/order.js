import {Link} from "react-router-dom";

export default  function Order(){
    return (
        <div className="card">
            <div className="card-body">
                <div className="card card-table mb-0">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Order Id</th>
                                    <th>Pharmacy Name</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Amount</th>
                                    <th>Payment Gateway</th>
                                    <th>Status</th>
                                    <th>Order date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    [1,2,3,4,5,6,7].map((item,index)=>(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td><Link to={'/patient/invoice-details'} >OD1236547890</Link></td>
                                            <td>Medlife Medical</td>
                                            <td className="text-center">2</td>
                                            <td className="text-center">$150</td>
                                            <td>Stripe</td>
                                            <td><span className="badge badge-primary">Order Placed</span></td>
                                            <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span>
                                            </td>
                                        </tr>
                                    ))
                                }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}