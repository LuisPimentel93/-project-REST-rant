const React = require("react")
const Def = require('../default')

function show(data){
    return (
        <Def>
            <main> 
                <div className="">                   
                    <h2>
                        <a href={`/places/${data}`} >
                        {data.places.name}
                        </a>
                    </h2>
                    <div >
                        <div >
                            <img src={data.places.pic} alt={data.places.name} />
                            
                        </div>
                        
                        <div className="">
                            <h2> Rating</h2>
                            <p> No rating yet!</p>
                        </div>
                        <div className="">
                            <h2> Description</h2>
                            <p >
                            Located in {data.places.city}, {data.places.state} and serving {data.places.cuisines}
                            </p>
                        </div>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                        </a>     
  
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                        </form> 
                            
                    </div>
                    <hr></hr>
                    <div className="text-center">
                        <h2>Comments</h2>
                        <p className="text-center">No Comments yet!</p>
                    </div>
                </div>
            </main>
        </Def>
    )
}
// className=".col-sm-5"

module.exports = show