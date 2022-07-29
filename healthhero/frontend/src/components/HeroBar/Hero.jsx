import "./Hero.css";

export default function Hero() {
    return(
        <div className="Hero"> 

            {/* <img src={`https://img.freepik.com/free-vector/green-leaf-design-element-set-beige-background-vector_53876-118061.jpg?w=2000&t=st=1659077279~exp=1659077879~hmac=3c0ec4bce4df720e39dbd6fd94aa1693032735eeee35b1496cfe698639988cbf`} alt="leaves"> </img> */}

        <div className="HeroContent">
            <div className="intro">
                <h1> Welcome </h1> 
                <p className="heroDesc"> 
                    Vegan, Halal, Kosher, just looking for a bite to eat? We're here to help!
                </p> 
            </div>
            {/* <div className="media">
                <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="hero" className="hero-img"/>
            </div> */}
        </div>
    </div>
    )
}