import './index.css'
const Planetitem=(props)=>{
    const{item}=props
    const{imageUrl,description,name}=item
    return(
        <div className='container'>
            <img src={imageUrl} className="imagi" alt="dsugs"/>
            <h1 style={{color:"white",fontFamily:"bold"}}>{name}</h1>
            <p  style={{color:"white",fontFamily:"bold"}}>{description}</p>
        </div>
    )
}
export default Planetitem