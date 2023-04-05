import {Link} from "react-router-dom";


export default function Customer(){
    return (
        <div className="card">
            <div className="card-header border-bottom-0">
                <div className="row align-items-center">
                    <div className="col">
                        <h5 className="card-title">Latest Customers</h5>
                    </div>
                    <div className="col-auto d-flex">
                        <div className="bookingrange btn btn-white btn-sm">
                            <div className="cal-ico">
                                <span>Select Date</span>
                                <i className="feather-chevron-down ms-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-borderless hover-table">
                        <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Telephone</th>
                            <th>Email</th>
                            <th className="text-end">Date added</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>01</td>
                            <td><a href="profile.html">Ruby Perrin</a></td>
                            <td>takrakka</td>
                            <td>+54 1245463984</td>
                            <td><a href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                                   className="__cf_email__"
                                   data-cfemail="98eaedfae1e8fdeaeaf1f6ffd8fde0f9f5e8f4fdb6fbf7f5">[email&#160;protected]</a>
                            </td>
                            <td className="text-end">April 14, 2022</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td><a href="profile.html">Darren Elder</a></td>
                            <td>339, Terromont Street</td>
                            <td>+44 874654536</td>
                            <td><a href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                                   className="__cf_email__"
                                   data-cfemail="6105001313040f040d050413210419000c110d044f020e0c">[email&#160;protected]</a>
                            </td>
                            <td className="text-end">December 15, 2022</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td><a href="profile.html">Deborah Angel</a></td>
                            <td>339, Terromont Street</td>
                            <td>+0144 763 351</td>
                            <td><a href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                                   className="__cf_email__"
                                   data-cfemail="93f7f6f1fce1f2fbf2fdf4f6ffd3f6ebf2fee3fff6bdf0fcfe">[email&#160;protected]</a>
                            </td>
                            <td className="text-end">January 22, 2022</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td><a href="profile.html">Marsha Burke</a></td>
                            <td>2061 Angus Road</td>
                            <td>+510-306-7033</td>
                            <td><a href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                                   className="__cf_email__"
                                   data-cfemail="4825293a3b20292a3d3a232d082d30292538242d662b2725">[email&#160;protected]</a>
                            </td>
                            <td className="text-end">August 13, 2022</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td><a href="profile.html">Krystyna Rodriquez</a></td>
                            <td>takrakka</td>
                            <td>+54 8965722222</td>
                            <td><a href="https://doccure-html.dreamguystech.com/cdn-cgi/l/email-protection"
                                   className="__cf_email__"
                                   data-cfemail="5d362f242e2924333c2f32392f342c2838271d38253c302d3138733e3230">[email&#160;protected]</a>
                            </td>
                            <td className="text-end">May 01, 2022</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}