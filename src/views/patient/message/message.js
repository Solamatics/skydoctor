import {Box, Grid, IconButton} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import {ChevronLeft, Telegram} from "@mui/icons-material";
import {useState} from "react";
import VideoDialog from "./videoDialog";
import CallDialog from "./callDialog";
import {Link} from "react-router-dom";


export default function Message(){
    const [dialog, setDialog] = useState(false)
    const [callDialog, setCallDialog] = useState(false)
    return (
        <Box component={'main'} sx={{mt:-1, pa:1}}>
            <Box>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="chat-window">

                                    <div className="chat-cont-left">
                                        <div className="chat-header">
                                            <div>
                                                <IconButton component={Link} to={'/patient/dashboard'}  sx={{mt:-0.3}}>
                                                    <ChevronLeft/>
                                                </IconButton>
                                                <span>Chats</span>
                                            </div>

                                            <a href="javascript:void(0)" className="chat-compose">
                                                <i className="material-icons">control_point</i>
                                            </a>
                                        </div>
                                        <form className="chat-search">
                                            <div className="input-group">
                                                <div className="input-group-prepend">

                                                    <i className="fas fa-search"></i>
                                                </div>
                                                <input type="text" className="form-control rounded-pill"
                                                       placeholder="Search"/>
                                            </div>
                                        </form>
                                        <div className="chat-users-list">
                                            <div className="chat-scroll">
                                                <a href="javascript:void(0);" className="media d-flex">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-away">
                                                            <img src={require('../../../assets/img/patient.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Richard Wilson</div>
                                                            <div className="user-last-chat">Hey, How are you?</div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">2 min</div>
                                                            <div className="badge badge-success rounded-pill">15</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat active">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-online">
                                                            <img src={require('../../../assets/img/patient2.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Charlene Reed</div>
                                                            <div className="user-last-chat">I'll call you later</div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">8:01 PM</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-away">
                                                            <img src={require('../../../assets/img/patient3.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Travis Trimble</div>
                                                            <div className="user-last-chat">Give me a full explanation
                                                                about our
                                                                project
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">7:30 PM</div>
                                                            <div className="badge badge-success rounded-pill">3</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-online">
                                                            <img src={require('../../../assets/img/patient.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Carl Kelly</div>
                                                            <div className="user-last-chat">That's very good UI design
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">6:59 PM</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-offline">
                                                            <img src={require('../../../assets/img/patient2.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Michelle Fairfax</div>
                                                            <div className="user-last-chat">Yesterday i completed the
                                                                task
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">11:21 AM</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-online">
                                                            <img src={require('../../../assets/img/patient3.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Gina Moore</div>
                                                            <div className="user-last-chat">What is the major
                                                                functionality?
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">10:05 AM</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-away">
                                                            <img src={require('../../../assets/img/patient.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Elsie Gilley</div>
                                                            <div className="user-last-chat">This has allowed me to
                                                                showcase not only my
                                                                technical skills
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">Yesterday</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-offline">
                                                            <img src={require('../../../assets/img/patient2.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Joan Gardner</div>
                                                            <div className="user-last-chat">Let's talk briefly in the
                                                                evening.
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">Sunday</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-online">
                                                            <img src={require('../../../assets/img/patient3.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Daniel Griffing</div>
                                                            <div className="user-last-chat">Do you have any collections?
                                                                If so, what
                                                                of?
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">Saturday</div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="media d-flex read-chat">
                                                    <div className="media-img-wrap flex-shrink-0">
                                                        <div className="avatar avatar-away">
                                                            <img src={require('../../../assets/img/patient.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="media-body flex-grow-1">
                                                        <div>
                                                            <div className="user-name">Walter Roberson</div>
                                                            <div className="user-last-chat">Connect the two modules with
                                                                in 1 day.
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="last-chat-time block">Friday</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="chat-cont-right">
                                        <div className="chat-header">
                                            <a id="back_user_list" href="javascript:void(0)" className="back-user-list">
                                                <i className="material-icons">chevron_left</i>
                                            </a>
                                            <div className="media d-flex">
                                                <div className="media-img-wrap flex-shrink-0">
                                                    <div className="avatar avatar-online">
                                                        <img src={require('../../../assets/img/patients/patient1.jpg')} alt="User Image"
                                                             className="avatar-img rounded-circle"/>
                                                    </div>
                                                </div>
                                                <div className="media-body flex-grow-1">
                                                    <div className="user-name">Richard Wilson</div>
                                                    <div className="user-status">online</div>
                                                </div>
                                            </div>
                                            <div className="chat-options">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                   data-bs-target="#voice_call" onClick={()=>setCallDialog(true)}>
                                                    <i className="material-icons">local_phone</i>
                                                </a>
                                                <a href="javascript:void(0)" onClick={()=>setDialog(true)} data-bs-toggle="modal"
                                                   data-bs-target="#video_call">
                                                    <i className="material-icons">videocam</i>
                                                </a>
                                                <a href="javascript:void(0)">
                                                    <i className="material-icons">more_vert</i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="chat-body">
                                            <div className="chat-scroll">
                                                <ul className="list-unstyled">
                                                    <li className="media d-flex sent">
                                                        <div className="media-body flex-grow-1">
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>Hello. What can I do for you?</p>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:30 AM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="media d-flex received">
                                                        <div className="avatar flex-shrink-0">
                                                            <img src={require('../../../assets/img/patients/patient1.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                        <div className="media-body flex-grow-1">
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>I'm just looking around.</p>
                                                                    <p>Will you tell me something about yourself?</p>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:35 AM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>Are you there? That time!</p>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:40 AM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="msg-box">
                                                                <div>
                                                                    <div className="chat-msg-attachments">
                                                                        <div className="chat-attachment">
                                                                            <img src={require("../../../assets/img/img-02.jpg")}
                                                                                 alt="Attachment"/>
                                                                                <div
                                                                                    className="chat-attach-caption">placeholder.jpg
                                                                                </div>
                                                                                <a href="#"
                                                                                   className="chat-attach-download">
                                                                                    <i className="fas fa-download"></i>
                                                                                </a>
                                                                        </div>
                                                                        <div className="chat-attachment">
                                                                            <img src={require("../../../assets/img/img-03.jpg")}
                                                                                 alt="Attachment"/>
                                                                                <div
                                                                                    className="chat-attach-caption">placeholder.jpg
                                                                                </div>
                                                                                <a href="#"
                                                                                   className="chat-attach-download">
                                                                                    <i className="fas fa-download"></i>
                                                                                </a>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:41 AM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="media d-flex sent">
                                                        <div className="media-body flex-grow-1">
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>Where?</p>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:42 AM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>OK, my name is Limingqiang. I like singing,
                                                                        playing
                                                                        basketballand so on.</p>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:42 AM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="msg-box">
                                                                <div>
                                                                    <div className="chat-msg-attachments">
                                                                        <div className="chat-attachment">
                                                                            <img src={require("../../../assets/img/img-04.jpg")}
                                                                                 alt="Attachment"/>
                                                                                <div
                                                                                    className="chat-attach-caption">placeholder.jpg
                                                                                </div>
                                                                                <a href="#"
                                                                                   className="chat-attach-download">
                                                                                    <i className="fas fa-download"></i>
                                                                                </a>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:50 AM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="media d-flex received">
                                                        <div className="avatar flex-shrink-0">
                                                            <img src={require('../../../assets/img/patients/patient1.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                        <div className="media-body flex-grow-1">
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>You wait for notice.</p>
                                                                    <p>Consectetuorem ipsum dolor sit?</p>
                                                                    <p>Ok?</p>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>8:55 PM</span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="chat-date">Today</li>
                                                    <li className="media d-flex received">
                                                        <div className="avatar flex-shrink-0">
                                                            <img src={require('../../../assets/img/patients/patient1.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                        <div className="media-body flex-grow-1">
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit,</p>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>10:17 AM</span>
                                                                            </div>
                                                                        </li>
                                                                        <li><a href="#">Edit</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="media d-flex sent">
                                                        <div className="media-body flex-grow-1">
                                                            <div className="msg-box">
                                                                <div>
                                                                    <p>Lorem ipsum dollar sit</p>
                                                                    <div className="chat-msg-actions dropdown">
                                                                        <a href="#" data-bs-toggle="dropdown"
                                                                           aria-haspopup="true"
                                                                           aria-expanded="false">
                                                                            <i className="fe fe-elipsis-v"></i>
                                                                        </a>
                                                                        <div
                                                                            className="dropdown-menu dropdown-menu-end">
                                                                            <a className="dropdown-item"
                                                                               href="#">Delete</a>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="chat-msg-info">
                                                                        <li>
                                                                            <div className="chat-time">
                                                                                <span>10:19 AM</span>
                                                                            </div>
                                                                        </li>
                                                                        <li><a href="#">Edit</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="media d-flex received">
                                                        <div className="avatar flex-shrink-0">
                                                            <img src={require('../../../assets/img/patients/patient1.jpg')} alt="User Image"
                                                                 className="avatar-img rounded-circle"/>
                                                        </div>
                                                        <div className="media-body flex-grow-1">
                                                            <div className="msg-box">
                                                                <div>
                                                                    <div className="msg-typing">
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="chat-footer">
                                            <div className="input-group">
                                                <div className="btn-file btn">
                                                    <i className="fa fa-paperclip"></i>
                                                    <input type="file"/>
                                                </div>
                                                <input type="text" className="input-msg-send form-control rounded-pill"
                                                       placeholder="Type something"/>
                                                    <button type="button" className="btn msg-send-btn">
                                                        <Telegram sx={{color:'white'}}/>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Box>

            <VideoDialog dialog={dialog} setDialog={setDialog} />
            <CallDialog dialog={callDialog} setDialog={setCallDialog} />
        </Box>

    )
}