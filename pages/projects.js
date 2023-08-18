import illiteracy from './illiteracy.html';


export default function Illiteracy() {
    return (
        <div>
            <h1 id="projects">Projects</h1>
            <br/>
            <br/>
            <br/>
            <p>The code below is the code for analyzing the Illiteracy Rate of the Vietnam Population in 2020.</p>
            <p>This project looks the most interesting in my opinion so I will put it here.</p>
            <p>My other projects can be found <a href="https://github.com/NoAtmosphere0/projects"><strong>here</strong></a></p>
        <div dangerouslySetInnerHTML={{ __html: illiteracy }} />
        </div>
    );
}

