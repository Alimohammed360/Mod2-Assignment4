import people1 from '../assets/img/testimonials-1.jpg'
import people2 from '../assets/img/testimonials-2.jpg'
import people3 from '../assets/img/testimonials-3.jpg'
import background1 from '../assets/img/bg-showcase-1.jpg'
import background2 from '../assets/img/bg-showcase-2.jpg'
import background3 from '../assets/img/bg-showcase-3.jpg'
const Head = () => {
        return <header className="d-flex align-items-center justify-content-around">
                <p className="fs-5 pt-2">Logo</p>
                <button className="btn btn-primary btn sm">Sign Up</button>
        </header>
}

const TextOceanImg = () => {
        return <div className="innerDiv">
                <h1>Generate More Leads With A Professional Landing Page!</h1>
        </div>
}

const Input = () => {
        return <input className="w-50 border rounded p-1" type="text" placeholder="" />
}
const Button = () => {
        return <button className="btn btn-primary">Search</button>
}
const OceanImg = () => {
        return <div className="oceanImg d-flex align-items-center justify-content-center">
                <div className="text-center">
                        <TextOceanImg />
                        <div className="">
                                <div className="p-3">
                                        <Input /><Button />
                                </div>
                        </div>
                </div>
        </div>
}

const BootstrapReady = () => {
        return <div className="row bootready d-flex align-items-center justify-content-evenly pt-5">
                <div className="col text-center col-lg-2">
                        <i style={{ fontSize: "60px", paddingBottom: "30px" }} class="fa-solid fa-window-restore fa-2xl"></i>
                        <h4>Fully Responsive</h4>
                        <p style={{ fontSize: "13px" }}>This Theme Will Look Great On Any Device no matter the size</p>
                </div>
                <div className="col text-center col-lg-2">
                        <i style={{ fontSize: "60px", paddingBottom: "30px" }} class="fa-brands fa-bootstrap fa-2xl"></i>
                        <h4>Bootstrap 5 Ready</h4>
                        <p style={{ fontSize: "13px" }}>Featuring the latest build of the new Bootstrap 5 Framework!</p>
                </div>
                <div className="col text-center col-lg-2">
                        <i style={{ fontSize: "60px", paddingBottom: "30px" }} class="fa-brands fa-fantasy-flight-games fa-2xl"></i>
                        <h4>Easy To Use</h4>
                        <p style={{ fontSize: "13px" }}>Ready to use with your own content or custoize the source files</p>
                </div>
        </div>
}

const MainOver = () => {

        return <div className="row">
                <div className="col col-lg-6 innerdiv">
                        <div className="text">
                                <h4>Fully Responsive Design</h4>
                                <p>When you use a theme created by Star Bootstrap you know that theme will look great on any device whether it is a phone a tablet or desktop the page will behave remotely</p>
                        </div>
                </div>
                <div className="col col-lg-6 p-0">
                        <img className='bgs' src={background1} alt="" />
                </div>
        </div>
}
const MainOver2 = () => {

        return <div className="row">
                <div className="col col-lg-6 p-0">
                        <img className='bgs' src={background2} alt="" />
                </div>
                <div className="col col-lg-6 innerdiv">
                        <div className="text">
                                <h4>Fully Responsive Design</h4>
                                <p>When you use a theme created by Star Bootstrap you know that theme will look great on any device whether it is a phone a tablet or desktop the page will behave remotely</p>
                        </div>
                </div>
        </div>
}
const MainOver3 = () => {

        return <div className="row">
                <div className="col col-lg-6 innerdiv">
                        <div className="text">
                                <h4>Fully Responsive Design</h4>
                                <p>When you use a theme created by Star Bootstrap you know that theme will look great on any device whether it is a phone a tablet or desktop the page will behave remotely</p>
                        </div>
                </div>
                <div className="col col-lg-6 p-0">
                        <img className='bgs' src={background3} alt="" />

                </div>
        </div>
}

const People = () => {
        return <div className="row bootready d-flex align-items-center justify-content-evenly pt-5">
                <div className="col text-center col-lg-2">
                        <img style={{ width: "150px" }} className='rounded-pill' src={people1} alt="" />
                        <h4>Margret A.</h4>
                        <p style={{ fontSize: "13px" }}>This is Fantastic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi!</p>
                </div>
                <div className="col text-center col-lg-2">
                        <img style={{ width: "150px" }} className='rounded-pill' src={people2} alt="" />
                        <h4>Fred S.</h4>
                        <p style={{ fontSize: "13px" }}>Bootstrap is amazing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, nulla?</p>
                </div>
                <div className="col text-center col-lg-2">
                        <img style={{ width: "150px" }} className='rounded-pill' src={people3} alt="" />
                        <h4>Sarah E.</h4>
                        <p style={{ fontSize: "13px" }}>Thank you so much Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, omnis.</p>
                </div>
        </div>
}

const Ocean2 = () => {
        
}

export { OceanImg, Head, BootstrapReady, MainOver, MainOver2, MainOver3, People, Ocean2 };