import { SocialIcon } from "react-social-icons"
export const Footer = () => {
    return (
        <div>
          <div className="row" style={{display: "flex", height: "50px", marginBottom: "-50px"}}>
              <div className="col-6" style={{width: "50%", float:"left"}}>
                  <h5>Evelyn Chavez Productions</h5>
              </div>
              <div className="col-6"style={{width: "50%", float:"right"}}>
              <SocialIcon url = "https://twitter.com/jaketrent" style={{width: "1em", margin: ".2em", padding: ".2em"}}/>
              <SocialIcon url = "https://linkedin.com/jaketrent" style={{width: "1em", margin: ".2em", padding: ".2em"}}/>
              <SocialIcon url = "https://instagram.com/jaketrent" style={{width: "1em", margin: ".2em", padding: ".2em"}}/>
              </div>
              </div>  
        </div>
    )
}
