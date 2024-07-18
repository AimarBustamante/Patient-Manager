import { toast } from "react-toastify";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";

type PatientDetailsProps = {
	patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
	const deletePatient = usePatientStore((state) => state.deletePatient);
	const getPatientById = usePatientStore((state) => state.getPatientById);

	const handleClick = () => {
		deletePatient(patient.id);
		toast.error("Paciente Eliminado")
	};

	return (
		<div className="m-5 p-10 bg-white shadow-md rounded-xl">
			<PatientDetailItem label="ID" data={patient.id} />
			<PatientDetailItem label="NOMBRE" data={patient.name} />
			<PatientDetailItem label="PROPIETARIO" data={patient.caretaker} />
			<PatientDetailItem label="EMAIL" data={patient.email} />
			<PatientDetailItem
				label="FECHA ALTA"
				data={patient.date.toString()}
			/>
			<PatientDetailItem label="SÍNTOMAS" data={patient.symptoms} />

			<div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
				<button
					type="button"
					className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
					onClick={() => getPatientById(patient.id)}
				>
					Editar
				</button>

				<button
					type="button"
					className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
					onClick={handleClick}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}
