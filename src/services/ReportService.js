import axios from "axios";

class ReportService {
    static BASE_URL = "http://localhost:1010"

    static async fetchReportsPage(token,page,size,name){
        try{
            const response = await axios.get(`${ReportService.BASE_URL}/api/reports`,
                {
                    params: {
                        page: page,
                        name: name,
                        size: size
                    },
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async fetchReports(token){
        try{
            const response = await axios.get(`${ReportService.BASE_URL}/api/reports`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async findReportById(selectedUids){
        try{
            const response = await axios.delete(`${ReportService.BASE_URL}/api/reports/delete/${selectedUids}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async addReport(report, token){
        try{
            const response = await axios.post(`${ReportService.BASE_URL}/api/reports/create`, report,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async updateReport(feedback, token, id){
        try{
            const response = await axios.put(`${ReportService.BASE_URL}/api/reports/update/${id}`, feedback,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async softDeleteReportByid(reportID) {
        try{
            const response = await axios.delete(`${ReportService.BASE_URL}/api/reports/delete/${reportID}`,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
                })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}

export default ReportService;