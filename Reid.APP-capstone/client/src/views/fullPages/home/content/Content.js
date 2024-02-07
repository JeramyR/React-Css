import { connect } from 'react-redux'
import whiteDog from '../../../../assets/images/white.jpg'

const Content = props => {
    return (
        <>
            <div className='content-container' 
            style={{height: props.nav.hamburger ? " 61vh" : '85vh'}}>
                
                <div className='content-postion'>
                    <h1 className="content-title">Man's Best Friend Pet Place</h1>
                    <img className='content-white-dog' src={whiteDog} alt="white dog" />
                    <p className="content-img-caption ">Todd the rescue dog</p>
                    <hr className='aside-hr content-hr'/>
                    <h3 className="content-subtitle">This page is an example of things I've learned, and has no real purpose.</h3>
                    <p className="content-p">
                        Throughout history, mankind has left some animals to fend for themselves. We strive to find new homes for animals forgotten. Browse our selection of cuddly friends available today!
                    </p>
                    <br />
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                    <p className="content-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem nobis
                        numquam tempore, in recusandae. Error deserunt quo labore dolor temporibus quia facilis aut
                        tenetur id aliquid nisi provident nulla atque placeat sequi aliquam quae ipsa culpa vel, natus,
                        saepe veritatis possimus ea debitis? Recusandae officia, consequatur quis rerum illo nobis ut
                        sed ipsam, iusto error alias itaque accusamus veritatis harum ipsa expedita et beatae
                        consequuntur non tenetur inventore?
                    </p>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        app: state.app,
        user: state.app.user,
        nav: state.nav,
    }
}

export default connect(mapStateToProps, null)(Content)