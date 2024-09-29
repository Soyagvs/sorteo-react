export const Modal = ({ closeModal, children }) => {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100">
            <div className="transform transition-transform duration-300 ease-in-out scale-100">
                {/* Contenido del modal */}
                <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none justify-center items-center w-[300px]">
                    <div className="flex items-start justify-between p-5 border-b border-solid rounded-t gap-3">
                        <h3 className="text-3xl font-semibold">
                            Resultado
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border text-red-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none flex justify-center items-center"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                    {/* Contenido dinámico del modal */}
                    <div className="relative p-6 flex-auto">
                        {children}
                    </div>
                </div>
            </div>
            {/* Fondo oscuro del modal */}
            <div className="fixed inset-0 -z-10 bg-black opacity-50" onClick={closeModal}></div>
        </div>
    );
};
