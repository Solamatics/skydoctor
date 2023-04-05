export default function Dependant({userDetails, updatePage}) {
    const toggleAccordion = (id) => {
        document.getElementById(id).classList.toggle('show')

    }
    return (
        <div className="onboarding-content-box content-wrap">
            <div className="onborad-set">
                <div className="onboarding-title">
                    <h2>Dependant details<span>*</span></h2>
                    <h6>Add age & Photo of the each members</h6>
                </div>
                <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header"
                                        onClick={() => toggleAccordion('panelsStayOpen-collapseOne')}
                                        id="panelsStayOpen-headingOne">
                                        <button className="accordion-button" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne"
                                                aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseOne">
                                            Child
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne"
                                         className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Name</label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Age
                                                                <span>*</span></label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="relative-form">
                                                            <span>Upload Photo</span>
                                                            <label className="relative-file-upload">
                                                                File Upload <input type="file"/>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 onClick={() => toggleAccordion('panelsStayOpen-collapseTwo')}
                                        className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseTwo">
                                            Spouse
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse  "
                                         aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Name</label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Age
                                                                <span>*</span></label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="relative-form">
                                                            <span>Upload Photo</span>
                                                            <label className="relative-file-upload">
                                                                File Upload <input type="file"/>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 onClick={() => toggleAccordion('panelsStayOpen-collapseThree')}
                                        className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseThree">
                                            Father
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree"
                                         className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Name</label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Age
                                                                <span>*</span></label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="relative-form">
                                                            <span>Upload Photo</span>
                                                            <label className="relative-file-upload">
                                                                File Upload <input type="file"/>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header"
                                        onClick={() => toggleAccordion('panelsStayOpen-collapsefour')}
                                        id="panelsStayOpen-headingfour">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapsefour"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapsefour">
                                            Mother
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapsefour"
                                         className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingfour">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Name</label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group ">
                                                        <div className="passcode-wrap input-placeholder form-focus">
                                                            <label className="focus-label">Age
                                                                <span>*</span></label>
                                                            <input type="text" className="form-control floating"
                                                                   required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="relative-form">
                                                            <span>Upload Photo</span>
                                                            <label className="relative-file-upload">
                                                                File Upload <input type="file"/>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="onboarding-btn">
                <a onClick={() => updatePage(6)}
                   style={{color: 'white!important', cursor: 'pointer'}}>Continue</a>
            </div>
        </div>
    )
}