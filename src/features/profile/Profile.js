import { HeaderDashboard } from "../../components/layout/HeaderDashboard";
import "../../assets/css/placeholder.css";
import "../../assets/css/ButtonProfile.css";
import { Infomation } from "./Infomation";
import { Password } from "./Password";
import wal from "sweetalert2";
import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ProfileService from "../../services/ProfileService";
import {Field, Form, Formik} from "formik";

export function Profile() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);
    const [avatar, setAvatar] = useState();
    const [preview, setPreview] = useState(null);

    const uploadFile = async () => {
        if (img !== null) {
            const imgRef = ref(storage, `images/${img.name + v4()}`);
            const snapshot = await uploadBytes(imgRef, img);
            const url = await getDownloadURL(snapshot.ref);
            return url;
        }
        return null;
    };

    useEffect(() => {
        listAll(ref(storage, "images")).then(imgs => {
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImgUrl(data => [...data, url]);
                });
            });
        });
    }, []);

    const fetchAvatar = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await ProfileService.getAvatar(token);
            setAvatar(response.userReq.imgUrl);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    useEffect(() => {
        fetchAvatar().then();
    }, []);

    const handleSubmitAvatar = async (values) => {
        setLoading(true);
        try {
            const url = await uploadFile();
            if (url) {
                values.imgUrl = url;
            } else {
                values.imgUrl = null;
            }
            await ProfileService.changeAvatar(values, localStorage.getItem('token'));
            window.location.reload(); // Reload the page after successful submission
            toast.success("Update successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                style: {
                    backgroundColor: '#000000', color: 'rgba(237,167,0,0.98)', fontWeight: 'bold', fontSize: '16px'
                }
            });
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            setImg(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content" style={{ background: "#171821" }}>
                    <HeaderDashboard />
                    <div className="container-fluid">
                        <h3 className="mb-4" style={{ color: "rgb(255,255,255)", fontFamily: "Aboreto, serif" }}>Infomation</h3>
                        <div className="row mb-3">
                            <div className="col-lg-4">
                                <div className="card mb-3">
                                    <div className="card-body text-center shadow" style={{ background: "rgba(23,24,33,0.88)", display: "block" }}>
                                        <img alt={"avatar"} className="rounded-circle mb-3 mt-4"
                                            src={avatar == null || avatar === '' ? "https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/avatar.webp?alt=media&token=d95b5759-3456-4c46-9d78-4766f9512868" : avatar}
                                            width="160" height="160" style={{ display: "inline" }} />
                                        <a className="btn btn-outline-light" type="button" style={{
                                            color: "#f2f5f8",
                                            borderRadius: "17px",
                                            margin: " 0px 5px",
                                            borderWidth: "0.8px"
                                        }}
                                            href="#changeAvatar" data-bs-toggle="modal"
                                        >Change avatar
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col">
                                        <Infomation />
                                        <Password />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade text-center portfolio-modal w-50 h-50" role="dialog" tabIndex="-1" id="changeAvatar">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="modal-body">
                                            <Formik initialValues={{
                                                imgUrl: ''
                                            }} onSubmit={handleSubmitAvatar}>
                                                <Form >
                                                    <div className="form-group">
                                                        {preview && <img src={preview} alt="Preview" className="img-thumbnail mt-2" width="200" />}
                                                        <Field type="file" className="form-control" id="imgUrl" name="imgUrl"
                                                            onChange={handleFileChange} />
                                                    </div>
                                                    <button className="btn btn-primary m-1" type="submit" disabled={loading}>
                                                        {loading ? 'Uploading...' : 'Submit'}
                                                    </button>
                                                    <button className="btn btn-outline-warning m-1" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close</span></button>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}