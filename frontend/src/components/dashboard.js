import { useEffect, useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";
import axios from "axios";


const Dashboard = ({ title }) => {
    const [listPresence, setListPresence] = useState([]);
    const [realtimeTable, setRealtimeTable] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem("nama") && !localStorage.getItem('nip')) {
            console.log("user belum login");
            window.location.replace("/login");
        }
        axios({
            method: "GET",
            url: "http://localhost:3200/presence"
        }).then((result) => setListPresence(result.data.presence));
    }, [realtimeTable]);

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const actionPresence = (params) => {
        const requestingData = {
            nip: localStorage.getItem("nip")
        }

        axios({
            method: "post",
            url: `http://localhost:3200/presence/${params}`,
            data: requestingData
        }).then((result) => {
            if (result.data) {
                alert(`${params} sukses!`);
                setRealtimeTable(!realtimeTable);
            }
        });
    }

    return (
        <Container>
            <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">{localStorage.getItem("nama")}</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        {/* <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" className="align-text-bottom"></span>
                            This week
                        </button> */}
                        <Button variant="danger" onClick={() => { logout() }}>Logout</Button>
                    </div>
                </div>

                <h2>{title}</h2>
                <div>
                    <p>Hello {localStorage.getItem("nama")}</p>
                    <p>Nip {localStorage.getItem("nip")}</p>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">NIP</th>
                                <th scope="col">Status</th>
                                <th scope="col">Checkout</th>
                                <th scope="col">Nama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listPresence.map((presence, i) => {
                                    const { users_nip, status, createdAt } = presence;
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{users_nip}</td>
                                            <td>{status}</td>
                                            <td>{createdAt}</td>
                                            <td>text</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" onClick={() => { actionPresence("checkin") }}>checkin</Button>
                    <Button variant="danger" onClick={() => { actionPresence("checkout") }}>checkout</Button>
                </div>
            </main>
        </Container>
    )
}
export default Dashboard;