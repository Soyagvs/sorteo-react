import React, { useState, useEffect } from 'react';
import Loader from '../loading/Loader'; // Asegúrate de importar tu componente Loader
import Modal from '../modal/Modal'; // Asegúrate de importar tu componente Modal

export const TableList = () => {
    const [participants, setParticipants] = useState(() => {
        // Intentar cargar los participantes desde localStorage al inicializar el estado
        const storedParticipants = localStorage.getItem('participants');
        return storedParticipants ? JSON.parse(storedParticipants) : [];
    });
    const [name, setName] = useState('');
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');
    const [winner, setWinner] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    useEffect(() => {
        // Guardar participantes en localStorage cada vez que cambie el estado de participants
        localStorage.setItem('participants', JSON.stringify(participants));
    }, [participants]);

    const handleAddParticipant = () => {
        if (name.trim() !== '') {
            const newParticipant = { id: participants.length + 1, name };
            setParticipants([...participants, newParticipant]);
            setName('');
        }
    };

    const handleDeleteParticipant = (id) => {
        setParticipants(participants.filter(participant => participant.id !== id));
    };

    const handleEditParticipant = (id) => {
        const participantToEdit = participants.find(participant => participant.id === id);
        setEditId(id);
        setEditName(participantToEdit.name);
    };

    const handleSaveEdit = () => {
        setParticipants(participants.map(participant =>
            participant.id === editId ? { ...participant, name: editName } : participant
        ));
        setEditId(null);
        setEditName('');
    };

    const handleSelectWinner = () => {
        if (participants.length > 0) {
            setLoading(true);
            setShowModal(true); // Mostrar el modal al iniciar la carga
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * participants.length);
                setWinner(participants[randomIndex]);
                setLoading(false);
            }, 3000); // Tiempo de la animación de carga en milisegundos
        }
    };

    const handleResetParticipants = () => {
        setParticipants([]);
        setWinner(null);
        localStorage.removeItem('participants');
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5">
                <input
                    className="w-[300px] h-14 rounded-xl bg-white p-5"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del participante"
                />
                <button
                    onClick={handleAddParticipant}
                    className="bg-green-500 text-black rounded-xl h-10 w-24">
                    Agregar
                </button>
            </div>
            <table className="flex flex-col justify-center items-center mt-20 gap-5">
                <thead className="border bg-slate-400 rounded-xl flex justify-center items-center w-[300px]">
                    <tr className="flex flex-row gap-10 text-black justify-center items-center">
                        <th className="text-2xl">Lista de participantes</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map((participant) => (
                        <tr key={participant.id} className="flex flex-row gap-5 justify-center items-center p-1 border border-slate-500 rounded-xl">
                            <td className='text-blue-300'>{participant.id}</td>
                            <td className='text-white'>
                                {editId === participant.id ? (
                                    <input
                                        className='text-white'
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    />
                                ) : (
                                    participant.name
                                )}
                            </td>
                            <td>
                                {editId === participant.id ? (
                                    <button
                                        onClick={handleSaveEdit}
                                        className="bg-blue-500 text-white rounded-xl h-10 w-24">
                                        Guardar
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEditParticipant(participant.id)}
                                        className="bg-yellow-500 text-black rounded-xl h-10 w-24">
                                        Editar
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDeleteParticipant(participant.id)}
                                    className="bg-red-500 text-white rounded-xl h-10 w-24">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-col justify-center items-center gap-5 mt-10">
                <div className="flex gap-5">
                    <button
                        onClick={handleSelectWinner}
                        className="bg-purple-500 text-white rounded-xl h-10 w-24">
                        Sortear
                    </button>
                    <button
                        onClick={handleResetParticipants}
                        className="bg-gray-500 text-white rounded-xl h-10 w-24">
                        Reiniciar
                    </button>
                </div>
                {showModal && (
                    <Modal closeModal={closeModal}>
                        {loading ? (
                            <Loader />
                        ) : winner ? (
                            <>
                                <h2 className="text-2xl">¡Ganador!</h2>
                                <p className="text-xl">{`ID: ${winner.id}, Nombre: ${winner.name}`}</p>
                                <button onClick={closeModal} className="bg-purple-500 text-white rounded-xl h-10 w-24 mt-3">
                                    Cerrar
                                </button>
                            </>
                        ) : null}
                    </Modal>
                )}
            </div>
        </>
    );
};
