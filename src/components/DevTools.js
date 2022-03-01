const DevTools = ({ devtools}) => {
    return (
        <div id={devtools}>
            <h2>Tools</h2>
            <div id='devToolDiv'>
                <i className="devicon-html5-plain devIcon"></i>
                <p>HTML5</p>

                <i className="devicon-css3-plain devIcon"></i>
                <p>CSS3</p>

                <i className="devicon-javascript-plain devIcon"></i>
                <p>JavaScript</p>

                <i className="devicon-python-plain devIcon"></i>
                <p>Python</p>

                <i className="devicon-react-original"></i>
                <p>React.js</p>

                <i className="devicon-bootstrap-plain devIcon"></i>
                <p>Bootstrap 5</p>

                <i className="devicon-nodejs-plain"></i>
                <p>Node.js</p>

                <i className="devicon-postgresql-plain"></i>
                <p>PostgreSQL</p>

                <i className="devicon-sequelize-plain"></i>
                <p>Sequelize</p>

                <i className="devicon-github-original devIcon"></i>
                <p>GitHub</p>

                <i className="devicon-firebase-plain devIcon"></i>
                <p>Firebase</p>

                <i className="devicon-heroku-plain"></i>
                <p>Heroku</p>
            </div>
        </div>
    )
}

export default DevTools;