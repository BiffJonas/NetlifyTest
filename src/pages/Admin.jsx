import React from "react";
import GetDocument from "../components/GetDocument";
import GetCollection from "../components/GetCollection";
import DeleteDocument from "../components/DeleteDocument";
import Modal from "../components/Modal";

const Admin = () => {
	return (
		<>
			<GetDocument />
			<GetCollection />
			<DeleteDocument />
			<Modal />
		</>
	);
};

export default Admin;
