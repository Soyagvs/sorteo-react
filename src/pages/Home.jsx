import { TableList } from "../components/table/TableList"

export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20 gap-10">
            <h1 className="text-white font-bold text-pretty max-sm:text-5xl max-lg:text-8xl lg:text-9xl text-center max-sm:w-[100%]">Bienvenidos a SORTEOS</h1>
            <p className="text-gray-500 text-2xl text-center w-[700px] max-md:w-[600px] max-sm:w-[300px] mx-52">Debes ingresar los nombres de las personas de las cuales quieres que participen, buena suerte!</p>
            <div className="flex flex-col justify-center items-center gap-5">
                <TableList />
            </div>
        </div>
    )
}

