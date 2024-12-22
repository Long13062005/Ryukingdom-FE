import {useCallback, useEffect, useState} from "react";
import feedbackService from "../../services/FeedbackService";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {FaStar} from 'react-icons/fa';


export function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const size = 4;

    useEffect(() => {
        fetchFeedback(page, size);
    }, [page, size]);

    const fetchFeedback = async () => {
        try {
            const data = await feedbackService.fetchFeedbackListPage(localStorage.getItem("token"), page, size);
            setTotalPages(data.totalPages);
            setFeedbacks(data.content);
        } catch (error) {
            console.error("Failed to fetch feedback:", error);
        }
    };

    const handleDelete = useCallback(async (feedbackID) => {
        if (!feedbackID) {
            console.error("Invalid feedbackID for deletion:", feedbackID);
            return;
        }

        try {
            await feedbackService.removeFeedbackById(feedbackID);
            setFeedbacks(feedbacks.filter(f => f.id !== feedbackID));
            setShowDeleteModal(false);
            toast("Deleted successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                style: {
                    backgroundColor: '#000000', color: 'rgba(237,0,0,0.98)', fontWeight: 'bold', fontSize: '16px'
                }
            });
        } catch (error) {
            console.error("Error deleting feedbackID:", error);
        }
    }, [feedbacks]);

    const confirmDelete = useCallback((feedback) => {
        Swal.fire({
            title: " Warning!!!",
            text: `Are you sure to delete : ${feedback.name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(feedback.id);
            }
        });
    }, [handleDelete]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<FaStar key={i} color={i < rating ? "gold" : "gray"}/>);
        }
        return stars;
    };

    return (<div>
            <div className="row justify-content-center" style={{margin: "30px 0 30px 0"}}>
                <div className="col-xl-10 col-xxl-12">
                    <div className="card shadow">
                        <div
                            className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3"
                            style={{background: "#171821"}}>
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{color: "#c1931f"}}>All
                                Feedbacks&nbsp;</h5>
                        </div>
                        <div className="card-body" style={{background: "#171821"}}>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Rating</th>
                                        <th>Description</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {feedbacks.length > 0 ? (feedbacks.map((feedback, index) => (<tr key={feedback.id}>
                                                <td>{feedback.customer.name}</td>
                                                <td>{renderStars(feedback.rating)}</td>
                                                <td>{feedback.description}</td>
                                                <td className="text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                         fill="currentColor" viewBox="0 0 16 16"
                                                         className="bi bi-trash fs-5 text-danger"
                                                         onClick={() => confirmDelete(feedback)}
                                                         style={{color: "rgb(255,0,0)"}}>
                                                        <path
                                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                                                        <path
                                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                                                    </svg>
                                                </td>
                                            </tr>))) : (<tr>
                                            <td colSpan="8" className="text-center">Empty</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer" style={{background: "#171821"}}>


                            <ul className="pagination">
                                <li className="page-item">
                                    <button
                                        className="page-link bg-dark"
                                        onClick={() => handlePageChange(page > 0 ? page - 1 : 0)}
                                        disabled={page === 0}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {[...Array(totalPages)].map((_, i) => (
                                    <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
                                        <button
                                            className="page-link bg-dark"
                                            onClick={() => handlePageChange(i)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>))}
                                <li className="page-item">
                                    <button
                                        className="page-link bg-dark"
                                        onClick={() => handlePageChange(page < totalPages - 1 ? page + 1 : page)}
                                        disabled={page === totalPages - 1}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}