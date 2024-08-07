//import blogData from "../data/blog"

function About(props){
    const defaulturl ="https://via.placeholder.com/215"
   
    return (
        <>
        <aside>
            <div><img src={props.image? props.image:defaulturl} alt="blog logo" /></div>
            <div className="author">
            <p>Personal blog by <a href="https://overreacted.io/">{props.author}</a></p>
            <p>{props.about}</p>
            </div>
        </aside>
        </>
    )
}
export default About