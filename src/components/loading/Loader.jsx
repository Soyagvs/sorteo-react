import "../../styles/Animations.css"
export const Loader = () => (
    <div className="flex justify-center items-center loader">
        <span className="loading loading-spinner text-success"></span>
        <p>cargando..</p>
    </div>
)

export default Loader;