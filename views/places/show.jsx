const React = require("react")
const Def = require('../default')

function show(data){
    return (
        <Def>
            <main>
                    <div >
                        <h2>
                            <a href={`/places/${data}`} >
                            {data.places.name}
                            </a>
                        </h2>
                        <div className=".col-mid-8">
                            <img src={data.places.pic} alt={data.places.name} />
                        </div>
                        <div className=".col-6 .col-sm-5">
                            <h2> Rating</h2>
                            <p> No rating yet!</p>
                        </div>
                        <div className=".col-6 .col-sm-5">
                            <h2> Description</h2>
                            <p >
                            Located in {data.places.city}, {data.places.state} and serving {data.places.cuisines}
                            </p>
                        </div>
                        <hr></hr>
                        <div className="comment">
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