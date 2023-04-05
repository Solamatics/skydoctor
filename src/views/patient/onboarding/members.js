import {useState} from "react";

export default function Members({updatePage, userDetails}){

    const [child, setChild] = useState(0)
    const increaseChild = ()=>{
        setChild(child +1)
    }
    const decreaseChild = () =>{
        if(child<= 0) return
        setChild(child-1)
    }
    return (
        <div className="onboarding-content-box content-wrap">
            <div className="onborad-set">
                <div className="onboarding-title">
                    <h2>Select Members<span>*</span></h2>
                    <h6>Who all you want to cover in health insurance</h6>
                </div>
                <div className="onboarding-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <form method="post">
                                <div className="checklist-col pregnant-col">
                                    <div className="remember-me-col d-flex justify-content-between">
                                        <span className="mt-1">Self</span>
                                        <label className="custom_check">
                                            <input type="checkbox" className="" name="self" id="self" value="1"
                                                   checked=""/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="remember-me-col d-flex align-items-center justify-content-between">
                                        <span className="mt-1">Spouse</span>
                                        <label className="custom_check">
                                            <input type="checkbox" className="" name="spouse" id="spouse"
                                                   value="1"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="remember-me-col d-flex align-items-center justify-content-between">
                                        <span className="mt-1">Child</span>
                                        <div className="increment-decrement">
                                            <div className="input-groups">
                                                <input onClick={()=>decreaseChild()} type="button" value="-" id="subs"
                                                       className="button-minus dec button"/>
                                                    <input type="text" name="child" id="child" value={child}
                                                           className="quantity-field"/>
                                                        <input type="button" onClick={()=>increaseChild()} value="+" id="adds"
                                                               className="button-plus inc button a1 a2 a3 a4 a0"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="remember-me-col d-flex align-items-center justify-content-between">
                                        <span className="mt-1">Mother</span>
                                        <label className="custom_check">
                                            <input type="checkbox" className="" name="mother" id="mother"
                                                   value="1"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="remember-me-col d-flex align-items-center justify-content-between">
                                        <span className="mt-1">Father</span>
                                        <label className="custom_check">
                                            <input type="checkbox" className="" name="father" id="father"
                                                   value="1"/>
                                                <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="onboarding-btn">
                <a onClick={() => updatePage(5)}
                   style={{color: 'white!important', cursor: 'pointer'}}>Continue</a>
            </div>
        </div>
    )
}