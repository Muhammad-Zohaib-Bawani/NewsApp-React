import React, { useEffect, useState } from 'react'
import "./App.css"
import logo from './Assests/logo3.png'
import moment from 'moment';

function App() {



    useEffect(() => {
        getNews('World')
    }, [])




    let [data, setData] = useState([]);
    let [search, setSearch] = useState('');
    let [loading, setLoading] = useState(true);


    function getNews(topic) {
        setLoading(true);
        fetch(`https://gnews.io/api/v4/search?q=${topic}&lang=en&apikey=26beadfc6195a33c16819ae4f027b296`)
            .then(res => res.json())
            .then(res => {
                setData(res.articles)
                setLoading(false);
                console.log(res);


            })

    }


    return (

        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary header">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" className="logo-img" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" onClick={() => getNews('Pakistan')}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => getNews('Politics')}>Politics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => getNews('Education')}>Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => getNews('Health')}>Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => getNews('Environment')}>Environment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => getNews('Economy')}>Economy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => getNews('Business')}>Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => getNews('Science')}>Science</a>
                                </li>
                            </ul>
                            <div className="d-flex search-bar-div" role="search">
                                <input type="search" className='form-control me-2 search' placeholder='Search'
                                    onChange={(e) => setSearch(e.target.value)} />
                                <button className="btn btn-outline-success search-btn" type="submit" onClick={() => getNews(search)} >Search</button>
                            </div>


                        </div>
                    </div>
                </nav>
            </div>


            {loading && <div className="center">  <div className='loader'></div></div>}

            <div className="container-fluid main-div  d-flex flex-wrap justify-content-center  mt-4  ">
                {
                    data.map((currentNews, index) => {
                        return <>
                            
                                <a href={currentNews.url} className="news-link">
                                    <div className="news-div col-md-4">

                                        <div className="image-div">
                                            <div className="time-div">
                                                <i className="fa-solid fa-clock"></i>
                                                {moment(currentNews.publishedAt).fromNow()}
                                            </div>
                                            <img key={index} src={currentNews.image} alt="" className="news-image"/>
                                        </div>
                                        <div className="news">
                                            <h5 className="news-title" key={index}>{currentNews.title.slice(0, 30) + '...'}</h5>
                                            <div className="hr-line"></div>
                              <p >{currentNews.description.slice(0, 150) + '...'}</p>
                             <div className="author-div">
                         <span classname="">{currentNews.source.name}</span>
                   </div>





                   </div>

      </div>
  </a>
    
    </>
    
   })}
</div>
            </div >
     
    )
}

export default App



