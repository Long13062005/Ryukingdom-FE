import {useCallback, useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import ContractService from "../../services/ContractService";
import AuthService from "../../services/AuthService";

export function ErrorPage() {


    return (
        <div>
            <div className="row justify-content-center" style={{margin: "30px 0 30px 0"}}>
                <h1 style={{color:"red"}}>404 NOT FOUND</h1>
            </div>
        </div>
    );
}