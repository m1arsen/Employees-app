import "./app-info.css";

const AppInfo = ({empTotal, empIncreased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {empTotal}</h2>
            <h2>Премию получат: {empIncreased}</h2>
        </div>
    )
}

export default AppInfo;