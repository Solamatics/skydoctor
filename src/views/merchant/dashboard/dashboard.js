import Overview from "./overview";
import Revenue from "./revenue";
import Status from "./status";
import Customer from "./customer";


export  default function Dashboard(){
    return (
        <div className="content container-fluid pb-0">
           <Overview/>
            <div className="row">
                <div className="col-xl-7 d-flex">
                   <Revenue/>
                </div>
                <div className="col-xl-5 d-flex">
                  <Status/>
                </div>

            </div>
            <div className="row">

                <div className="col-lg-12">
                    <Customer/>
                </div>

            </div>
        </div>

    )
}