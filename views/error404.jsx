const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p> What you Doin?</p>
                <div>

                    <img src="/images/charlesdeluvio-pOUA8Xay514-unsplash.jpg"></img>
                    <div>
                    Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a> on <a href="https://unsplash.com/s/photos/confused-dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404


