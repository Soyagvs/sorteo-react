import { TableList } from "../components/table/TableList"

export const Home = () => {
    return (
        <main className="flex flex-col justify-center items-center pt-14 gap-10">
            <h1 className="text-white font-bold text-pretty max-sm:text-5xl xl:text-9xl md:text-8xl sm:text-8xl text-center max-w-[900px]">Bienvenidos a SORTEOS</h1>
            <p className="text-gray-500 text-2xl text-center w-[700px] max-md:w-[600px] max-sm:w-[300px] mx-52">Debes ingresar los nombres de las personas de las cuales quieres que participen, buena suerte!</p>
            <div className="flex flex-col justify-center items-center gap-5">
                <TableList />
            </div>
        </main>
    )
}

