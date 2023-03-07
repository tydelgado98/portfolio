import './work.css';
import apps from './work.json';

const Work = () => 
    <div id="work">
        <h1> Applications</h1>

        <div id="appsDiv">
            { apps.map(({key,appName,image,info}) => 
                <div className='card' key={key}>
                    <img src={image} alt= "app pic" />

                    <div>
                        <h2>{appName}</h2>
                        <h4>{info}</h4>
                    </div>
                </div>
            )}
        </div>
    </div>

export default Work;